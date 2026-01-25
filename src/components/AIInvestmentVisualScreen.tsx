"use client";

import type { AIInvestmentVisualPage } from "../questions";
import styles from "./QuestionScreens.module.css";

interface AIInvestmentVisualScreenProps {
  aiInvestmentVisual: AIInvestmentVisualPage;
  onNext: () => void;
  animationClass?: string;
}

export function AIInvestmentVisualScreen({
  aiInvestmentVisual,
  onNext,
  animationClass = "",
}: AIInvestmentVisualScreenProps) {
  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight : 
                      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="aiInvestmentVisual">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Visual</p>
          <p className={styles.stepCounter}>Question 4 of 4</p>
        </header>
        <main className={styles.main}>
          <div className={styles.chartPlaceholder}>
            {/* Placeholder for chart - will be specified later */}
          </div>
          <section className={styles.insightSection}>
            {aiInvestmentVisual.insightLines.map((line, index) => (
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

