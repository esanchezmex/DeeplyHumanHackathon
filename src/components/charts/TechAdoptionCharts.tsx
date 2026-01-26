"use client";

import { useEffect, useState } from "react";
import {
    ComposedChart,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

// Cell phones per 100 people (global average) + Urban population (billions)
const cellPhonesData = [
    { year: 1980, cellPhones: 0, urbanPop: 1.73 },
    { year: 1985, cellPhones: 0.03, urbanPop: 1.98 },
    { year: 1990, cellPhones: 0.26, urbanPop: 2.26 },
    { year: 1995, cellPhones: 2.04, urbanPop: 2.55 },
    { year: 2000, cellPhones: 12.1, urbanPop: 2.85 },
    { year: 2005, cellPhones: 33.9, urbanPop: 3.18 },
    { year: 2010, cellPhones: 76.6, urbanPop: 3.53 },
    { year: 2015, cellPhones: 104.9, urbanPop: 3.94 },
    { year: 2020, cellPhones: 106.5, urbanPop: 4.35 },
    { year: 2024, cellPhones: 114.1, urbanPop: 4.60 },
];

// Internet users (% of population, global average) + Urban population (billions)
const internetData = [
    { year: 1990, internetUsers: 0.02, urbanPop: 2.26 },
    { year: 1995, internetUsers: 0.95, urbanPop: 2.55 },
    { year: 2000, internetUsers: 8.7, urbanPop: 2.85 },
    { year: 2005, internetUsers: 20.8, urbanPop: 3.18 },
    { year: 2010, internetUsers: 34.3, urbanPop: 3.53 },
    { year: 2015, internetUsers: 47.9, urbanPop: 3.94 },
    { year: 2020, internetUsers: 64.0, urbanPop: 4.35 },
    { year: 2023, internetUsers: 72.3, urbanPop: 4.55 },
];

interface TechAdoptionChartsProps {
    animate?: boolean;
}

export function TechAdoptionCharts({ animate = true }: TechAdoptionChartsProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [showLines, setShowLines] = useState(false);

    useEffect(() => {
        if (animate) {
            setIsVisible(false);
            setShowLines(false);

            const visibleTimer = setTimeout(() => setIsVisible(true), 100);
            const linesTimer = setTimeout(() => setShowLines(true), 800);

            return () => {
                clearTimeout(visibleTimer);
                clearTimeout(linesTimer);
            };
        } else {
            setIsVisible(true);
            setShowLines(true);
        }
    }, [animate]);

    // Custom tooltip
    const CustomTooltip = ({ active, payload, label, chartType }: {
        active?: boolean;
        payload?: Array<{ value: number; dataKey: string; color: string }>;
        label?: string;
        chartType: 'cellPhones' | 'internet';
    }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                    background: 'rgba(0, 0, 0, 0.85)',
                    border: '1px solid rgba(255, 159, 67, 0.3)',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}>
                    <p style={{
                        margin: 0,
                        fontSize: '0.85rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '6px',
                        fontWeight: 600,
                    }}>
                        {label}
                    </p>
                    {payload.map((entry, index) => {
                        let label = '';
                        let formattedValue = '';
                        if (entry.dataKey === 'cellPhones') {
                            label = 'Cell Phones';
                            formattedValue = `${entry.value.toFixed(1)} per 100`;
                        } else if (entry.dataKey === 'internetUsers') {
                            label = 'Internet Users';
                            formattedValue = `${entry.value.toFixed(1)}%`;
                        } else if (entry.dataKey === 'urbanPop') {
                            label = 'Urban Pop';
                            formattedValue = `${entry.value.toFixed(2)}B`;
                        }
                        return (
                            <p key={index} style={{
                                margin: 0,
                                fontSize: '0.85rem',
                                color: entry.color,
                                marginBottom: index < payload.length - 1 ? '3px' : 0,
                            }}>
                                {label}: {formattedValue}
                            </p>
                        );
                    })}
                </div>
            );
        }
        return null;
    };

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            gap: '16px',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.3s ease'
        }}>
            {/* Cell Phones Chart */}
            <div style={{ flex: 1, height: '280px' }}>
                <h4 style={{
                    margin: '0 0 8px 0',
                    fontSize: '0.85rem',
                    color: 'currentColor',
                    textAlign: 'center',
                    fontWeight: 500,
                    opacity: 0.85,
                }}>
                    Cell Phones per 100 People
                </h4>
                <ResponsiveContainer width="100%" height="90%">
                    <ComposedChart
                        data={cellPhonesData}
                        margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
                    >
                        <defs>
                            <linearGradient id="urbanGradient1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FF9F43" stopOpacity={0.25} />
                                <stop offset="95%" stopColor="#FF9F43" stopOpacity={0.02} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.1} vertical={false} />
                        <XAxis
                            dataKey="year"
                            stroke="currentColor"
                            strokeOpacity={0.5}
                            fontSize={10}
                            tickLine={false}
                            interval={1}
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            stroke="#FF9F43"
                            strokeOpacity={0.7}
                            fontSize={9}
                            tickLine={false}
                            axisLine={false}
                            domain={[0, 5]}
                            tickFormatter={(value) => `${value}B`}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            stroke="#E056FD"
                            strokeOpacity={0.7}
                            fontSize={9}
                            tickLine={false}
                            axisLine={false}
                            domain={[0, 130]}
                        />
                        <Tooltip content={<CustomTooltip chartType="cellPhones" />} />
                        <Legend
                            wrapperStyle={{ paddingTop: '5px', fontSize: '0.75rem' }}
                            formatter={(value) => (
                                <span style={{ fontSize: '0.7rem', color: 'currentColor' }}>
                                    {value === 'urbanPop' ? 'Urban Population' : 'Cell Phones'}
                                </span>
                            )}
                        />
                        <Area
                            yAxisId="left"
                            type="monotone"
                            dataKey="urbanPop"
                            stroke="#FF9F43"
                            strokeWidth={2}
                            fill="url(#urbanGradient1)"
                            isAnimationActive={true}
                            animationDuration={1000}
                            name="urbanPop"
                        />
                        {showLines && (
                            <Line
                                yAxisId="right"
                                type="monotone"
                                dataKey="cellPhones"
                                stroke="#E056FD"
                                strokeWidth={2.5}
                                dot={false}
                                isAnimationActive={true}
                                animationDuration={1200}
                                name="cellPhones"
                            />
                        )}
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            {/* Internet Users Chart */}
            <div style={{ flex: 1, height: '280px' }}>
                <h4 style={{
                    margin: '0 0 8px 0',
                    fontSize: '0.85rem',
                    color: 'currentColor',
                    textAlign: 'center',
                    fontWeight: 500,
                    opacity: 0.85,
                }}>
                    Internet Users (%)
                </h4>
                <ResponsiveContainer width="100%" height="90%">
                    <ComposedChart
                        data={internetData}
                        margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
                    >
                        <defs>
                            <linearGradient id="urbanGradient2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FF9F43" stopOpacity={0.25} />
                                <stop offset="95%" stopColor="#FF9F43" stopOpacity={0.02} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.1} vertical={false} />
                        <XAxis
                            dataKey="year"
                            stroke="currentColor"
                            strokeOpacity={0.5}
                            fontSize={10}
                            tickLine={false}
                            interval={1}
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            stroke="#FF9F43"
                            strokeOpacity={0.7}
                            fontSize={9}
                            tickLine={false}
                            axisLine={false}
                            domain={[0, 5]}
                            tickFormatter={(value) => `${value}B`}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            stroke="#00D2D3"
                            strokeOpacity={0.7}
                            fontSize={9}
                            tickLine={false}
                            axisLine={false}
                            domain={[0, 100]}
                            tickFormatter={(value) => `${value}%`}
                        />
                        <Tooltip content={<CustomTooltip chartType="internet" />} />
                        <Legend
                            wrapperStyle={{ paddingTop: '5px', fontSize: '0.75rem' }}
                            formatter={(value) => (
                                <span style={{ fontSize: '0.7rem', color: 'currentColor' }}>
                                    {value === 'urbanPop' ? 'Urban Population' : 'Internet Users'}
                                </span>
                            )}
                        />
                        <Area
                            yAxisId="left"
                            type="monotone"
                            dataKey="urbanPop"
                            stroke="#FF9F43"
                            strokeWidth={2}
                            fill="url(#urbanGradient2)"
                            isAnimationActive={true}
                            animationDuration={1000}
                            name="urbanPop"
                        />
                        {showLines && (
                            <Line
                                yAxisId="right"
                                type="monotone"
                                dataKey="internetUsers"
                                stroke="#00D2D3"
                                strokeWidth={2.5}
                                dot={false}
                                isAnimationActive={true}
                                animationDuration={1200}
                                name="internetUsers"
                            />
                        )}
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
