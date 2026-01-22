import styles from "./QuestionScreens.module.css";
import type { AnswerRecord } from "./QuestionFlow";
import type { QuestionStep } from "../questions";

interface SummaryScreenProps {
  steps: QuestionStep[];
  answers: AnswerRecord[];
  onRestart: () => void;
}

export function SummaryScreen({
  steps,
  answers,
  onRestart,
}: SummaryScreenProps) {
  return (
    <div className={styles.screen}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Recap</p>
        </header>
        <main className={styles.main}>
          <h1 className={styles.prompt}>
            Your intuition vs. everyday water reality
          </h1>
          <section className={styles.summaryGrid}>
            {steps.map((step) => {
              const answer = answers.find((a) => a.stepId === step.id);
              const actual = step.reveal.actualValue;
              const labelUnits =
                step.id === "dailyVolume" ? "L / day" : "%";
              const userValue = answer?.value ?? 0;

              const max = step.reveal.maxValue;
              const actualRatio = Math.min(actual / max, 1);
              const guessRatio = Math.min(userValue / max, 1);
              
              const formatValue = (val: number) => 
                step.id === "dailyVolume" 
                  ? val.toLocaleString() 
                  : val.toFixed(1);

              return (
                <article key={step.id} className={styles.summaryCard}>
                  <h2 className={styles.summaryTitle}>{step.prompt}</h2>
                  <div className={styles.summaryChart}>
                    <div className={styles.barRow}>
                      <span className={styles.barLabel}>You guessed</span>
                      <div className={styles.barTrack}>
                        <div
                          className={`${styles.barFill} ${styles.barGuess} ${styles.barFillVisible}`}
                          style={
                            { "--bar-scale": guessRatio } as React.CSSProperties
                          }
                        />
                      </div>
                      <span className={styles.barValue}>
                        {formatValue(userValue)} {labelUnits}
                      </span>
                    </div>
                    <div className={styles.barRow}>
                      <span className={styles.barLabel}>
                        {step.id === "globalWaterAccess" ? "Global average" : "Typical value"}
                      </span>
                      <div className={styles.barTrack}>
                        <div
                          className={`${styles.barFill} ${styles.barActual} ${styles.barFillVisible}`}
                          style={
                            { "--bar-scale": actualRatio } as React.CSSProperties
                          }
                        />
                      </div>
                      <span className={styles.barValue}>
                        {formatValue(actual)} {labelUnits}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
          <section className={styles.contextSection}>
            <p className={styles.contextBody}>
              Much of your water footprint is hidden in the background: the food
              you eat, the energy you use, and the products you buy. The taps
              you see are only part of the story.
            </p>
          </section>
        </main>
        <footer className={styles.footer}>
          <button
            type="button"
            onClick={onRestart}
            className={styles.secondaryButton}
          >
            Try the questions again
          </button>
        </footer>
      </div>
    </div>
  );
}


