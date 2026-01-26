"use client";

import { useEffect, useState } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// Global electricity generation data (aggregated from Gapminder)
// Values are in TWh (terawatt-hours)
const electricityData = [
    { year: 2005, generation: 17875 },
    { year: 2006, generation: 18555 },
    { year: 2007, generation: 19429 },
    { year: 2008, generation: 19791 },
    { year: 2009, generation: 19622 },
    { year: 2010, generation: 20887 },
    { year: 2011, generation: 21572 },
    { year: 2012, generation: 22099 },
    { year: 2013, generation: 22698 },
    { year: 2014, generation: 23303 },
    { year: 2015, generation: 23515 },
    { year: 2016, generation: 24159 },
    { year: 2017, generation: 24895 },
    { year: 2018, generation: 25898 },
    { year: 2019, generation: 26246 },
    { year: 2020, generation: 26126 },
    { year: 2021, generation: 27614 },
    { year: 2022, generation: 28267 },
];

interface GlobalElectricityChartProps {
    animate?: boolean;
}

export function GlobalElectricityChart({ animate = true }: GlobalElectricityChartProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (animate) {
            // Reset and then trigger animation
            setIsVisible(false);
            const timer = setTimeout(() => setIsVisible(true), 100);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(true);
        }
    }, [animate]);

    // Format large numbers for tooltip
    const formatValue = (value: number) => `${value.toLocaleString()} TWh`;

    // Custom tooltip component
    const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                    background: 'rgba(0, 0, 0, 0.85)',
                    border: '1px solid rgba(78, 205, 196, 0.3)',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}>
                    <p style={{
                        margin: 0,
                        fontSize: '0.9rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        marginBottom: '4px',
                    }}>
                        {label}
                    </p>
                    <p style={{
                        margin: 0,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#4ECDC4',
                    }}>
                        {formatValue(payload[0].value)}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div style={{ width: '100%', height: '280px', opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={electricityData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="electricityGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="currentColor"
                        strokeOpacity={0.15}
                        vertical={false}
                    />
                    <XAxis
                        dataKey="year"
                        stroke="currentColor"
                        strokeOpacity={0.7}
                        fontSize={12}
                        tickLine={false}
                        axisLine={{ stroke: 'currentColor', strokeOpacity: 0.3 }}
                        interval="preserveStartEnd"
                    />
                    <YAxis
                        stroke="currentColor"
                        strokeOpacity={0.7}
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${Math.round(value / 1000)}`}
                        domain={[16500, 'dataMax + 500']}
                        label={{
                            value: 'Electricity Generation TWh (in thousands)',
                            angle: -90,
                            position: 'insideLeft',
                            style: {
                                textAnchor: 'middle',
                                fill: 'currentColor',
                                opacity: 0.7,
                                fontSize: 11,
                            }
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    {isVisible && (
                        <Area
                            type="monotone"
                            dataKey="generation"
                            stroke="#4ECDC4"
                            strokeWidth={3}
                            fill="url(#electricityGradient)"
                            isAnimationActive={true}
                            animationDuration={2000}
                            animationEasing="ease-out"
                        />
                    )}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
