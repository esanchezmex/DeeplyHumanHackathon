import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import pearsonr
from pathlib import Path
from itertools import combinations

# Load AI Investment data (World totals) and convert to billions
ai_investment_df = pd.read_csv('data/gapminder/AI_Technology/private-investment-in-artificial-intelligence.csv')
ai_investment_world = ai_investment_df[ai_investment_df['Entity'] == 'World'].copy()
ai_investment_world['investment_billions'] = ai_investment_world['Global total private investment in AI'] / 1e9
ai_investment_avg = ai_investment_world[['Year', 'investment_billions']].rename(columns={'Year': 'year'})

def load_processed_datasets():
    """Load the processed datasets with forecasts."""
    processed_dir = Path('./data/gapminder/processed')
    datasets = {}
    
    for file in processed_dir.glob('*_with_forecasts.csv'):
        # Extract indicator name from filename
        indicator = file.name.replace('_with_forecasts.csv', '')
        df = pd.read_csv(file)
        datasets[indicator] = df
    return datasets

def create_dual_axis_plot(df1, df2, name1, name2, year_range=(2013, 2024)):
    """Create a dual-axis line graph with AI Investment bars overlay."""
    col1 = [c for c in df1.columns if c not in ['geo', 'time', 'is_forecasted']][0]
    col2 = [c for c in df2.columns if c not in ['geo', 'time', 'is_forecasted']][0]
    
    df1_filtered = df1[(df1['time'] >= year_range[0]) & (df1['time'] <= year_range[1])]
    df2_filtered = df2[(df2['time'] >= year_range[0]) & (df2['time'] <= year_range[1])]
    
    agg1 = df1_filtered.groupby('time')[col1].mean().reset_index()
    agg2 = df2_filtered.groupby('time')[col2].mean().reset_index()
    
    if len(agg1) == 0 or len(agg2) == 0:
        return None
    
    ai_filtered = ai_investment_avg[(ai_investment_avg['year'] >= year_range[0]) & (ai_investment_avg['year'] <= year_range[1])]
    
    fig, ax1 = plt.subplots(figsize=(14, 6))
    
    # Scale AI investment bars to fit primary y-axis
    ai_max = ai_filtered['investment_billions'].max()
    y1_max = agg1[col1].max()
    ai_scaled = ai_filtered['investment_billions'] * (y1_max / ai_max) * 0.8
    
    # AI Investment bars with labels on top
    bars = ax1.bar(ai_filtered['year'], ai_scaled, alpha=0.25, color='#2ca02c', label='AI Investment ($B)', width=0.8, zorder=1)
    for bar, value in zip(bars, ai_filtered['investment_billions']):
        ax1.text(bar.get_x() + bar.get_width()/2, bar.get_height() + y1_max * 0.02, 
                 f'${value:.0f}B', ha='center', va='bottom', fontsize=7, color='#2ca02c', fontweight='bold', rotation=45)
    
    # First line (primary y-axis)
    ax1.set_xlabel('Year', fontsize=11)
    ax1.set_ylabel(name1.replace('_', ' ').title()[:30], color='#1f77b4', fontsize=10)
    ax1.plot(agg1['time'], agg1[col1], color='#1f77b4', linewidth=2, marker='o', markersize=4, label=name1, zorder=3)
    ax1.tick_params(axis='y', labelcolor='#1f77b4')
    ax1.fill_between(agg1['time'], agg1[col1], alpha=0.1, color='#1f77b4', zorder=2)
    
    # Second line (secondary y-axis)
    ax2 = ax1.twinx()
    ax2.set_ylabel(name2.replace('_', ' ').title()[:30], color='#ff7f0e', fontsize=10)
    ax2.plot(agg2['time'], agg2[col2], color='#ff7f0e', linewidth=2, marker='s', markersize=4, label=name2, zorder=3)
    ax2.tick_params(axis='y', labelcolor='#ff7f0e')
    ax2.fill_between(agg2['time'], agg2[col2], alpha=0.1, color='#ff7f0e', zorder=2)
    
    # Correlation
    merged = agg1.merge(agg2, on='time', how='inner')
    if len(merged) > 2:
        corr, p_val = pearsonr(merged[col1], merged[col2])
        fig.text(0.5, 0.02, f'Pearson r = {corr:.3f} (p = {p_val:.3e})', ha='center', fontsize=11, 
                bbox=dict(boxstyle='round', facecolor='wheat', alpha=0.8))
    
    # Legend
    lines1, labels1 = ax1.get_legend_handles_labels()
    lines2, labels2 = ax2.get_legend_handles_labels()
    ax1.legend(lines1 + lines2, labels1 + labels2, loc='upper left', fontsize=9)
    
    plt.title(f'{name1.replace("_", " ").title()[:35]}\nvs {name2.replace("_", " ").title()[:35]} (with AI Investment)', fontsize=12, fontweight='bold', pad=10)
    fig.tight_layout(rect=[0, 0.05, 1, 1])
    ax1.grid(True, alpha=0.3)
    return fig

# Load processed datasets with forecasts
processed_datasets = load_processed_datasets()
print(f'Found {len(processed_datasets)} processed datasets with forecasts')

for name1, name2 in combinations(processed_datasets.keys(), 2):
    fig = create_dual_axis_plot(processed_datasets[name1], processed_datasets[name2], name1, name2)
    if fig:
        plt.show()
        plt.close()
