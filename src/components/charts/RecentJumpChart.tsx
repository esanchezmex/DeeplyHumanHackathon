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
    ReferenceArea,
} from "recharts";

// Extended data including 2023-2024 with the sharp increase
const electricityJumpData = [
    { year: 2005, totalGeneration: 17875, perPerson: 3790 },
    { year: 2006, totalGeneration: 18555, perPerson: 3881 },
    { year: 2007, totalGeneration: 19429, perPerson: 3946 },
    { year: 2008, totalGeneration: 19791, perPerson: 4016 },
    { year: 2009, totalGeneration: 19622, perPerson: 3913 },
    { year: 2010, totalGeneration: 20887, perPerson: 4088 },
    { year: 2011, totalGeneration: 21572, perPerson: 4103 },
    { year: 2012, totalGeneration: 22099, perPerson: 4115 },
    { year: 2013, totalGeneration: 22698, perPerson: 4107 },
    { year: 2014, totalGeneration: 23303, perPerson: 4092 },
    { year: 2015, totalGeneration: 23515, perPerson: 4146 },
    { year: 2016, totalGeneration: 24159, perPerson: 4150 },
    { year: 2017, totalGeneration: 24895, perPerson: 4181 },
    { year: 2018, totalGeneration: 25898, perPerson: 4220 },
    { year: 2019, totalGeneration: 26246, perPerson: 4218 },
    { year: 2020, totalGeneration: 26126, perPerson: 4121 },
    { year: 2021, totalGeneration: 27614, perPerson: 4285 },
    { year: 2022, totalGeneration: 28267, perPerson: 4234 },
    // Recent jump years - highlighted
    { year: 2023, totalGeneration: 28982, perPerson: 4520, isRecent: true },
    { year: 2024, totalGeneration: 30263, perPerson: 4850, isRecent: true },
];

interface RecentJumpChartProps {
    animate?: boolean;
}

export function RecentJumpChart({ animate = true }: RecentJumpChartProps) {
    const [isVisible, setIsVisible] = useState(!animate);
    const [showThickLine, setShowThickLine] = useState(false);

    useEffect(() => {
        if (animate) {
            // Reset states on mount
            setIsVisible(false);
            setShowThickLine(false);

            const visibleTimer = setTimeout(() => setIsVisible(true), 100);
            const thickLineTimer = setTimeout(() => setShowThickLine(true), 3000);

            return () => {
                clearTimeout(visibleTimer);
                clearTimeout(thickLineTimer);
            };
        }
    }, [animate]);

    // Custom tooltip component
    const CustomTooltip = ({ active, payload, label }: {
        active?: boolean;
        payload?: Array<{ value: number; dataKey: string; color: string }>;
        label?: string
    }) => {
        if (active && payload && payload.length) {
            const isRecentYear = label && (label === '2023' || label === '2024');
            return (
                <div style={{
                    background: isRecentYear ? 'rgba(255, 107, 107, 0.95)' : 'rgba(0, 0, 0, 0.9)',
                    border: `1px solid ${isRecentYear ? 'rgba(255, 107, 107, 0.5)' : 'rgba(78, 205, 196, 0.3)'}`,
                    borderRadius: '8px',
                    padding: '12px 16px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}>
                    <p style={{
                        margin: 0,
                        fontSize: '0.9rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '8px',
                        fontWeight: 600,
                    }}>
                        {label} {isRecentYear && '⚡'}
                    </p>
                    {payload.map((entry, index) => (
                        <p key={index} style={{
                            margin: 0,
                            fontSize: '0.95rem',
                            color: isRecentYear ? 'rgba(255, 255, 255, 0.95)' : entry.color,
                            marginBottom: index < payload.length - 1 ? '4px' : 0,
                        }}>
                            {entry.dataKey === 'totalGeneration'
                                ? `Total: ${entry.value.toLocaleString()} TWh`
                                : `Per Person: ${entry.value.toLocaleString()} kWh`
                            }
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div style={{ width: '100%', height: '320px', opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    data={electricityJumpData}
                    margin={{ top: 20, right: 60, left: 10, bottom: 5 }}
                >
                    <defs>
                        <linearGradient id="totalGradientJump" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.02} />
                        </linearGradient>
                        <linearGradient id="perPersonGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#95D44A" stopOpacity={0.25} />
                            <stop offset="95%" stopColor="#95D44A" stopOpacity={0.02} />
                        </linearGradient>
                        <linearGradient id="highlightGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF6B6B" stopOpacity={0.12} />
                            <stop offset="100%" stopColor="#FF6B6B" stopOpacity={0.03} />
                        </linearGradient>
                    </defs>

                    {/* Highlight area for 2022-2024 */}
                    <ReferenceArea
                        x1={2022}
                        x2={2024}
                        fill="url(#highlightGradient)"
                        strokeOpacity={0}
                    />

                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="currentColor"
                        strokeOpacity={0.12}
                        vertical={false}
                    />
                    <XAxis
                        dataKey="year"
                        stroke="currentColor"
                        strokeOpacity={0.7}
                        fontSize={12}
                        tickLine={false}
                        axisLine={{ stroke: 'currentColor', strokeOpacity: 0.3 }}
                        interval={1}
                    />
                    {/* Left Y-axis: Total generation */}
                    <YAxis
                        yAxisId="left"
                        orientation="left"
                        stroke="#4ECDC4"
                        strokeOpacity={0.8}
                        fontSize={11}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${Math.round(value / 1000)}`}
                        domain={[16500, 'dataMax + 500']}
                        label={{
                            value: 'Total TWh (thousands)',
                            angle: -90,
                            position: 'insideLeft',
                            style: {
                                textAnchor: 'middle',
                                fill: '#4ECDC4',
                                opacity: 0.9,
                                fontSize: 10,
                            }
                        }}
                    />
                    {/* Right Y-axis: Per person */}
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#95D44A"
                        strokeOpacity={0.8}
                        fontSize={11}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}`}
                        domain={[2000, 5500]}
                        label={{
                            value: 'Per Person (kWh)',
                            angle: 90,
                            position: 'insideRight',
                            style: {
                                textAnchor: 'middle',
                                fill: '#95D44A',
                                opacity: 0.9,
                                fontSize: 10,
                            }
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        wrapperStyle={{ paddingTop: '10px' }}
                        formatter={(value) => (
                            <span style={{ color: 'currentColor', fontSize: '0.85rem' }}>
                                {value === 'totalGeneration' ? 'Total Generation' : 'Per Person'}
                            </span>
                        )}
                    />
                    {/* Total generation - Area chart */}
                    <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey="totalGeneration"
                        stroke="#4ECDC4"
                        strokeWidth={2}
                        fill="url(#totalGradientJump)"
                        isAnimationActive={animate && isVisible}
                        animationDuration={2000}
                        animationEasing="ease-out"
                        name="totalGeneration"
                    />
                    {/* Per person - Line chart */}
                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="perPerson"
                        stroke="#95D44A"
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={animate && isVisible}
                        animationDuration={2000}
                        animationEasing="ease-out"
                        animationBegin={500}
                        name="perPerson"
                    />
                    {/* Thicker overlay for recent years - shows after delay */}
                    {showThickLine && (
                        <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="perPerson"
                            stroke="#95D44A"
                            strokeWidth={6}
                            dot={false}
                            connectNulls={false}
                            isAnimationActive={true}
                            animationDuration={1200}
                            animationEasing="ease-out"
                            legendType="none"
                            data={[
                                ...electricityJumpData.slice(0, -3).map(d => ({ ...d, perPerson: null })),
                                ...electricityJumpData.slice(-3)
                            ]}
                        />
                    )}
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
