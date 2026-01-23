"use client";

import { useState } from "react";
import type { SynthesisPage } from "../questions";
import styles from "./QuestionScreens.module.css";

interface SynthesisScreenProps {
  synthesis: SynthesisPage;
  initialReflection?: string;
  onSubmit: (reflection: string) => void;
  animationClass?: string;
}

export function SynthesisScreen({
  synthesis,
  initialReflection,
  onSubmit,
  animationClass = "",
}: SynthesisScreenProps) {
  const [reflection, setReflection] = useState<string>(initialReflection ?? "");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReflection(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(reflection);
  };

  const screenClasses = [
    styles.screen,
    animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight : 
                      animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
  ].filter(Boolean).join(" ");

  return (
    <div className={screenClasses} data-screen="synthesis">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.stepLabel}>Synthesis</p>
          <p className={styles.stepCounter}>Question 4 of 4</p>
        </header>
        <main className={styles.main}>
          <h1 className={styles.synthesisTitle}>{synthesis.title}</h1>
          <section className={styles.synthesisText}>
            {synthesis.textLines.map((line, index) => (
              <p key={index} className={styles.synthesisLine}>
                {line}
              </p>
            ))}
          </section>
          <form className={styles.synthesisForm} onSubmit={handleSubmit}>
            <p className={styles.reflectionPrompt}>{synthesis.reflectionPrompt}</p>
            <textarea
              className={styles.reflectionInput}
              value={reflection}
              onChange={handleChange}
              placeholder="Share your thoughts..."
              rows={4}
            />
            <button
              type="submit"
              className={styles.primaryButton}
            >
              Next
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

