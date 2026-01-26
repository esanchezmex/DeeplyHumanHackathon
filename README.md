# The Energy of Answers
*A calm, data-led reflection on what AI costs to run.*

An interactive web experience that guides users through a thoughtful sequence of prompts and visuals—revealing how “frictionless” AI use maps to real infrastructure, real energy demand, and subtle social trade-offs.

> This project is intentionally reflective. It is designed to provoke better questions—not to prove causal claims.

---

## Target Audience
- Everyday AI users who want more grounded sense of AI’s hidden footprint. 
- Students, educators, and workshop facilitators exploring tech + society through data storytelling.
- Designers, builders, and decision-makers who want a simple experience to spark better conversations about sustainability and wellbeing.

---

## Problem Statement
AI is becoming a daily utility. Yet its costs are often:
- **Invisible** (compute, data centers, electricity)
- **Abstract** (charts without lived context)
- **Easy to misread** (correlation mistaken for causation)
- **Socially consequential** (tools that reduce friction can also reshape habits, connection, and support)

This project addresses that gap by pairing **calm storytelling** with **public statistics**, helping users feel the tension between:
- **Convenience ↔ infrastructure**
- **Scale ↔ sustainability**
- **Connection ↔ community**

---

## Key Features (Summary)
- **Guided storytelling flow:** question → answer → visual → insight  
- **Progressive disclosure:** simple framing first, then layered “reveal” visuals  
- **Reflection inputs:** users respond with feeling/expectation choices 
- **End-of-flow personalized reflection:** a short tailored reflection generated from the user’s responses  
- **Curated indicator selection:** indicators were manually screened and selected from a large public dataset catalog for narrative fit  

---

## Wellbeing Dimensions Covered (Current Scope)
This version focuses primarily on:

### 1) Environmental wellbeing (primary)
Explores the relationship between digital life, electricity demand, and the infrastructure needed to support modern AI.

### 2) Social wellbeing (supporting lens)
Uses the social dimension to frame a key question: as tools become more helpful and ever-present, what happens to community, attention, and human support?

> With more time, the project expands into the remaining wellbeing dimensions (physical, mental, economic, cultural) using the same rigorous “question → answer → visual → insight” approach.

---

## AI Feature Implemented (Current)
AI is used at the end of the flow to generate a **tailored reflection**.

- **User inputs collected (categorical):** the app captures the user’s responses across a small set of reflection questions.
- **One OpenAI call:** those responses are inserted into a structured system prompt to generate a reflection that is shown to the user to encourage thought-provoking conversations and drive change.

---

## Data Sources (High Level)
### Core Statistics
Most baseline indicators and time series visuals are built from Gapminder’s **Systema Globalis** dataset (DDFcsv), a comparable collection of public statistics used across the Gapminder ecosystem.

Repo:
- https://github.com/open-numbers/ddf--gapminder--systema_globalis

Example files used:
- `ddf--datapoints--electricity_use_per_person--by--geo--time.csv`
- `ddf--datapoints--electricity_generation_total--by--geo--time.csv`
- `ddf--datapoints--urban_population--by--geo--time.csv`
- `ddf--datapoints--internet_users--by--geo--time.csv`
- `ddf--datapoints--cell_phones_per_100_people--by--geo--time.csv`

### AI / Technology Context Datasets
Used to contextualize the recent acceleration of AI adoption and investment:
- OWID: Share of AI job postings  
  https://ourworldindata.org/grapher/share-artificial-intelligence-job-postings
- OWID: Private investment in AI  
  https://ourworldindata.org/grapher/private-investment-in-artificial-intelligence
- IMF: AI Preparedness Index (AIPI); To be incorporated in a later version.
  https://www.imf.org/external/datamapper/AI_PI@AIPI/ADVEC/EME/LIC

### Anchoring References (Connectivity Context)
Used to ground long-run shifts in global connectivity:
- ITU Measuring Digital Development (2019)  
  https://www.itu.int/hub/publication/d-ind-ict_mdd-2019/
- ITU Measuring Digital Development (2022)  
  https://www.itu.int/hub/publication/d-ind-ict_mdd-2022/

---

## Methodology
- **Manual indicator screening:** we reviewed the Systema Globalis concepts catalog (`ddf--concepts.csv`) and manually shortlisted indicators that could form meaningful pairs by wellbeing dimension (positive/negative tensions).
- **Minimal preprocessing:** datasets were used largely as provided.
- **Aggregation:** where needed (e.g., AI job postings), we aggregated to form a world-level proxy.
- **Forecasting for missing recent years:** when core indicators lagged, ARIMA was used to estimate the most recent year(s) so the narrative could include recent windows where relevant.
- **Dual-axis charts by design:** some indicators differ in units and scale (e.g., per-person use vs total generation). Dual axes preserve interpretability without forcing normalization.

---

## Limitations & Considerations
- **Correlation ≠ causation:** the experience does not run causal inference or statistically powered hypothesis testing.
- **Confounders exist:** trends may reflect electrification, GDP, population growth, policy, grid mix, measurement changes, or reporting delays.
- **Averages can hide real lives:** world/country averages can mask inequality and local variation.
- **AI coverage is uneven:** some AI datasets have partial coverage or are more representative of some regions than others.
- **Forecasted years are estimates:** ARIMA outputs are model-based extensions, not official measurements.

---

## Technology Stack & Key Libraries

- Frontend: [TBD]
- Visualization: [TBD]
- Data Processing: [TBD]
- Backend/API: [TBD]
- AI: OpenAI API (reflection generation)

---

## User Guide
1) Begin the experience (Environmental dimension).
2) Read short prompts and respond with a choice when signaled.
3) Progress through a sequence of visuals and insights that build complexity gradually.
4) Near the end, the app generates a **tailored reflection** based on your responses.
5) At the end, you can click **View Sources & Methodology** for transparency and references.
6) Continue to the next section/dimension (as available).

---

## What Actions Users Can Take (Based on Insights)
This experience is designed to end with agency, not anxiety. Examples:
- Use AI more intentionally (avoid reflex prompts when other tools fit).
- Prefer lighter interactions when possible (fewer retries, fewer image generations).
- Use traditional search for simple factual lookups.
- Support transparency and sustainability norms (energy labels, reporting, cleaner grids).
- Reinvest in community: replace some “AI-as-companion” moments with human connection.

---

## What We Would Build Next (With More Time)
- **Complete the remaining wellbeing dimensions** (physical, mental, economic, cultural) with the same bespoke “question → answer → visual → insight” craftsmanship.
- **Filtering & comparison modes:** allow users to view a single country, compare countries, or switch between world aggregation and user-selected groupings.
- **Model-choice education through experience:** add a “double reflection” ending:
  - Generate two reflections from the same user inputs—one using a large hosted model (LLM) and one using a smaller local model (SLM) (e.g., via Ollama / llama.cpp).
  - Present both reflections without labeling which is which.
  - Then reveal the difference in estimated cost/energy footprint and discuss when SLMs are “good enough,” encouraging experimentation with lower-impact defaults.
- **Mobile adaptation:** adapt the web experience for a mobile-first flow.

---

## Privacy
User responses are collected to generate the end-of-flow reflection (and may be sent as part of an OpenAI API call). We do not use responses for profiling, and we do not publish or sell response data.

---

## License
- Data: Gapminder Systema Globalis is provided under CC BY 4.0 (see dataset repo for details).
