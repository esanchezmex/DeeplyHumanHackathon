"""
Gapminder Systema Globalis DDF Data Ingestion Module

This module provides utilities for downloading and parsing datasets from the
Gapminder Systema Globalis repository in DDFcsv format.

DDF Structure:
- Concepts: Metadata for indicators (ddf--concepts.csv)
- Entities: Dimension tables like countries (ddf--entities--{type}.csv)  
- Datapoints: Actual time-series data (ddf--datapoints--{indicator}--by--{dims}.csv)
"""

import os
import io
from pathlib import Path
from typing import Optional, List, Dict, Any
from urllib.parse import urljoin

import pandas as pd
import requests


# =============================================================================
# Configuration
# =============================================================================

GITHUB_RAW_BASE = "https://raw.githubusercontent.com/open-numbers/ddf--gapminder--systema_globalis/master/"
GITHUB_API_BASE = "https://api.github.com/repos/open-numbers/ddf--gapminder--systema_globalis/contents/"

DEFAULT_DATA_DIR = Path("./data/gapminder")

# Test indicators (verified to have datapoint files)
DEFAULT_INDICATORS = [
    "internet_users",
    "cumulative_co2_emissions_tonnes",
    "at_least_basic_water_source_overall_access_percent",
]

# Note: co2_intensity_of_economic_output_kg_co2_per_2017_ppp_of_gdp exists
# in concepts but has no datapoint file in the repository


# =============================================================================
# GapminderDataset Class
# =============================================================================

class GapminderDataset:
    """
    Main interface for accessing Gapminder Systema Globalis data.
    
    Example usage:
        ds = GapminderDataset()
        
        # List available concepts/indicators
        concepts = ds.list_concepts()
        
        # Load country dimension table
        countries = ds.load_countries()
        
        # Load specific indicator data
        internet_data = ds.load_datapoints("internet_users")
        
        # Merge with country names
        merged = ds.merge_with_countries(internet_data)
    """
    
    def __init__(self, data_dir: Optional[Path] = None, use_cache: bool = True):
        """
        Initialize the dataset handler.
        
        Args:
            data_dir: Directory for cached data files
            use_cache: Whether to use/create local cache
        """
        self.data_dir = Path(data_dir) if data_dir else DEFAULT_DATA_DIR
        self.use_cache = use_cache
        
        if use_cache:
            self.data_dir.mkdir(parents=True, exist_ok=True)
        
        # Cache for loaded dataframes
        self._concepts_cache: Optional[pd.DataFrame] = None
        self._countries_cache: Optional[pd.DataFrame] = None
    
    def _fetch_csv(self, filename: str, subdir: str = "") -> pd.DataFrame:
        """
        Fetch a CSV file from GitHub, using local cache if available.
        
        Args:
            filename: Name of the CSV file
            subdir: Subdirectory in the repository (e.g., 'countries-etc-datapoints')
        
        Returns:
            DataFrame with the CSV contents
        """
        # Check local cache first
        if subdir:
            cache_path = self.data_dir / subdir / filename
        else:
            cache_path = self.data_dir / filename
        
        if self.use_cache and cache_path.exists():
            return pd.read_csv(cache_path)
        
        # Fetch from GitHub
        url_path = f"{subdir}/{filename}" if subdir else filename
        url = urljoin(GITHUB_RAW_BASE, url_path)
        
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        df = pd.read_csv(io.StringIO(response.text))
        
        # Cache locally
        if self.use_cache:
            cache_path.parent.mkdir(parents=True, exist_ok=True)
            df.to_csv(cache_path, index=False)
        
        return df
    
    def list_concepts(self, concept_type: Optional[str] = None) -> pd.DataFrame:
        """
        List all available concepts (indicators) with metadata.
        
        Args:
            concept_type: Filter by concept type ('measure', 'string', 'entity_domain', etc.)
        
        Returns:
            DataFrame with concept metadata
        """
        if self._concepts_cache is None:
            self._concepts_cache = self._fetch_csv("ddf--concepts.csv")
        
        df = self._concepts_cache.copy()
        
        if concept_type:
            df = df[df["concept_type"] == concept_type]
        
        return df
    
    def search_concepts(self, keyword: str, columns: List[str] = None) -> pd.DataFrame:
        """
        Search concepts by keyword in name or description.
        
        Args:
            keyword: Search term (case-insensitive)
            columns: Columns to search in (default: ['concept', 'name', 'description'])
        
        Returns:
            DataFrame with matching concepts
        """
        concepts = self.list_concepts()
        
        if columns is None:
            columns = ["concept", "name", "description"]
        
        # Build search mask
        mask = pd.Series([False] * len(concepts))
        for col in columns:
            if col in concepts.columns:
                mask |= concepts[col].fillna("").str.lower().str.contains(keyword.lower())
        
        return concepts[mask]
    
    def get_concept_metadata(self, concept_id: str) -> Dict[str, Any]:
        """
        Get full metadata for a specific concept.
        
        Args:
            concept_id: The concept identifier (e.g., 'life_expectancy_years')
        
        Returns:
            Dictionary with concept metadata
        """
        concepts = self.list_concepts()
        row = concepts[concepts["concept"] == concept_id]
        
        if row.empty:
            raise ValueError(f"Concept '{concept_id}' not found")
        
        return row.iloc[0].to_dict()
    
    def load_countries(self) -> pd.DataFrame:
        """
        Load the country entities table.
        
        Returns:
            DataFrame with country information including codes, names, and regions
        """
        if self._countries_cache is None:
            self._countries_cache = self._fetch_csv("ddf--entities--geo--country.csv")
        
        return self._countries_cache.copy()
    
    def load_entities(self, entity_type: str) -> pd.DataFrame:
        """
        Load any entity type table.
        
        Args:
            entity_type: Entity type (e.g., 'geo--country', 'geo--world_4region', 'gender')
        
        Returns:
            DataFrame with entity data
        """
        filename = f"ddf--entities--{entity_type}.csv"
        return self._fetch_csv(filename)
    
    def load_datapoints(
        self,
        indicator: str,
        dimensions: str = "geo--time",
        countries: Optional[List[str]] = None,
        year_range: Optional[tuple] = None,
    ) -> pd.DataFrame:
        """
        Load datapoints for a specific indicator.
        
        Args:
            indicator: The indicator/concept ID (e.g., 'internet_users')
            dimensions: Dimension specification (default: 'geo--time')
            countries: Filter by country codes (e.g., ['usa', 'chn', 'ind'])
            year_range: Filter by year range as (start, end) tuple
        
        Returns:
            DataFrame with the time-series data
        """
        filename = f"ddf--datapoints--{indicator}--by--{dimensions}.csv"
        df = self._fetch_csv(filename, subdir="countries-etc-datapoints")
        
        # Apply filters
        if countries:
            df = df[df["geo"].isin(countries)]
        
        if year_range:
            df = df[(df["time"] >= year_range[0]) & (df["time"] <= year_range[1])]
        
        return df
    
    def merge_with_countries(
        self,
        df: pd.DataFrame,
        country_columns: List[str] = None,
    ) -> pd.DataFrame:
        """
        Merge datapoints with country metadata.
        
        Args:
            df: DataFrame with 'geo' column (country codes)
            country_columns: Columns to include from countries table
        
        Returns:
            Merged DataFrame with country information
        """
        countries = self.load_countries()
        
        if country_columns is None:
            country_columns = ["country", "name", "world_4region", "income_groups"]
        
        # Ensure 'country' is always included for the join
        if "country" not in country_columns:
            country_columns = ["country"] + list(country_columns)
        
        countries_subset = countries[country_columns].copy()
        
        return df.merge(
            countries_subset,
            left_on="geo",
            right_on="country",
            how="left",
        )
    
    def download_indicators(
        self,
        indicators: List[str],
        show_progress: bool = True,
    ) -> Dict[str, pd.DataFrame]:
        """
        Download multiple indicators at once.
        
        Args:
            indicators: List of indicator IDs to download
            show_progress: Whether to print progress messages
        
        Returns:
            Dictionary mapping indicator ID to DataFrame
        """
        results = {}
        
        for i, indicator in enumerate(indicators):
            if show_progress:
                print(f"[{i+1}/{len(indicators)}] Downloading {indicator}...")
            
            try:
                results[indicator] = self.load_datapoints(indicator)
            except Exception as e:
                print(f"  Error: {e}")
                results[indicator] = None
        
        return results


# =============================================================================
# Convenience Functions
# =============================================================================

def quick_load(indicator: str, with_countries: bool = True) -> pd.DataFrame:
    """
    Quickly load an indicator with optional country metadata.
    
    Args:
        indicator: The indicator ID
        with_countries: Whether to merge with country names/regions
    
    Returns:
        DataFrame with the indicator data
    """
    ds = GapminderDataset()
    df = ds.load_datapoints(indicator)
    
    if with_countries:
        df = ds.merge_with_countries(df)
    
    return df


def list_available_indicators() -> pd.DataFrame:
    """List all measure-type concepts (indicators)."""
    ds = GapminderDataset()
    return ds.list_concepts(concept_type="measure")[["concept", "name", "description", "tags"]]


# =============================================================================
# Main - Demo / Exploration
# =============================================================================

if __name__ == "__main__":
    print("=" * 60)
    print("Gapminder Systema Globalis - Data Ingestion Demo")
    print("=" * 60)
    
    ds = GapminderDataset()
    
    # Load concepts
    print("\n📊 Loading concepts catalog...")
    concepts = ds.list_concepts(concept_type="measure")
    print(f"   Found {len(concepts)} indicators")
    
    # Load countries
    print("\n🌍 Loading countries...")
    countries = ds.load_countries()
    print(f"   Found {len(countries)} countries/territories")
    
    # Download test indicators
    print("\n📥 Downloading test indicators...")
    for indicator in DEFAULT_INDICATORS:
        try:
            df = ds.load_datapoints(indicator)
            print(f"   ✓ {indicator}: {len(df):,} rows")
        except Exception as e:
            print(f"   ✗ {indicator}: {e}")
    
    # Show sample data
    print("\n📈 Sample: internet_users (last 5 years, top countries)")
    df = ds.load_datapoints("internet_users", year_range=(2018, 2023))
    df = ds.merge_with_countries(df)
    
    # Get latest year per country and show top 10
    latest = df.sort_values("time").groupby("geo").last().reset_index()
    top10 = latest.nlargest(10, "internet_users")[["name", "time", "internet_users"]]
    print(top10.to_string(index=False))
    
    print("\n✅ Done! Data cached in:", ds.data_dir.absolute())
