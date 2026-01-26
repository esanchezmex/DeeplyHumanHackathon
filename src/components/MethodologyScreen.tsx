"use client";

import { useState } from "react";
import styles from "./QuestionScreens.module.css";

interface MethodologyScreenProps {
  onBack: () => void;
  animationClass?: string;
}

type TabId =
  | "whatYoureSeeing"
  | "dataSources"
  | "howWeDidIt"
  | "limitsEthics"
  | "whyTheseIndicators";

const TABS: { id: TabId; label: string }[] = [
  { id: "whatYoureSeeing", label: "What you’re seeing" },
  { id: "dataSources", label: "Data sources" },
  { id: "howWeDidIt", label: "How we did it" },
  { id: "limitsEthics", label: "Limits & ethics" },
  { id: "whyTheseIndicators", label: "Why we chose these indicators" },
];

export function MethodologyScreen({
  onBack,
  animationClass = "",
}: MethodologyScreenProps) {
  const [activeTab, setActiveTab] = useState<TabId>("whatYoureSeeing");

  const screenClasses = [
    styles.screen,
    animationClass &&
      (animationClass === "slideFromRight"
        ? styles.slideFromRight
        : animationClass === "slideFromLeft"
        ? styles.slideFromLeft
        : ""),
  ]
    .filter(Boolean)
    .join(" ");

  const renderTabContent = () => {
    switch (activeTab) {
      case "whatYoureSeeing":
        return (
          <section className={styles.methodologySection}>
            <h2 className={styles.methodologySectionTitle}>
              A human-readable snapshot
            </h2>
            <p className={styles.methodologySectionBody}>
              This screen is a guided story about how water access, poverty and
              technology interact over time. The numbers are real, but the
              framing is designed for feelings-first understanding, not for
              policy briefs.
            </p>
            <ul className={styles.methodologyList}>
              <li>
                You see: simple percentages, big-picture comparisons, and a few
                headline stats.
              </li>
              <li>
                Under the hood: long time-series and country-level data, cleaned
                and combined into a single, global view.
              </li>
              <li>
                The goal: help you feel the direction and scale of change,
                without asking you to read a full report.
              </li>
            </ul>
          </section>
        );
      case "dataSources":
        return (
          <section className={styles.methodologySection}>
            <h2 className={styles.methodologySectionTitle}>
              The receipts (data sources)
            </h2>
            <p className={styles.methodologySectionBody}>
              All underlying figures come from public, well-documented datasets
              used by researchers and international organisations.
            </p>
            <ul className={styles.methodologyList}>
              <li>
                Gapminder time-series on income, poverty, population and health.
              </li>
              <li>
                AI investment and publications data compiled from industry and
                academic sources.
              </li>
              <li>
                Additional indicators on education, infrastructure and
                environment, harmonised onto a country–year grid.
              </li>
            </ul>
            <p className={styles.methodologyNote}>
              Exact file names, coverage years and any manual adjustments are
              documented in the project repository, so you can audit or reuse
              the same inputs.
            </p>
          </section>
        );
      case "howWeDidIt":
        return (
          <section className={styles.methodologySection}>
            <h2 className={styles.methodologySectionTitle}>
              From raw rows to this story
            </h2>
            <p className={styles.methodologySectionBody}>
              To keep the experience smooth, we pre-processed the raw data into
              a few key indicators and comparisons.
            </p>
            <ul className={styles.methodologyList}>
              <li>
                We aligned datasets on shared keys (country codes, years) and
                dropped combinations with missing or clearly broken values.
              </li>
              <li>
                We computed percentage changes over selected windows (for
                example, 2005–2020) and converted some quantities into
                per-person terms.
              </li>
              <li>
                We translated technical labels into plain-language prompts and
                visuals that fit the flow of the app.
              </li>
            </ul>
            <p className={styles.methodologyNote}>
              None of the calculations are exotic: they are simple arithmetic
              transformations that you could reproduce with a spreadsheet or
              notebook.
            </p>
          </section>
        );
      case "limitsEthics":
        return (
          <section className={styles.methodologySection}>
            <h2 className={styles.methodologySectionTitle}>
              What this does – and does not – prove
            </h2>
            <p className={styles.methodologySectionBody}>
              This experience is an invitation to think, not a final word on
              cause and effect.
            </p>
            <ul className={styles.methodologyList}>
              <li>
                Correlations in these curves do not prove that one thing caused
                another. Many forces move together over time.
              </li>
              <li>
                We mostly show global or large-regional patterns. Local,
                community-level realities can look very different.
              </li>
              <li>
                Historical data can be incomplete or biased, especially for
                countries with weaker statistical systems.
              </li>
            </ul>
            <p className={styles.methodologyNote}>
              You should not use this app alone to make funding decisions,
              allocate aid, or judge specific communities. It is a thinking
              tool, not a forecasting model.
            </p>
          </section>
        );
      case "whyTheseIndicators":
        return (
          <section className={styles.methodologySection}>
            <h2 className={styles.methodologySectionTitle}>
              Why these curves, not a thousand others
            </h2>
            <p className={styles.methodologySectionBody}>
              We chose a small set of indicators that are both empirically
              grounded and emotionally legible.
            </p>
            <ul className={styles.methodologyList}>
              <li>
                They connect directly to lived experience: safe water, income,
                time use, access to technology.
              </li>
              <li>
                They have reasonably long, comparable time-series across many
                countries, which lets us tell a story about change.
              </li>
              <li>
                Together, they sketch a multi-dimensional picture of power,
                precarity and possibility in people&apos;s lives.
              </li>
            </ul>
            <p className={styles.methodologyNote}>
              Other choices are possible. This set reflects a design decision:
              enough dimensions to avoid naivety, but few enough to stay
              human-scale.
            </p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className={screenClasses} data-screen="methodology">
      <div className={styles.inner}>
        <header className={styles.header}>
          <button
            type="button"
            className={styles.methodologyBackButton}
            onClick={onBack}
          >
            ← Back to the experience
          </button>
          <span className={styles.stepLabel}>Sources &amp; methodology</span>
        </header>

        <main className={styles.main}>
          <div className={styles.methodologyTabs} role="tablist">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.methodologyTab} ${
                    isActive ? styles.methodologyTabActive : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className={styles.methodologyContent}>{renderTabContent()}</div>
        </main>
      </div>
    </div>
  );
}


