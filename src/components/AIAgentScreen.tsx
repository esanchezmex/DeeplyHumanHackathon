"use client";

import { useEffect, useState } from "react";
import styles from "./QuestionScreens.module.css";

interface AIAgentScreenProps {
    mood?: string;
    electricityExpectation?: string;
    synthesisReflection?: string;
    onRestart: () => void;
    animationClass?: string;
}

export function AIAgentScreen({
    mood,
    electricityExpectation,
    synthesisReflection,
    onRestart,
    animationClass = "",
}: AIAgentScreenProps) {
    const [reflection, setReflection] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchReflection() {
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch("/api/generate-reflection", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        mood,
                        electricityExpectation,
                        synthesisReflection,
                    }),
                });

                if (!response.ok) {
                    throw new Error("Failed to generate reflection");
                }

                const data = await response.json();
                setReflection(data.reflection);
            } catch (err) {
                console.error("Error fetching reflection:", err);
                setError("We couldn't generate your reflection right now. Please try again.");
            } finally {
                setIsLoading(false);
            }
        }

        fetchReflection();
    }, [mood, electricityExpectation, synthesisReflection]);

    const screenClasses = [
        styles.screen,
        animationClass && (animationClass === "slideFromRight" ? styles.slideFromRight :
            animationClass === "slideFromLeft" ? styles.slideFromLeft : ""),
    ].filter(Boolean).join(" ");

    // Parse the reflection to separate paragraphs from questions
    const parseReflection = (text: string) => {
        const lines = text.split('\n').filter(line => line.trim());
        const questions: string[] = [];
        const paragraphs: string[] = [];

        let inQuestions = false;

        for (const line of lines) {
            // Check if this line starts a question section or is a bullet point question
            if (line.match(/^\s*[-•*]\s+/) || line.match(/^\s*\d+[.)]\s+/)) {
                inQuestions = true;
                // Clean up the bullet/number prefix
                const cleanedQuestion = line.replace(/^\s*[-•*\d.)]+\s*/, '').trim();
                if (cleanedQuestion) {
                    questions.push(cleanedQuestion);
                }
            } else if (line.toLowerCase().includes('questions') && line.includes(':')) {
                // This is a header for questions section, skip it
                inQuestions = true;
            } else if (!inQuestions) {
                paragraphs.push(line);
            }
        }

        return { paragraphs, questions };
    };

    const { paragraphs, questions } = reflection ? parseReflection(reflection) : { paragraphs: [], questions: [] };

    return (
        <div className={screenClasses} data-screen="aiAgent">
            <div className={styles.inner}>
                <header className={styles.header}>
                    <p className={styles.stepLabel}>Your Reflection</p>
                </header>
                <main className={styles.main}>
                    {isLoading && (
                        <div className={styles.loadingContainer}>
                            <div className={styles.loadingSpinner}></div>
                            <p className={styles.loadingText}>Crafting your personalized reflection...</p>
                        </div>
                    )}

                    {error && (
                        <div className={styles.errorContainer}>
                            <p className={styles.errorText}>{error}</p>
                            <button
                                type="button"
                                onClick={() => window.location.reload()}
                                className={styles.secondaryButton}
                            >
                                Try Again
                            </button>
                        </div>
                    )}

                    {!isLoading && !error && reflection && (
                        <>
                            <section className={styles.reflectionSection}>
                                <h2 className={styles.reflectionHeader}>A moment of reflection</h2>
                                {paragraphs.map((paragraph, index) => (
                                    <p key={index} className={styles.reflectionParagraph}>
                                        {paragraph}
                                    </p>
                                ))}
                            </section>

                            {questions.length > 0 && (
                                <section className={styles.questionsSection}>
                                    <h2 className={styles.questionsHeader}>Questions to carry with you</h2>
                                    <ul className={styles.questionsList}>
                                        {questions.map((question, index) => (
                                            <li key={index} className={styles.questionItem}>
                                                {question}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </>
                    )}
                </main>

                {!isLoading && (
                    <footer className={styles.footer} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div className={styles.aiAgentButtons}>
                            <button
                                type="button"
                                onClick={onRestart}
                                className={styles.secondaryButton}
                            >
                                Start over
                            </button>
                            <button
                                type="button"
                                className={styles.primaryButton}
                                onClick={() => {
                                    // TODO: Implement sources & methodology navigation
                                    console.log("View sources & methodology");
                                }}
                            >
                                View sources &amp; methodology
                            </button>
                        </div>
                        <hr style={{
                            width: '200px',
                            margin: '24px 0 16px',
                            border: 'none',
                            borderTop: '1px solid currentColor',
                            opacity: 0.2,
                        }} />
                        <p style={{
                            margin: '0',
                            fontSize: '0.95rem',
                            color: 'currentColor',
                            opacity: 0.5,
                            textAlign: 'left',
                            fontStyle: 'italic',
                        }}>
                            More Well-being dimensions to reflect on coming soon!
                        </p>
                    </footer>
                )}
            </div>
        </div>
    );
}
