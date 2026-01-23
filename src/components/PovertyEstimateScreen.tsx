"use client";

import { useState, useEffect } from "react";
import type { PovertyEstimatePage } from "../questions";
import styles from "./QuestionScreens.module.css";

interface PovertyEstimateScreenProps {
  povertyEstimate: PovertyEstimatePage;
  initialValue?: number;
  onSubmit: (value: number) => void;
  animationClass?: string;
}

export function PovertyEstimateScreen({
  povertyEstimate,
  initialValue,
  onSubmit,
  animationClass = "",
}: PovertyEstimateScreenProps) {
  const [value, setValue] = useState<number>(
    initialValue ?? povertyEstimate.maxValue / 2
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
    onSubmit(value);
  };

  const min = 0;
  const max = povertyEstimate.maxValue;
  const isValid = value >= min && value <= max;

  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight : 
                      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="povertyEstimate">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Estimate</p>
          <p className={styles.stepCounter}>Question 4 of 4</p>
        </header>
        <main className={styles.main}>
          <h1 className={styles.prompt}>{povertyEstimate.prompt}</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.sliderRow}>
              <input
                type="range"
                min={min}
                max={max}
                step={0.1}
                value={value}
                onChange={handleChange}
                className={styles.slider}
                aria-label={povertyEstimate.prompt}
              />
              <div className={styles.valueBubble}>
                <span className={styles.valueNumber}>
                  {value.toFixed(1)}
                </span>
                <span className={styles.valueUnits}>%</span>
              </div>
            </div>
            <p className={styles.microcopy}>{povertyEstimate.microcopy}</p>
            {touched && !isValid && (
              <p className={styles.validation}>
                Choose a value between {min} and {max}%.
              </p>
            )}
            <button
              type="submit"
              className={styles.primaryButton}
              disabled={!isValid}
            >
              Next
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

