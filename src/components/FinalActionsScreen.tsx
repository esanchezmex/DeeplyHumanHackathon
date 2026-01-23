"use client";

import type { FinalActionsPage } from "../questions";
import styles from "./QuestionScreens.module.css";

interface FinalActionsScreenProps {
  finalActions: FinalActionsPage;
  onAction: (actionIndex: number) => void;
  animationClass?: string;
}

export function FinalActionsScreen({
  finalActions,
  onAction,
  animationClass = "",
}: FinalActionsScreenProps) {
  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight : 
                      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="finalActions">
      <div className={styles.inner}>
        <main className={styles.main} style={{ justifyContent: "center", textAlign: "center" }}>
          <div className={styles.finalActionsButtons}>
            {finalActions.buttonLabels.map((label, index) => (
              <button
                key={index}
                type="button"
                className={index === 0 ? styles.primaryButton : styles.secondaryButton}
                onClick={() => onAction(index)}
              >
                {label}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

