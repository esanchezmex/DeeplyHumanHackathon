# External funding for privately held AI companies raising above $1.5 million - Data package

This data package contains the data that powers the chart ["External funding for privately held AI companies raising above $1.5 million"](https://ourworldindata.org/grapher/private-investment-in-artificial-intelligence?v=1&csvType=full&useColumnShortNames=false) on the Our World in Data website. It was downloaded on January 23, 2026.

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


## Global total private investment in AI
Money put into privately held AI companies that raised more than $1.5 million from private investors. This excludes publicly traded companies (e.g., public Big Tech companies) and companies’ own internal spending, such as R&D or infrastructure. Expressed in US dollars, adjusted for inflation.
Last updated: April 8, 2025  
Next update: April 2026  
Date range: 2013–2024  
Unit: constant 2021 US$  


### How to cite this data

#### In-line citation
If you have limited space (e.g. in data visualizations), you can use this abbreviated in-line citation:  
Quid via AI Index Report (2025); U.S. Bureau of Labor Statistics (2025) – with major processing by Our World in Data

#### Full citation
Quid via AI Index Report (2025); U.S. Bureau of Labor Statistics (2025) – with major processing by Our World in Data. “Global total private investment in AI” [dataset]. Quid via AI Index Report, “AI Index Report”; U.S. Bureau of Labor Statistics, “US consumer prices” [original data].
Source: Quid via AI Index Report (2025), U.S. Bureau of Labor Statistics (2025) – with major processing by Our World In Data

### What you should know about this data
* This data focuses on external private-market investment, such as venture-capital and private-equity deals.
* It does not include internal corporate R&D, capital expenditure (CapEx), or public-sector funding. Publicly traded companies, including large tech firms, are excluded.
* Because this data covers only one form of financing, it underestimates total global spending on AI.
* Large single deals can cause spikes in specific years. Broader economic conditions (interest rates, investor sentiment) can also drive changes that are not specific to AI.
* AI firms are identified by the source based on keywords and industry tags; some misclassification is possible.

### Sources

#### Quid via AI Index Report – AI Index Report
Retrieved on: 2025-04-08  
Retrieved from: https://aiindex.stanford.edu/wp-content/uploads/2024/04/HAI_2024_AI-Index-Report.pdf  

#### U.S. Bureau of Labor Statistics – US consumer prices
Retrieved on: 2025-04-12  
Retrieved from: https://www.bls.gov/data/tools.htm  

#### Notes on our processing step for this indicator
- Reporting a time series of AI investments in nominal prices would make it difficult to compare observations across time. To make these comparisons possible, one has to take into account that prices change (inflation).
- It is not obvious how to adjust this time series for inflation, and our team discussed the best solutions at our disposal.
- It would be straightforward to adjust the time series for price changes if we knew the prices of the specific goods and services purchased through these investments. This would make it possible to calculate a volume measure of AI investments and tell us how much these investments bought. But such a metric is not available. While a comprehensive price index is not available, we know that the cost of some crucial AI technology has fallen rapidly in price.
- In the absence of a comprehensive price index that captures the price of AI-specific goods and services, one has to rely on one of the available metrics for the price of a bundle of goods and services. Ultimately, we decided to use the US Consumer Price Index (CPI).
- The US CPI does not provide us with a volume measure of AI goods and services, but it does capture the opportunity costs of these investments. The inflation adjustment of this time series of AI investments, therefore, lets us understand the size of these investments relative to whatever else these sums of money could have purchased.


    