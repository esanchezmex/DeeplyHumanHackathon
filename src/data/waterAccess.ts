import waterAccessStats from "./waterAccessStats.json";

/**
 * Returns pre-computed water access statistics from the Gapminder dataset.
 * Data is processed at build time from the CSV file.
 */
export function getWaterAccessStats() {
  return waterAccessStats as {
    globalAverage: number;
    year: number;
    totalCountries: number;
    countriesBelow50: number;
    countriesAbove95: number;
  };
}


