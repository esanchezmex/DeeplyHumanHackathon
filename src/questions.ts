import React from "react";

export type InputType = "number" | "slider";

export type ChartType = "bar" | "split";

export type QuestionStepId = "dailyVolume" | "showerShare" | "globalWaterAccess" | "economicAidPoverty";

export interface IntroPage {
  title: string;
  subtitle: string;
  ctaText: string;
}

export interface MoodCheckPage {
  statementCard: string | React.ReactNode;
  prompt: string;
  moodOptions: string[];
}

export interface ElectricityExpectationPage {
  prompt: string;
  options: string[];
}

export interface AidEstimatePage {
  prompt: string;
  sliderTicks: number[];
  maxValue: number;
  microcopy: string;
}

export interface RealityCheckPage {
  actualValue: number;
  insightLines: string[];
}

export interface PovertyEstimatePage {
  prompt: string;
  maxValue: number;
  microcopy: string;
}

export interface PovertyRealityCheckPage {
  actualValue: number;
  insightLines: string[];
}

export interface PatternVisualPage {
  microcopyLines: string[];
}

export interface HypothesisCheckPage {
  prompt: string;
  options: string[];
}

export interface AIInvestmentCheckPage {
  statementCard: string | React.ReactNode;
  prompt: string;
  options: string[];
  maxSelections: number;
}

export interface AIInvestmentVisualPage {
  insightLines: string[];
}

export interface SynthesisPage {
  title: string;
  textLines: string[];
  reflectionPrompt: string;
}

export interface FinalActionsPage {
  buttonLabels: string[];
}

export interface QuestionStepBase {
  id: QuestionStepId;
  prompt: string;
  inputType: InputType;
  unitsLabel: string;
  intro?: IntroPage;
  moodCheck?: MoodCheckPage;
  electricityExpectation?: ElectricityExpectationPage;
  aidEstimate?: AidEstimatePage;
  realityCheck?: RealityCheckPage;
  povertyEstimate?: PovertyEstimatePage;
  povertyRealityCheck?: PovertyRealityCheckPage;
  patternVisual?: PatternVisualPage;
  hypothesisCheck?: HypothesisCheckPage;
  aiInvestmentCheck?: AIInvestmentCheckPage;
  aiInvestmentVisual?: AIInvestmentVisualPage;
  synthesis?: SynthesisPage;
  finalActions?: FinalActionsPage;
}

export interface RevealConfig {
  chartType: ChartType;
  actualValue: number;
  maxValue: number;
  context: (userValue: number) => string;
  subtitle?: (userValue: number) => string;
}

export interface QuestionStep extends QuestionStepBase {
  reveal: RevealConfig;
}

// Import water access data utility
import { getWaterAccessStats } from "./data/waterAccess";

// Simple constants for the story.
const LITERS_PER_BATHTUB = 150;
const LITERS_PER_OLYMPIC_POOL = 2500000;

function formatNumber(value: number): string {
  return value.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
}

export function litersToBathtubs(litersPerDay: number): number {
  return litersPerDay / LITERS_PER_BATHTUB;
}

export function litersToOlympicPoolsPerYear(litersPerDay: number): number {
  const yearlyLiters = litersPerDay * 365;
  return yearlyLiters / LITERS_PER_OLYMPIC_POOL;
}

export function differenceFactor(guess: number, actual: number): string {
  if (!guess || guess <= 0 || !actual || actual <= 0) return "";
  const factor = actual / guess;
  if (factor < 1.25 && factor > 0.8) {
    return "very close to reality.";
  }
  if (factor >= 1.25 && factor < 2) {
    return "lower than reality – you’re underestimating a bit.";
  }
  if (factor >= 2 && factor < 5) {
    return "much lower than reality – you’re underestimating a lot.";
  }
  if (factor >= 5) {
    return "far below reality – most of your water use is invisible.";
  }
  if (factor <= 0.8 && factor > 0.5) {
    return "higher than reality – you’re slightly overestimating.";
  }
  if (factor <= 0.5 && factor > 0.2) {
    return "much higher than reality – you’re overestimating a lot.";
  }
  return "very far from reality.";
}

export const questionSteps: QuestionStep[] = [
  {
    id: "dailyVolume",
    prompt: "How many liters of water do you think you use in a day?",
    inputType: "slider",
    unitsLabel: "liters per day",
    reveal: {
      chartType: "bar",
      actualValue: 300,
      maxValue: 600,
      context: (userValue: number) => {
        const actual = 300;
        const poolsPerYear = litersToOlympicPoolsPerYear(actual);
        const bathtubsPerDay = litersToBathtubs(actual);
        const factorText = differenceFactor(userValue, actual);
        return [
          `A typical person uses around ${formatNumber(
            actual
          )} liters per day – about ${bathtubsPerDay.toFixed(
            1
          )} bathtubs every single day.`,
          `Over a year, that's roughly ${poolsPerYear.toFixed(
            2
          )} Olympic pools of water. Your guess was ${factorText}`,
        ].join(" ");
      },
      subtitle: (userValue: number) => {
        const actual = 300;
        const diff = Math.abs(actual - userValue);
        if (!userValue || userValue <= 0) return "";
        return `You were off by ${formatNumber(
          diff
        )} liters compared to this benchmark.`;
      },
    },
  },
  {
    id: "showerShare",
    prompt: "What share of your home water do you think goes into showers?",
    inputType: "slider",
    unitsLabel: "% of home water use",
    reveal: {
      chartType: "split",
      actualValue: 30,
      maxValue: 100,
      context: (userValue: number) => {
        const actual = 30;
        const factorText = differenceFactor(userValue, actual);
        return `Showers account for about ${actual}% of indoor water use in many homes. Your guess was ${factorText}`;
      },
      subtitle: (userValue: number) => {
        const actual = 30;
        const diff = Math.abs(actual - userValue);
        return `You were off by ${diff.toFixed(
          0
        )} percentage points from this reference share.`;
      },
    },
  },
  {
    id: "globalWaterAccess",
    prompt: "What percentage of the world's population do you think has access to at least basic water sources?",
    inputType: "slider",
    unitsLabel: "% of global population",
    reveal: (() => {
      const stats = getWaterAccessStats();
      return {
        chartType: "bar" as ChartType,
        actualValue: stats.globalAverage,
        maxValue: 100,
        context: (userValue: number) => {
          const actual = stats.globalAverage;
          const factorText = differenceFactor(userValue, actual);
          const year = stats.year;
          const below50 = stats.countriesBelow50;
          const above95 = stats.countriesAbove95;
          
          return [
            `As of ${year}, the global average is ${actual.toFixed(1)}% – meaning about ${(100 - actual).toFixed(1)}% of the world's population still lacks basic water access.`,
            `This data covers ${stats.totalCountries} countries. ${below50} countries have less than 50% access, while ${above95} countries have achieved 95% or more. Your guess was ${factorText}`,
          ].join(" ");
        },
        subtitle: (userValue: number) => {
          const actual = stats.globalAverage;
          const diff = Math.abs(actual - userValue);
          return `You were off by ${diff.toFixed(1)} percentage points from the ${stats.year} global average.`;
        },
      };
    })(),
  },
  {
    id: "economicAidPoverty",
    prompt: "What percentage of the world's population do you think lives in extreme poverty (below $3.00/day)?",
    inputType: "slider",
    unitsLabel: "% of global population",
    intro: {
      title: "The Hidden Cost of Progress",
      subtitle: "Three curves. One question: what's improving—and what's not?",
      ctaText: "Begin",
    },
    moodCheck: {
      statementCard: React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "p",
          { style: { fontWeight: "bold", marginBottom: "1rem" } },
          "By 2022, connectivity itself became a mass daily electricity load"
        ),
        React.createElement(
          "p",
          { style: { fontWeight: "normal" } },
          "The UN Agency for Digital Technologies estimates ~5.3 billion people were using the internet in 2022 (about 66% of the world). In 2005, global penetration was only ~17%, a shift that implies far more always-on device ecosystems (phones, Wi-Fi, laptops, set-top boxes) per person."
        )
      ),
      prompt: "When you think about your everyday digital footprint, what rises first?",
      moodOptions: ["Pride", "Discomfort", "Distance"],
    },
    electricityExpectation: {
      prompt: "And therefore, before you see the data: do you expect electricity use to be…",
      options: ["Mostly flat", "Gradually rising", "Sharply rising"],
    },
    aidEstimate: {
      prompt: "In 2024, how much aid received per person do you think the average person received?",
      sliderTicks: [0, 25, 50, 100, 200, 300],
      maxValue: 300,
      microcopy: "Your guess doesn't need to be right—just honest.",
    },
    realityCheck: {
      actualValue: 50, // Placeholder - will be updated with real data
      insightLines: [
        "Aid per person is easy to talk about—but hard to picture.",
        "Numbers feel different when they touch a single life.",
      ],
    },
    povertyEstimate: {
      prompt: "In the same year, what % of people do you think lived in extreme poverty?",
      maxValue: 10,
      microcopy: "A single digit can represent millions.",
    },
    povertyRealityCheck: {
      actualValue: 8.5, // Placeholder - will be updated with real data
      insightLines: [
        "Poverty is a percentage, but it lands as a life.",
        "When you picture it, what do you picture—scarcity, instability, or exclusion?",
      ],
    },
    patternVisual: {
      microcopyLines: [
        "Two things can move together—or oppose each other—without one causing the other.",
        "But patterns still ask questions.",
      ],
    },
    hypothesisCheck: {
      prompt: "If you had to explain this pattern, which feels closest?",
      options: [
        "Aid is helping reduce extreme poverty.",
        "Aid rises when poverty rises.",
        "Something else is driving both.",
        "I'm not sure.",
      ],
    },
    aiInvestmentCheck: {
      statementCard: "In 2024, private AI investment was about $X billion.",
      prompt: "What would you expect that kind of investment to change in the world?",
      options: ["Health", "Jobs", "Poverty", "Education", "Environment", "I don't know"],
      maxSelections: 2,
    },
    aiInvestmentVisual: {
      insightLines: [
        "AI investment accelerated fast.",
        "Acceleration feels like progress—until you ask: progress for whom?",
      ],
    },
    synthesis: {
      title: "A question the chart can't answer for us",
      textLines: [
        "Investment can rise while hardship persists.",
        "Aid can increase without translating into lived security.",
        "Technology can amplify what a system already rewards.",
        "The impact isn't only what we build, but who it reaches.",
      ],
      reflectionPrompt: "If you could direct one lever—aid, policy, or technology—what would you change first?",
    },
    finalActions: {
      buttonLabels: [
        "Continue to next dimension",
        "Explore sources & methodology",
      ],
    },
    reveal: {
      chartType: "bar",
      actualValue: 20,
      maxValue: 100,
      context: (userValue: number) => {
        const actual = 20;
        const factorText = differenceFactor(userValue, actual);
        return `As of recent data, approximately ${actual}% of the world's population lives in extreme poverty. Your guess was ${factorText}`;
      },
      subtitle: (userValue: number) => {
        const actual = 20;
        const diff = Math.abs(actual - userValue);
        return `You were off by ${diff.toFixed(1)} percentage points from the current estimate.`;
      },
    },
  },
];


