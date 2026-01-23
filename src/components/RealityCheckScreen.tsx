"use client";

import type { RealityCheckPage } from "../questions";
import styles from "./QuestionScreens.module.css";

interface RealityCheckScreenProps {
  realityCheck: RealityCheckPage;
  guessValue: number;
  onNext: () => void;
  animationClass?: string;
}

export function RealityCheckScreen({
  realityCheck,
  guessValue,
  onNext,
  animationClass = "",
}: RealityCheckScreenProps) {
  const formatCurrency = (val: number): string => {
    return `$${Math.round(val).toLocaleString()}`;
  };

  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight : 
                      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="realityCheck">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Reality Check</p>
          <p className={styles.stepCounter}>Question 4 of 4</p>
        </header>
        <main className={styles.main}>
          <div className={styles.realityComparison}>
            <div className={styles.comparisonRow}>
              <span className={styles.comparisonLabel}>You guessed:</span>
              <span className={styles.comparisonValue}>{formatCurrency(guessValue)}</span>
            </div>
            <div className={styles.comparisonRow}>
              <span className={styles.comparisonLabel}>Data suggests:</span>
              <span className={styles.comparisonValue}>{formatCurrency(realityCheck.actualValue)}</span>
            </div>
          </div>
          <div className={styles.chartPlaceholder}>
            {/* Placeholder for chart - will be specified later */}
          </div>
          <section className={styles.insightSection}>
            {realityCheck.insightLines.map((line, index) => (
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

