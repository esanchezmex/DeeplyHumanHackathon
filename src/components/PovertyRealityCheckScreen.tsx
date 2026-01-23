"use client";

import type { PovertyRealityCheckPage } from "../questions";
import styles from "./QuestionScreens.module.css";

interface PovertyRealityCheckScreenProps {
  povertyRealityCheck: PovertyRealityCheckPage;
  guessValue: number;
  onNext: () => void;
  animationClass?: string;
}

export function PovertyRealityCheckScreen({
  povertyRealityCheck,
  guessValue,
  onNext,
  animationClass = "",
}: PovertyRealityCheckScreenProps) {
  const formatPercent = (val: number): string => {
    return `${val.toFixed(1)}%`;
  };

  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight : 
                      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="povertyRealityCheck">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Reality Check</p>
          <p className={styles.stepCounter}>Question 4 of 4</p>
        </header>
        <main className={styles.main}>
          <div className={styles.realityComparison}>
            <div className={styles.comparisonRow}>
              <span className={styles.comparisonLabel}>You guessed:</span>
              <span className={styles.comparisonValue}>{formatPercent(guessValue)}</span>
            </div>
            <div className={styles.comparisonRow}>
              <span className={styles.comparisonLabel}>Data suggests:</span>
              <span className={styles.comparisonValue}>{formatPercent(povertyRealityCheck.actualValue)}</span>
            </div>
          </div>
          <div className={styles.chartPlaceholder}>
            {/* Placeholder for chart - will be specified later */}
          </div>
          <section className={styles.insightSection}>
            {povertyRealityCheck.insightLines.map((line, index) => (
              <p key={index} className={styles.insightText}>
                {line}
              </p>
            ))}
          </section>
        </main>
        <footer className={styles.footer}>
          <button
            type="button"
            onClick={onNext}
            className={styles.primaryButton}
          >
            Next
          </button>
        </footer>
      </div>
    </div>
  );
}
