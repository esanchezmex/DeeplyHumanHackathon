"use client";

import styles from "./QuestionScreens.module.css";

interface IntroScreenProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onBegin: () => void;
  animationClass?: string;
}

export function IntroScreen({
  title,
  subtitle,
  ctaText,
  onBegin,
  animationClass = "",
}: IntroScreenProps) {
  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight : 
                      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="intro">
      <div className={styles.inner}>
        <main className={styles.main} style={{ justifyContent: "center", textAlign: "center" }}>
          <h1 className={styles.introTitle}>{title}</h1>
          <p className={styles.introSubtitle}>{subtitle}</p>
          <button
            type="button"
            onClick={onBegin}
            className={styles.primaryButton}
            style={{ marginTop: "2rem" }}
          >
            {ctaText}
          </button>
        </main>
      </div>
    </div>
  );
}

