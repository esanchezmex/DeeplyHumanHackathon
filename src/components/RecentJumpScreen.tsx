"use client";

import type { RecentJumpPage } from "../questions";
import styles from "./QuestionScreens.module.css";
import { RecentJumpChart } from "./charts/RecentJumpChart";

interface RecentJumpScreenProps {
  recentJump: RecentJumpPage;
  onNext: () => void;
  animationClass?: string;
}

export function RecentJumpScreen({
  recentJump,
  onNext,
  animationClass = "",
}: RecentJumpScreenProps) {
  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight :
      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  // Split bodyText1 by newlines to create separate paragraphs
  const bodyText1Paragraphs = recentJump.bodyText1.split('\n').filter(line => line.trim());
  // Split bodyText2 by newlines to create separate paragraphs
  const bodyText2Paragraphs = recentJump.bodyText2.split('\n').filter(line => line.trim());

  return (
    <div className={screenClasses} data-screen="recentJump">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Context</p>
          <p className={styles.stepCounter}>Question 4 of 4</p>
        </header>
        <main className={styles.main}>
          <h1 className={styles.prompt}>{recentJump.title}</h1>
          <div className={styles.powerRisingContent}>
            <div className={styles.powerRisingText}>
              {bodyText1Paragraphs.map((paragraph, index) => (
                <p key={index} style={{ marginBottom: index < bodyText1Paragraphs.length - 1 ? '1rem' : '0' }}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className={styles.chartContainer}>
              <RecentJumpChart animate={true} />
            </div>
            <div className={styles.calloutBox}>
              <div className={styles.calloutItem}>
                2005 → 2022: ~+{recentJump.callout2005to2022}%
              </div>
              <div className={styles.calloutItem}>
                2022 → 2024: ~+{recentJump.callout2022to2024}%
              </div>
            </div>
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

