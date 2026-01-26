"use client";

import type { AICoincidencePage } from "../questions";
import styles from "./QuestionScreens.module.css";
import { AIInvestmentChart } from "./charts/AIInvestmentChart";

interface AICoincidenceScreenProps {
  aiCoincidence: AICoincidencePage;
  onNext: () => void;
  animationClass?: string;
}

export function AICoincidenceScreen({
  aiCoincidence,
  onNext,
  animationClass = "",
}: AICoincidenceScreenProps) {
  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight :
      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="aiCoincidence">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Context</p>
        </header>
        <main className={styles.main}>
          <h1 className={styles.prompt}>{aiCoincidence.title}</h1>
          <div className={styles.powerRisingContent}>
            <p className={styles.powerRisingText}>
              {aiCoincidence.bodyText}
            </p>
            <div className={styles.chartContainer}>
              <AIInvestmentChart animate={true} />
            </div>
            <p className={styles.microcopy}>
              {aiCoincidence.microcopy}
            </p>
            <p className={styles.powerRisingText}>
              {aiCoincidence.bodyText2}
            </p>
          </div>
          <footer className={styles.footer}>
            <button
              type="button"
              onClick={onNext}
              className={styles.primaryButton}
            >
              <span style={{ marginBottom: '4px', display: 'block' }}>Next</span>
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
}

