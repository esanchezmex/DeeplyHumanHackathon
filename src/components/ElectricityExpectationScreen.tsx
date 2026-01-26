"use client";

import { useState } from "react";
import type { ElectricityExpectationPage } from "../questions";
import styles from "./QuestionScreens.module.css";

interface ElectricityExpectationScreenProps {
  electricityExpectation: ElectricityExpectationPage;
  initialSelection?: string;
  onSelection: (selection: string) => void;
  animationClass?: string;
}

export function ElectricityExpectationScreen({
  electricityExpectation,
  initialSelection,
  onSelection,
  animationClass = "",
}: ElectricityExpectationScreenProps) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(initialSelection);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      onSelection(selectedOption);
    }
  };

  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight :
      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="electricityExpectation">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Reflect</p>
        </header>
        <main className={styles.main}>
          <h1 className={styles.prompt}>{electricityExpectation.prompt}</h1>
          <div className={styles.moodOptions}>
            {electricityExpectation.options.map((option) => (
              <button
                key={option}
                type="button"
                className={`${styles.moodButton} ${selectedOption === option ? styles.moodButtonSelected : ""
                  }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <footer className={styles.footer}>
            <button
              type="button"
              onClick={handleNext}
              className={styles.primaryButton}
              disabled={!selectedOption}
            >
              Next
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
}

