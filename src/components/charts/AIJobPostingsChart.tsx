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

// Global average share of AI job postings (% of all job postings)
const aiJobPostingsData = [
    { year: 2014, share: 0.36 },
    { year: 2015, share: 0.53 },
    { year: 2016, share: 0.55 },
    { year: 2017, share: 0.67 },
    { year: 2018, share: 0.81 },
    { year: 2019, share: 0.78 },
    { year: 2020, share: 1.25 },
    { year: 2021, share: 1.24 },
    { year: 2022, share: 1.24 },
    { year: 2023, share: 1.08 },
    { year: 2024, share: 1.29 },
];

interface AIJobPostingsChartProps {
    animate?: boolean;
}

export function AIJobPostingsChart({ animate = true }: AIJobPostingsChartProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (animate) {
            setIsVisible(false);
            const timer = setTimeout(() => setIsVisible(true), 100);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(true);
        }
    }, [animate]);

    // Custom tooltip
    const CustomTooltip = ({ active, payload, label }: {
        active?: boolean;
        payload?: Array<{ value: number }>;
        label?: string;
    }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                    background: 'rgba(0, 0, 0, 0.85)',
                    border: '1px solid rgba(224, 86, 253, 0.3)',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}>
                    <p style={{
                        margin: 0,
                        fontSize: '0.9rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '4px',
                        fontWeight: 600,
                    }}>
                        {label}
                    </p>
                    <p style={{
                        margin: 0,
                        fontSize: '0.95rem',
                        color: '#9ECE9A',
                    }}>
                        AI Job Postings: {payload[0].value.toFixed(2)}%
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div style={{
            width: '100%',
            height: '300px',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.3s ease'
        }}>
            <h4 style={{
                margin: '0 0 8px 0',
                fontSize: '0.85rem',
                color: 'currentColor',
                textAlign: 'center',
                fontWeight: 500,
                opacity: 0.85,
            }}>
                Share of AI Job Postings (%)
            </h4>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={aiJobPostingsData}
                    margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
                >
                    <defs>
                        <linearGradient id="aiJobGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#9ECE9A" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#9ECE9A" stopOpacity={0.02} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="currentColor"
                        strokeOpacity={0.1}
                        vertical={false}
                    />
                    <XAxis
                        dataKey="year"
                        stroke="currentColor"
                        strokeOpacity={0.5}
                        fontSize={11}
                        tickLine={false}
                        axisLine={{ stroke: 'currentColor', strokeOpacity: 0.3 }}
                    />
                    <YAxis
                        stroke="currentColor"
                        strokeOpacity={0.5}
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}%`}
                        domain={[0, 1.5]}
                        label={{
                            value: '% of Job Postings',
                            angle: -90,
                            position: 'insideLeft',
                            style: {
                                textAnchor: 'middle',
                                fill: 'currentColor',
                                opacity: 0.7,
                                fontSize: 10,
                            }
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    {isVisible && (
                        <Area
                            type="monotone"
                            dataKey="share"
                            stroke="#9ECE9A"
                            strokeWidth={3}
                            fill="url(#aiJobGradient)"
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
