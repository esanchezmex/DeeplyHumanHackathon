"use client";

import { useState } from "react";
import type { AIInvestmentCheckPage } from "../questions";
import styles from "./QuestionScreens.module.css";

interface AIInvestmentCheckScreenProps {
  aiInvestmentCheck: AIInvestmentCheckPage;
  initialSelections?: string[];
  onSelectionsChange: (selections: string[]) => void;
  animationClass?: string;
}

export function AIInvestmentCheckScreen({
  aiInvestmentCheck,
  initialSelections,
  onSelectionsChange,
  animationClass = "",
}: AIInvestmentCheckScreenProps) {
  const [selections, setSelections] = useState<string[]>(initialSelections ?? []);

  const handleOptionClick = (option: string) => {
    setSelections((prev) => {
      const isSelected = prev.includes(option);
      if (isSelected) {
        // Remove selection
        return prev.filter((s) => s !== option);
      } else {
        // Add selection if under max
        if (prev.length < aiInvestmentCheck.maxSelections) {
          return [...prev, option];
        }
        return prev;
      }
    });
  };

  const handleNext = () => {
    onSelectionsChange(selections);
  };

  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight : 
                      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="aiInvestmentCheck">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Reflect</p>
          <p className={styles.stepCounter}>Question 4 of 4</p>
        </header>
        <main className={styles.main}>
          <div className={styles.statementCard}>
            <p className={styles.statementText}>{aiInvestmentCheck.statementCard}</p>
          </div>
          <h1 className={styles.prompt}>{aiInvestmentCheck.prompt}</h1>
          <div className={styles.multiSelectOptions}>
            {aiInvestmentCheck.options.map((option) => {
              const isSelected = selections.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  className={`${styles.multiSelectButton} ${
                    isSelected ? styles.multiSelectButtonSelected : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                  disabled={
                    !isSelected && selections.length >= aiInvestmentCheck.maxSelections
                  }
                >
                  {option}
                </button>
              );
            })}
          </div>
          {selections.length > 0 && (
            <p className={styles.selectionHint}>
              {selections.length} of {aiInvestmentCheck.maxSelections} selected
            </p>
          )}
          <footer className={styles.footer}>
            <button
              type="button"
              onClick={handleNext}
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

