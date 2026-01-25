"use client";

import { useState } from "react";
import type { MoodCheckPage } from "../questions";
import styles from "./QuestionScreens.module.css";

interface MoodCheckScreenProps {
  moodCheck: MoodCheckPage;
  initialMood?: string;
  onMoodSelect: (mood: string) => void;
  animationClass?: string;
}

export function MoodCheckScreen({
  moodCheck,
  initialMood,
  onMoodSelect,
  animationClass = "",
}: MoodCheckScreenProps) {
  const [selectedMood, setSelectedMood] = useState<string | undefined>(initialMood);

  const handleMoodClick = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleNext = () => {
    if (selectedMood) {
      onMoodSelect(selectedMood);
    }
  };

  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight : 
                      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="moodCheck">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Reflect</p>
          <p className={styles.stepCounter}>Question 4 of 4</p>
        </header>
        <main className={styles.main}>
          <div className={styles.statementCard}>
            {typeof moodCheck.statementCard === "string" ? (
              <p className={styles.statementText}>{moodCheck.statementCard}</p>
            ) : (
              <div className={styles.statementText}>{moodCheck.statementCard}</div>
            )}
          </div>
          <h1 className={styles.prompt}>{moodCheck.prompt}</h1>
          <div className={styles.moodOptions}>
            {moodCheck.moodOptions.map((mood) => (
              <button
                key={mood}
                type="button"
                className={`${styles.moodButton} ${
                  selectedMood === mood ? styles.moodButtonSelected : ""
                }`}
                onClick={() => handleMoodClick(mood)}
              >
                {mood}
              </button>
            ))}
          </div>
          <footer className={styles.footer}>
            <button
              type="button"
              onClick={handleNext}
              className={styles.primaryButton}
              disabled={!selectedMood}
            >
              Next
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
}

