"""
Script to download and organize Gapminder datasets into category-specific folders.
"""

import shutil
from pathlib import Path
from gapminder_ingest import GapminderDataset

# Base data directory
BASE_DIR = Path("./data/gapminder")

# Category folders
CATEGORIES = ["Physical", "Mental", "Social", "Economic", "Environmental", "Cultural"]

# Dataset mappings: category -> list of indicator names
DATASETS = {
    "Physical": [
        "suicide_per_100000_people",
        "body_mass_index_bmi_men_kgperm2",
    ],
    "Mental": [
        "data_quality_income_per_person",
        "working_hours_per_week",
    ],
    "Social": [
        "personal_computers_per_100_people",
        "urban_population",
        "blood_pressure_sbp_men_mmhg",
        "cell_phones_per_100_people",
        "government_and_society_aid_given_percent_of_aid",
        "inequality_index_gini",
    ],
    "Economic": [
        "gdp_per_capita_yearly_growth",
        "income_share_of_richest_10percent",
        "aged_15plus_unemployment_rate_percent",
        "aid_received_per_person_current_us",
        "dollar_billionaires_per_million_people",
        "extreme_poverty_percent_people_below_300_a_day",
    ],
    "Environmental": [
        "coal_consumption_total",
        "electricity_use_per_person",
        "electricity_generation_total",
        "energy_use_per_person",
        "energy_production_total",
        "municipal_water_withdrawal_percent_of_total",
    ],
    "Cultural": [
        "males_aged_15_24_unemployment_rate_percent",
        "mean_years_in_school_men_15_to_24_years",
        "literacy_rate_adult",
        "art_coverage_percent_cd4_l_350",
        "education_aid_given_percent_of_aid",
        "patent_applications_total",
    ],
}

# Existing datasets to move: (source_filename, target_category)
EXISTING_TO_MOVE = [
    ("ddf--datapoints--data_quality_life_expectancy--by--geo--time.csv", "Physical"),
    ("ddf--datapoints--internet_users--by--geo--time.csv", "Social"),
    ("ddf--datapoints--at_least_basic_water_source_overall_access_percent--by--geo--time.csv", "Environmental"),
    ("ddf--datapoints--cumulative_co2_emissions_tonnes--by--geo--time.csv", "Environmental"),
]

def main():
    print("=" * 60)
    print("Downloading and Organizing Gapminder Datasets")
    print("=" * 60)
    
    # Initialize dataset handler
    ds = GapminderDataset(data_dir=BASE_DIR, use_cache=True)
    
    # Create category folders
    print("\n📁 Creating category folders...")
    for category in CATEGORIES:
        category_dir = BASE_DIR / category
        category_dir.mkdir(parents=True, exist_ok=True)
        print(f"   ✓ Created {category}/")
    
    # Download new datasets
    print("\n📥 Downloading new datasets...")
    total_new = sum(len(indicators) for indicators in DATASETS.values())
    current = 0
    
    for category, indicators in DATASETS.items():
        category_dir = BASE_DIR / category
        print(f"\n  {category} ({len(indicators)} datasets):")
        
        for indicator in indicators:
            current += 1
            filename = f"ddf--datapoints--{indicator}--by--geo--time.csv"
            target_path = category_dir / filename
            
            try:
                print(f"    [{current}/{total_new}] {indicator}...", end=" ", flush=True)
                df = ds.load_datapoints(indicator)
                
                # Save to category folder
                df.to_csv(target_path, index=False)
                print(f"✓ ({len(df):,} rows)")
                
            except Exception as e:
                print(f"✗ Error: {e}")
    
    # Move existing datasets
    print("\n📦 Moving existing datasets...")
    source_dir = BASE_DIR / "countries-etc-datapoints"
    
    for filename, target_category in EXISTING_TO_MOVE:
        source_path = source_dir / filename
        target_dir = BASE_DIR / target_category
        target_path = target_dir / filename
        
        if source_path.exists():
            try:
                shutil.move(str(source_path), str(target_path))
                print(f"   ✓ Moved {filename} → {target_category}/")
            except Exception as e:
                print(f"   ✗ Error moving {filename}: {e}")
        else:
            print(f"   ⚠ {filename} not found in source directory")
    
    print("\n✅ Done! All datasets organized by category.")
    print(f"   Data directory: {BASE_DIR.absolute()}")

if __name__ == "__main__":
    main()

