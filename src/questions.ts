export type InputType = "number" | "slider";

export type ChartType = "bar" | "split";

export type QuestionStepId = "dailyVolume" | "showerShare";

export interface QuestionStepBase {
  id: QuestionStepId;
  prompt: string;
  inputType: InputType;
  unitsLabel: string;
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
          `Over a year, that’s roughly ${poolsPerYear.toFixed(
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
];


