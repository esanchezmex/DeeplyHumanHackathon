"use client";

import type { PowerRisingPage } from "../questions";
import styles from "./QuestionScreens.module.css";
import { GlobalElectricityChart } from "./charts/GlobalElectricityChart";

interface PowerRisingScreenProps {
  powerRising: PowerRisingPage;
  onNext: () => void;
  animationClass?: string;
}

export function PowerRisingScreen({
  powerRising,
  onNext,
  animationClass = "",
}: PowerRisingScreenProps) {
  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight :
      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="powerRising">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Context</p>
        </header>
        <main className={styles.main}>
          <h1 className={styles.prompt}>{powerRising.headline}</h1>
          <div className={styles.powerRisingContent}>
            <p className={styles.powerRisingText}>
              {powerRising.bodyText1}
              <br />
              From 2005 to 2022, total generation increased by ~{powerRising.percentageIncrease}%.
            </p>
            <div className={styles.chartContainer}>
              <GlobalElectricityChart animate={true} />
            </div>
            <p className={styles.powerRisingText}>
              {powerRising.bodyText2}
            </p>
          </div>
          <footer className={styles.footer}>
            <button
              type="button"
              onClick={onNext}
              className={styles.primaryButton}
            >
              Next
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
}

