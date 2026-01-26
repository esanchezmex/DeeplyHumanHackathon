"use client";

import type { SpeedIsStoryPage } from "../questions";
import styles from "./QuestionScreens.module.css";
import { TechAdoptionCharts } from "./charts/TechAdoptionCharts";
import { AIJobPostingsChart } from "./charts/AIJobPostingsChart";

interface SpeedIsStoryScreenProps {
  speedIsStory: SpeedIsStoryPage;
  onNext: () => void;
  animationClass?: string;
}

export function SpeedIsStoryScreen({
  speedIsStory,
  onNext,
  animationClass = "",
}: SpeedIsStoryScreenProps) {
  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight :
      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  // Split bodyText1 by newlines to create separate paragraphs
  const bodyText1Paragraphs = speedIsStory.bodyText1.split('\n').filter(line => line.trim());

  return (
    <div className={screenClasses} data-screen="speedIsStory">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Context</p>
          <p className={styles.stepCounter}>Question 1 of 1</p>
        </header>
        <main className={styles.main}>
          <h1 className={styles.prompt}>{speedIsStory.title}</h1>
          <div className={styles.powerRisingContent}>
            <div className={styles.powerRisingText}>
              {bodyText1Paragraphs.map((paragraph, index) => (
                <p key={index} style={{ marginBottom: index < bodyText1Paragraphs.length - 1 ? '1rem' : '0' }}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className={styles.chartContainer}>
              <TechAdoptionCharts animate={true} />
            </div>
            <p className={styles.powerRisingText}>
              {speedIsStory.bodyText2}
            </p>
            <div className={styles.chartContainer}>
              <AIJobPostingsChart animate={true} />
            </div>
            <p className={styles.powerRisingText}>
              {speedIsStory.bodyText3}
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

