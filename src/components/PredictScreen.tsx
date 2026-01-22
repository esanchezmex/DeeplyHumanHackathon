"use client";

import { useEffect, useState } from "react";
import type { QuestionStep } from "../questions";
import styles from "./QuestionScreens.module.css";

interface PredictScreenProps {
  step: QuestionStep;
  initialValue?: number;
  onSubmit: (value: number) => void;
}

const DEFAULTS: Record<QuestionStep["id"], number> = {
  dailyVolume: 200,
  showerShare: 40,
  globalWaterAccess: 80,
};

export function PredictScreen({
  step,
  initialValue,
  onSubmit,
}: PredictScreenProps) {
  const [value, setValue] = useState<number>(
    initialValue ?? DEFAULTS[step.id] ?? 0
  );
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (initialValue !== undefined) {
      setValue(initialValue);
    }
  }, [initialValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    const numeric = Number(event.target.value);
    if (Number.isNaN(numeric)) return;
    setValue(numeric);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isValid) return;
    onSubmit(value);
  };

  const min = 0;
  const max = step.id === "dailyVolume" ? 600 : 100;
  const stepValue = step.id === "showerShare" || step.id === "globalWaterAccess" ? 1 : 10;
  const isValid = value > min && value <= max;

  return (
    <div className={styles.screen}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Predict</p>
          <p className={styles.stepCounter}>
            Question {step.id === "dailyVolume" ? 1 : step.id === "showerShare" ? 2 : 3} of 3
          </p>
        </header>
        <main className={styles.main}>
          <h1 className={styles.prompt}>{step.prompt}</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.sliderRow}>
              <input
                type="range"
                min={min}
                max={max}
                step={stepValue}
                value={value}
                onChange={handleChange}
                className={styles.slider}
                aria-label={step.prompt}
              />
              <div className={styles.valueBubble}>
                <span className={styles.valueNumber}>
                  {Math.round(value).toLocaleString()}
                </span>
                <span className={styles.valueUnits}>{step.unitsLabel}</span>
              </div>
            </div>
            {touched && !isValid && (
              <p className={styles.validation}>
                Choose a value between {min + 1} and {max.toLocaleString()}.
              </p>
            )}
            <button
              type="submit"
              className={styles.primaryButton}
              disabled={!isValid}
            >
              See how that compares
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}


