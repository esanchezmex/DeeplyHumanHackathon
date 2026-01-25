"use client";

import { useState, useEffect } from "react";
import type { AidEstimatePage } from "../questions";
import styles from "./QuestionScreens.module.css";

interface AidEstimateScreenProps {
  aidEstimate: AidEstimatePage;
  initialValue?: number;
  onSubmit: (value: number) => void;
  animationClass?: string;
}

export function AidEstimateScreen({
  aidEstimate,
  initialValue,
  onSubmit,
  animationClass = "",
}: AidEstimateScreenProps) {
  const [value, setValue] = useState<number>(
    initialValue ?? aidEstimate.sliderTicks[Math.floor(aidEstimate.sliderTicks.length / 2)] ?? 0
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

  const formatCurrency = (val: number): string => {
    if (val >= 300) return "$300+";
    return `$${Math.round(val).toLocaleString()}`;
  };

  const min = 0;
  const max = aidEstimate.maxValue;
  const isValid = value >= min && value <= max;

  // Calculate tick positions as percentages
  const tickPositions = aidEstimate.sliderTicks.map((tick) => {
    return ((tick - min) / (max - min)) * 100;
  });

  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight : 
                      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="aidEstimate">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Estimate</p>
          <p className={styles.stepCounter}>Question 4 of 4</p>
        </header>
        <main className={styles.main}>
          <h1 className={styles.prompt}>{aidEstimate.prompt}</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.sliderContainer}>
              <div className={styles.sliderWrapper}>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={1}
                  value={value}
                  onChange={handleChange}
                  className={styles.slider}
                  aria-label={aidEstimate.prompt}
                />
                <div className={styles.sliderTicks}>
                  {aidEstimate.sliderTicks.map((tick, index) => (
                    <div
                      key={tick}
                      className={styles.sliderTick}
                      style={{ left: `${tickPositions[index]}%` }}
                    >
                      <span className={styles.tickMark} />
                      <span className={styles.tickLabel}>{formatCurrency(tick)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.valueBubble}>
                <span className={styles.valueNumber}>{formatCurrency(value)}</span>
              </div>
            </div>
            <p className={styles.microcopy}>{aidEstimate.microcopy}</p>
            {touched && !isValid && (
              <p className={styles.validation}>
                Choose a value between {min} and {max}.
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

