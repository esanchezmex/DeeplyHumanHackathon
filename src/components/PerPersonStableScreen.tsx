"use client";

import type { PerPersonStablePage } from "../questions";
import styles from "./QuestionScreens.module.css";

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
              {perPersonStable.bodyText1} ~{perPersonStable.percentageChange}% from 2014 to 2022.
            </p>
            {perPersonStable.visualPlaceholder && (
              <div className={styles.visualPlaceholder}>
                {perPersonStable.visualPlaceholder}
              </div>
            )}
            {!perPersonStable.visualPlaceholder && (
              <div className={styles.visualPlaceholder}>
                {/* Placeholder for visual */}
              </div>
            )}
            <div className={styles.powerRisingText}>
              {bodyText2Paragraphs.map((paragraph, index) => (
                <p key={index} style={{ marginBottom: index < bodyText2Paragraphs.length - 1 ? '1rem' : '0' }}>
                  {paragraph}
                </p>
              ))}
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

