"use client";

import type { PerPersonStablePage } from "../questions";
import styles from "./QuestionScreens.module.css";
import { PerPersonElectricityChart } from "./charts/PerPersonElectricityChart";

interface PerPersonStableScreenProps {
  perPersonStable: PerPersonStablePage;
  onNext: () => void;
  animationClass?: string;
}

export function PerPersonStableScreen({
  perPersonStable,
  onNext,
  animationClass = "",
}: PerPersonStableScreenProps) {
  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight :
      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  // Split bodyText2 by newlines to create separate paragraphs
  const bodyText2Paragraphs = perPersonStable.bodyText2.split('\n').filter(line => line.trim());

  return (
    <div className={screenClasses} data-screen="perPersonStable">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Context</p>
          <p className={styles.stepCounter}>Question 4 of 4</p>
        </header>
        <main className={styles.main}>
          <h1 className={styles.prompt}>{perPersonStable.title}</h1>
          <div className={styles.powerRisingContent}>
            <p className={styles.powerRisingText}>
              Even as our digital lives expanded, electricity use <em>per person</em> didn&apos;t explode, it changed by only ~{perPersonStable.percentageChange}% from 2005 to 2022.
            </p>
            <div className={styles.chartContainer}>
              <PerPersonElectricityChart animate={true} />
            </div>
            <div className={styles.powerRisingText}>
              <p style={{ marginBottom: '1rem' }}>
                For most of the last decade, we mostly kept per-person electricity use in check.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                That matters: fewer watts per person can mean less pressure on the planet.
              </p>
              <p>
                Maybe something else was happening in parallel: <em>efficiency gains</em>, shifting where energy is used, and a world getting better at doing more with less, at least for a while...
              </p>
            </div>
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

