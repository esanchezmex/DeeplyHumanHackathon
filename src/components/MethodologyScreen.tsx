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
            <ul className={styles.methodologyList}>
              <li>
                <strong>Each chart is a time series:</strong> The x-axis is
                year. Lines and bars show how an indicator changes over time.
              </li>
              <li>
                <strong>Each point is one measurement:</strong> A dot represents
                the value of an indicator for a specific year and the world (as
                the specific geography).
              </li>
              <li>
                <strong>Your answers are used as a mirror, not a score:</strong>{" "}
                When you make a guess, we follow it with factual data, aiming to
                show the gap between intuition and measurement.
              </li>
              <li>
                <strong>
                  “Coincides” means “moves in the same period.”:
                </strong>{" "}
                When we say a change “coincides with” another event (like the
                mainstreaming of generative AI), we mean the timelines overlap,
                not that one caused the other.
              </li>
              <li>
                <strong>No causal claims are being made:</strong> Some visuals
                show correlation. Correlation is not evidence of causation. We
                do not run causal inference, controlled experiments, or
                statistical studies that would be required to test a hypothesis
                like “AI caused X.” These charts are prompts for reflection, not
                proof.
              </li>
            </ul>
          </section>
        );
      case "dataSources":
        return (
          <section className={styles.methodologySection}>
            <h2 className={styles.methodologySectionTitle}>
              Data sources
            </h2>
            <div className={styles.methodologySection}>
              <h3 className={styles.methodologySectionSubtitle}>
                Core Statistics (used for the line plots)
              </h3>
              <p className={styles.methodologySectionBody}>
                <strong>Source:</strong> Gapminder — Systema Globalis (DDFcsv),
                a compiled “fact-base” that aggregates public statistics across
                social, economic, and environmental domains into a comparable
                dataset. Licensed under CC BY 4.0.
              </p>
              <p className={styles.methodologySectionBody}>
                <strong>Coverage:</strong> World
                <br />
                <strong>Last updated:</strong> Not known (varies by
                indicator/source)
                <br />
                <strong>Format:</strong> DDFcsv datapoints (geo, time)
              </p>
              <p className={styles.methodologySectionBody}>
                <strong>Files used</strong>
              </p>
              <ul className={styles.methodologyList}>
                <li>
                  Electricity use per person —{" "}
                  <code>
                    ddf--datapoints--electricity_use_per_person--by--geo--time.csv
                  </code>
                </li>
                <li>
                  Electricity generation total —{" "}
                  <code>
                    ddf--datapoints--electricity_generation_total--by--geo--time.csv
                  </code>
                </li>
                <li>
                  Urban population —{" "}
                  <code>
                    ddf--datapoints--urban_population--by--geo--time.csv
                  </code>
                </li>
                <li>
                  Internet users —{" "}
                  <code>
                    ddf--datapoints--internet_users--by--geo--time.csv
                  </code>
                </li>
                <li>
                  Cell phones per 100 people —{" "}
                  <code>
                    ddf--datapoints--cell_phones_per_100_people--by--geo--
                  </code>
                </li>
              </ul>
            </div>

            <div className={styles.methodologySection}>
              <h3 className={styles.methodologySectionSubtitle}>
                AI &amp; Technology Context (external datasets)
              </h3>
              <p className={styles.methodologySectionBody}>
                These datasets are used to contextualize the recent acceleration
                of AI adoption and investment.
              </p>

              <p className={styles.methodologySectionBody}>
                <strong>
                  Share of AI job postings (proxy for market demand for AI
                  skills)
                </strong>
                <br />
                <strong>Provider:</strong> Lightcast (via Stanford HAI’s AI
                Index Report), published through Our World in Data (with minor
                processing)
                <br />
                <strong>Unit:</strong> % of job postings
                <br />
                <strong>Date range:</strong> 2014–2024
                <br />
                <strong>Last updated:</strong> April 8, 2025
              </p>

              <p className={styles.methodologySectionBody}>
                <strong>
                  Private investment in AI (external funding for privately held
                  AI companies)
                </strong>
                <br />
                <strong>Provider:</strong> Quid (via Stanford HAI’s AI Index
                Report), inflation adjustment via U.S. Bureau of Labor
                Statistics; published through Our World in Data (with major
                processing)
                <br />
                <strong>Unit:</strong> constant 2021 US$
                <br />
                <strong>Date range:</strong> 2013–2024
                <br />
                <strong>Last updated:</strong> April 8, 2025
              </p>

              <p className={styles.methodologySectionBody}>
                <strong>
                  IMF AI Preparedness Index (AIPI) (context on readiness to
                  adopt AI at the country level)
                </strong>
                <br />
                <strong>Provider:</strong> International Monetary Fund (IMF)
                <br />
                <strong>What it measures:</strong> a composite index of AI
                preparedness built from four dimensions (digital infrastructure,
                human capital, technological innovation, legal frameworks),
                aggregated across 174 countries
                <br />
                <strong>Unit:</strong> index score (composite)
              </p>
            </div>

            <div className={styles.methodologySection}>
              <h3 className={styles.methodologySectionSubtitle}>
                Anchoring References (for the “digital footprint” framing)
              </h3>
              <p className={styles.methodologySectionBody}>
                Used for the narrative grounding around global connectivity
                growth.
              </p>

              <p className={styles.methodologySectionBody}>
                <strong>
                  ITU — Measuring digital development: Facts and Figures (2019)
                </strong>
                <br />
                <strong>Provider:</strong> International Telecommunication Union
                (ITU)
                <br />
                <strong>Use in app:</strong> anchoring context on the long-run
                rise of internet penetration (e.g., “~17% in 2005”)
              </p>

              <p className={styles.methodologySectionBody}>
                <strong>
                  ITU — Measuring digital development: Facts and Figures (2022)
                </strong>
                <br />
                <strong>Provider:</strong> ITU
                <br />
                <strong>Use in app:</strong> anchoring context on internet use
                scale in 2022 (e.g., “~5.3B people / ~66% of the world”)
              </p>
            </div>
          </section>
        );
      case "howWeDidIt":
        return (
          <section className={styles.methodologySection}>
            <h2 className={styles.methodologySectionTitle}>
              From raw rows to this story
            </h2>
            <ul className={styles.methodologyList}>
              <li>
                <strong>Minimal preprocessing:</strong> Most indicators were
                used “as provided”. The underlying datasets are already
                standardized and structured for comparison (by geography and
                year), so we did not perform additional cleaning or outlier
                handling.
              </li>
              <li>
                <strong>Aggregation (when needed):</strong> Some AI indicators
                are published at the country level (e.g: share of AI job
                postings). In cases where we needed a world-level proxy, we
                aggregated across geographies to produce a single global series.
              </li>
              <li>
                <strong>Forecasting for recent years (when data lags):</strong>{" "}
                Some core statistics end before the most recent years. When a
                recent value was missing, we generated a short extension using
                ARIMA (AutoRegressive Integrated Moving Average) to estimate the
                next 1–2 years. These values are intended as best-effort
                estimates to support the narrative flow, not as official
                measurements.
              </li>
              <li>
                <strong>No unit conversions:</strong> We did not convert units
                (e.g: kWh to MWh, current to constant dollars) beyond what the
                dataset already provides.
              </li>
              <li>
                <strong>Why we sometimes use dual-axis charts:</strong> Some
                indicators move on very different scales and units (for example:
                kWh per person vs total electricity generated). A dual axis lets
                us show both trends on the same timeline without forcing
                normalization. Normalizing can make patterns look cleaner, but
                it can also reduce human interpretability, especially when the
                goal is to keep the numbers grounded in real units.
              </li>
              <li>
                <strong>Correlation shown (Pearson r):</strong> When displayed,
                Pearson’s r summarizes linear association between two time
                series over the visible window. It can help describe whether
                two lines tend to move together. It does not establish
                cause-and-effect and can be influenced by shared trends over
                time, time-window choice, or other variables not shown.
              </li>
            </ul>
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
            <p className={styles.methodologySectionBody}>
              Domo&apos;s Data Never Sleeps — AI Edition (2025) tries to make scale legible: ChatGPT is prompted ~694K times per minute, and global AI spend is estimated at ~$1.21M per minute. If we translate that activity into something physical, even a conservative estimate of ~0.3 watt-hours per typical ChatGPT query implies ~208 kWh of electricity per minute at that prompt volume. Using an average U.S. electricity price of ~$0.1648/kWh (2024), that&apos;s about $34 per minute in electricity alone. For intuition: that one minute is roughly the same electricity cost as running a typical central A/C (≈3.5 kW) for about 6.6 days at ~9 hours/day.
            </p>
            <p className={styles.methodologySectionBody}>
              And then there&apos;s why we chose these indicators: because technology doesn&apos;t just consume energy; it reshapes habits, attention, and connection. For instance, some widely cited &quot;top uses&quot; lists place therapy / companionship at or near the top of how people report using generative AI. If a prompt is becoming a reflex for comfort, reassurance, or loneliness, it&apos;s worth pausing: would it be cheaper for the world (and healthier for you) to talk to the person next to you, or someone you love, before you outsource that moment?
            </p>
            <p className={styles.methodologySectionBody}>
              The same goes for the trivial and the disposable: generating &quot;just for fun&quot; images, or asking an LLM something a search engine answers instantly. The point isn&apos;t guilt, it&apos;s awareness: when a tool becomes frictionless, we use it more, and that &quot;more&quot; adds up.
            </p>
            <p className={styles.methodologyNote}>
              Sources: Domo DNS AI 2025; Epoch AI energy estimate; U.S. EIA electricity price; Forbes/HBR &quot;top uses&quot; coverage; APA discussion of emotional AI relationships.
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


