"use client";

import { useEffect, useState } from "react";
import type { QuestionStep } from "../questions";
import styles from "./QuestionScreens.module.css";

interface RevealScreenProps {
  step: QuestionStep;
  answerValue: number;
  isLastStep: boolean;
  onNext: () => void;
  animationClass?: string;
}

export function RevealScreen({
  step,
  answerValue,
  isLastStep,
  onNext,
  animationClass = "",
}: RevealScreenProps) {
  const { reveal } = step;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, [step.id]);

  const maxBar = reveal.maxValue || Math.max(reveal.actualValue, answerValue);
  const actualRatio = Math.min(reveal.actualValue / maxBar, 1);
  const guessRatio = Math.min(answerValue / maxBar, 1);

  const titleValue = `${reveal.actualValue.toFixed(1)}%`;

  const labelGuess = `${answerValue.toFixed(1)}%`;

  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight : 
                      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="reveal">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Reveal</p>
          <p className={styles.stepCounter}>
            Question 1 of 1
          </p>
        </header>
        <main className={styles.main}>
          <h1 className={styles.prompt}>{step.prompt}</h1>
          <section className={styles.chartCard} aria-label="Your guess vs data">
            {reveal.chartType === "bar" && (
              <div className={styles.barChart}>
                <div className={styles.barRow}>
                  <span className={styles.barLabel}>Your guess</span>
                  <div className={styles.barTrack}>
                    <div
                      className={`${styles.barFill} ${styles.barGuess} ${
                        animate ? styles.barFillVisible : ""
                      }`}
                      style={{ "--bar-scale": guessRatio } as React.CSSProperties}
                    />
                  </div>
                  <span className={styles.barValue}>{labelGuess}</span>
                </div>
                <div className={styles.barRow}>
                  <span className={styles.barLabel}>
                    Typical value
                  </span>
                  <div className={styles.barTrack}>
                    <div
                      className={`${styles.barFill} ${styles.barActual} ${
                        animate ? styles.barFillVisible : ""
                      }`}
                      style={{ "--bar-scale": actualRatio } as React.CSSProperties}
                    />
                  </div>
                  <span className={styles.barValue}>{titleValue}</span>
                </div>
              </div>
            )}
            {reveal.chartType === "split" && (
              <div className={styles.splitBarWrapper}>
                <div className={styles.splitLegend}>
                  <div className={styles.legendItem}>
                    <span className={`${styles.legendSwatch} ${styles.swatchGuess}`} />
                    <span>Your guess</span>
                  </div>
                  <div className={styles.legendItem}>
                    <span className={`${styles.legendSwatch} ${styles.swatchActual}`} />
                    <span>Data</span>
                  </div>
                </div>
                <div className={styles.splitBars}>
                  <div className={styles.splitRow}>
                    <span className={styles.barLabel}>Showers</span>
                    <div className={styles.splitTrack}>
                      <div
                        className={`${styles.splitFill} ${styles.barGuess} ${
                          animate ? styles.barFillVisible : ""
                        }`}
                        style={
                          { "--bar-scale": Math.min(answerValue / 100, 1) } as React.CSSProperties
                        }
                      />
                    </div>
                    <span className={styles.barValue}>{labelGuess}</span>
                  </div>
                  <div className={styles.splitRow}>
                    <span className={styles.barLabel}>Showers (data)</span>
                    <div className={styles.splitTrack}>
                      <div
                        className={`${styles.splitFill} ${styles.barActual} ${
                          animate ? styles.barFillVisible : ""
                        }`}
                        style={
                          { "--bar-scale": Math.min(reveal.actualValue / 100, 1) } as React.CSSProperties
                        }
                      />
                    </div>
                    <span className={styles.barValue}>{titleValue}</span>
                  </div>
                </div>
              </div>
            )}
          </section>
          <section className={styles.contextSection}>
            <p className={styles.contextHeadline}>{titleValue}</p>
            <p className={styles.contextBody}>{reveal.context(answerValue)}</p>
            {reveal.subtitle && (
              <p className={styles.contextSubtitle}>
                {reveal.subtitle(answerValue)}
              </p>
            )}
          </section>
        </main>
        <footer className={styles.footer}>
          <button
            type="button"
            onClick={onNext}
            className={styles.primaryButton}
          >
            {isLastStep ? "See the big picture" : "Next insight"}
          </button>
        </footer>
      </div>
    </div>
  );
}


