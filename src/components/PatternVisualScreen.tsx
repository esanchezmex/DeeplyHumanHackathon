"use client";

import type { PatternVisualPage } from "../questions";
import styles from "./QuestionScreens.module.css";

interface PatternVisualScreenProps {
  patternVisual: PatternVisualPage;
  onNext: () => void;
  animationClass?: string;
}

export function PatternVisualScreen({
  patternVisual,
  onNext,
  animationClass = "",
}: PatternVisualScreenProps) {
  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight : 
                      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="patternVisual">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Pattern</p>
          <p className={styles.stepCounter}>Question 4 of 4</p>
        </header>
        <main className={styles.main}>
          <div className={styles.patternChartPlaceholder}>
            {/* Placeholder for chart - will be specified later */}
          </div>
          <section className={styles.patternMicrocopy}>
            {patternVisual.microcopyLines.map((line, index) => (
              <p key={index} className={styles.patternText}>
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

