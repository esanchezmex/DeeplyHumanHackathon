import React from "react";

export type InputType = "number" | "slider";

export type ChartType = "bar" | "split";

export type QuestionStepId = "economicAidPoverty";

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

export interface PowerRisingPage {
  headline: string;
  bodyText1: string;
  percentageIncrease: number;
  visualPlaceholder?: React.ReactNode;
  bodyText2: string;
}

export interface ElectricityExpectationPage {
  prompt: string;
  options: string[];
}

export interface PerPersonStablePage {
  title: string;
  bodyText1: string;
  percentageChange: number;
  visualPlaceholder?: React.ReactNode;
  bodyText2: string;
}

export interface RecentJumpPage {
  title: string;
  bodyText1: string;
  visualPlaceholder?: React.ReactNode;
  callout2005to2022: number;
  callout2022to2024: number;
  bodyText2: string;
}

export interface AICoincidencePage {
  bodyText: string;
  visualPlaceholder?: React.ReactNode;
  microcopy: string;
  bodyText2: string;
}

export interface SpeedIsStoryPage {
  title: string;
  bodyText1: string;
  visualPlaceholder1?: React.ReactNode;
  bodyText2: string;
  visualPlaceholder2?: React.ReactNode;
  bodyText3: string;
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
  powerRising?: PowerRisingPage;
  electricityExpectation?: ElectricityExpectationPage;
  perPersonStable?: PerPersonStablePage;
  recentJump?: RecentJumpPage;
  aiCoincidence?: AICoincidencePage;
  speedIsStory?: SpeedIsStoryPage;
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
    powerRising: {
      headline: "Power has been quietly rising for years.",
      bodyText1: "Global electricity generation has climbed steadily—year after year.",
      percentageIncrease: 58,
      bodyText2: "A growing share of daily life is \"invisible electricity\": Wi-Fi, servers, data transfer, charging, background syncing.",
    },
    electricityExpectation: {
      prompt: "And therefore, before you see the data: do you expect electricity use per person to be…",
      options: ["Mostly flat", "Gradually rising", "Sharply rising"],
    },
    perPersonStable: {
      title: "For years, the per-person story was… stable.",
      bodyText1: "Even as our digital lives expanded, electricity use per person didn't explode—it changed by only",
      percentageChange: 12,
      bodyText2: "For most of the last decade, we mostly kept per-person electricity use in check.\nThat matters: fewer watts per person can mean less pressure on the planet.\nMaybe something else was happening in parallel: efficiency gains, shifting where energy is used, and a world getting better at doing more with less, at least for a while...",
    },
    recentJump: {
      title: "Then something changed: A recent jump changes the story",
      bodyText1: "From 2005 to 2022, the change was modest.\nBut from 2022 to 2024, the increase is sharper—too large to ignore.",
      callout2005to2022: 12,
      callout2022to2024: 15,
      bodyText2: "In just two years, energy use per person has increased more than in the entire decade and change beforehand.\nSomething new is being added to the \"always-on\" baseline.\nNot just more devices—more computation behind the scenes.",
    },
    aiCoincidence: {
      bodyText: "This coincides with the mainstreaming of generative AI and expanding data-center demand.",
      microcopy: "No single chart proves cause. But patterns can still guide better questions.",
      bodyText2: "ChatGPT was released to the public by OpenAI on November 30, 2022, marking the start of the modern generative AI era for users. As a free research preview, it immediately went viral, reaching 1 million users in five days and 100 million users within two months.",
    },
    synthesis: {
      title: "The question the next decade will answer",
      textLines: [
        "Electricity use didn't surge for years—until it did.",
        "The new demand isn't just more devices. It's more computation.",
        "",
        "The question isn't whether we'll use AI.",
        "It's what kind of infrastructure we'll build around it—and who pays the cost.",
        "",
        "If AI is becoming a daily utility, should it be required to be a clean one?",
      ],
      reflectionPrompt: "If you like, share one change you'd make this week—if any?",
    },
    speedIsStory: {
      title: "The Speed Is the Story",
      bodyText1: "We didn't just adopt technology. We reorganized life around it.\n\nIn a few decades, mobile phones and internet access went from rare to default—especially in dense, urban life.\nThat kind of growth doesn't only change what we can do. It changes what we expect, how we spend time, and how we relate to one another.",
      bodyText2: "Now we're watching another curve accelerate—generative AI—fast enough to feel like a shift in daily reality.",
      bodyText3: "Just like phones and the internet, AI is moving from novelty to habit—at record speed.",
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


