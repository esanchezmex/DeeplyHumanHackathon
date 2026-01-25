"use client";

import { useState } from "react";
import type { HypothesisCheckPage } from "../questions";
import styles from "./QuestionScreens.module.css";

interface HypothesisCheckScreenProps {
  hypothesisCheck: HypothesisCheckPage;
  initialHypothesis?: string;
  onHypothesisSelect: (hypothesis: string) => void;
  animationClass?: string;
}

export function HypothesisCheckScreen({
  hypothesisCheck,
  initialHypothesis,
  onHypothesisSelect,
  animationClass = "",
}: HypothesisCheckScreenProps) {
  const [selectedHypothesis, setSelectedHypothesis] = useState<string | undefined>(initialHypothesis);

  const handleHypothesisClick = (hypothesis: string) => {
    setSelectedHypothesis(hypothesis);
  };

  const handleNext = () => {
    if (selectedHypothesis) {
      onHypothesisSelect(selectedHypothesis);
    }
  };

  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight : 
                      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="hypothesisCheck">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Interpret</p>
          <p className={styles.stepCounter}>Question 4 of 4</p>
        </header>
        <main className={styles.main}>
          <h1 className={styles.prompt}>{hypothesisCheck.prompt}</h1>
          <div className={styles.hypothesisOptions}>
            {hypothesisCheck.options.map((option) => (
              <button
                key={option}
                type="button"
                className={`${styles.hypothesisButton} ${
                  selectedHypothesis === option ? styles.hypothesisButtonSelected : ""
                }`}
                onClick={() => handleHypothesisClick(option)}
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
              disabled={!selectedHypothesis}
            >
              Next
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
}

