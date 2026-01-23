# Share of artificial intelligence jobs among all job postings - Data package

This data package contains the data that powers the chart ["Share of artificial intelligence jobs among all job postings"](https://ourworldindata.org/grapher/share-artificial-intelligence-job-postings?v=1&csvType=full&useColumnShortNames=false&utm_source=chatgpt.com) on the Our World in Data website. It was downloaded on January 23, 2026.

### Active Filters

A filtered subset of the full data was downloaded. The following filters were applied:

## CSV Structure

The high level structure of the CSV file is that each row is an observation for an entity (usually a country or region) and a timepoint (usually a year).

The first two columns in the CSV file are "Entity" and "Code". "Entity" is the name of the entity (e.g. "United States"). "Code" is the OWID internal entity code that we use if the entity is a country or region. For normal countries, this is the same as the [iso alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code of the entity (e.g. "USA") - for non-standard countries like historical countries these are custom codes.

The third column is either "Year" or "Day". If the data is annual, this is "Year" and contains only the year as an integer. If the column is "Day", the column contains a date string in the form "YYYY-MM-DD".

The final column is the data column, which is the time series that powers the chart. If the CSV data is downloaded using the "full data" option, then the column corresponds to the time series below. If the CSV data is downloaded using the "only selected data visible in the chart" option then the data column is transformed depending on the chart type and thus the association with the time series might not be as straightforward.

## Metadata.json structure

The .metadata.json file contains metadata about the data package. The "charts" key contains information to recreate the chart, like the title, subtitle etc.. The "columns" key contains information about each of the columns in the csv, like the unit, timespan covered, citation for the data etc..

## About the data

Our World in Data is almost never the original producer of the data - almost all of the data we use has been compiled by others. If you want to re-use data, it is your responsibility to ensure that you adhere to the sources' license and to credit them correctly. Please note that a single time series may have more than one source - e.g. when we stich together data from different time periods by different producers or when we calculate per capita metrics using population data from a second source.

## Detailed information about the data


## Share of artificial intelligence jobs among all job postings
A job posting is considered an AI job if it requests one or more AI skills, e.g., "natural language processing", "neural networks", "machine learning", or "robotics".
Last updated: April 8, 2025  
Next update: April 2026  
Date range: 2014–2024  
Unit: %  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Lightcast via AI Index Report (2025) – with minor processing by Our World in Data

#### Full citation
Lightcast via AI Index Report (2025) – with minor processing by Our World in Data. “Share of artificial intelligence jobs among all job postings” [dataset]. Lightcast via AI Index Report, “AI Index Report” [original data].
Source: Lightcast via AI Index Report (2025) – with minor processing by Our World In Data

### What you should know about this data
* Lightcast classifies a job as an AI job if it mentions at least one AI-related skill in the posting text.
* AI-related skills are grouped into categories like machine learning and neural networks, natural language processing, generative AI, robotics and autonomous systems, computer vision, and AI ethics and governance.
* This method helps track employer demand for AI skills over time using real-time job posting data.

### Source

#### Lightcast via AI Index Report – AI Index Report
Retrieved on: 2025-04-08  
Retrieved from: https://aiindex.stanford.edu/wp-content/uploads/2024/04/HAI_2024_AI-Index-Report.pdf  


    