"use client";

import { useEffect, useState } from "react";
import {
    ComposedChart,
    Area,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    Cell,
    LabelList,
} from "recharts";

// Combined data: Electricity + AI Investment (World, in billions USD)
const fullData = [
    { year: 2005, totalGeneration: 17875, perPerson: 3790, aiInvestment: null },
    { year: 2006, totalGeneration: 18555, perPerson: 3881, aiInvestment: null },
    { year: 2007, totalGeneration: 19429, perPerson: 3946, aiInvestment: null },
    { year: 2008, totalGeneration: 19791, perPerson: 4016, aiInvestment: null },
    { year: 2009, totalGeneration: 19622, perPerson: 3913, aiInvestment: null },
    { year: 2010, totalGeneration: 20887, perPerson: 4088, aiInvestment: null },
    { year: 2011, totalGeneration: 21572, perPerson: 4103, aiInvestment: null },
    { year: 2012, totalGeneration: 22099, perPerson: 4115, aiInvestment: null },
    { year: 2013, totalGeneration: 22698, perPerson: 4107, aiInvestment: 6 },
    { year: 2014, totalGeneration: 23303, perPerson: 4092, aiInvestment: 11 },
    { year: 2015, totalGeneration: 23515, perPerson: 4146, aiInvestment: 15 },
    { year: 2016, totalGeneration: 24159, perPerson: 4150, aiInvestment: 19 },
    { year: 2017, totalGeneration: 24895, perPerson: 4181, aiInvestment: 28 },
    { year: 2018, totalGeneration: 25898, perPerson: 4220, aiInvestment: 47 },
    { year: 2019, totalGeneration: 26246, perPerson: 4218, aiInvestment: 62 },
    { year: 2020, totalGeneration: 26126, perPerson: 4121, aiInvestment: 77 },
    { year: 2021, totalGeneration: 27614, perPerson: 4285, aiInvestment: 145 },
    { year: 2022, totalGeneration: 28267, perPerson: 4234, aiInvestment: 105 },
    { year: 2023, totalGeneration: 28982, perPerson: 4520, aiInvestment: 93 },
    { year: 2024, totalGeneration: 30263, perPerson: 4850, aiInvestment: 130 },
];

// Zoomed data starting from 2014
const zoomedData = fullData.filter(d => d.year >= 2014);

interface AIInvestmentChartProps {
    animate?: boolean;
}

export function AIInvestmentChart({ animate = true }: AIInvestmentChartProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [currentData, setCurrentData] = useState(fullData);
    const [showBars, setShowBars] = useState(false);

    useEffect(() => {
        if (animate) {
            setIsVisible(false);
            setCurrentData(fullData);
            setShowBars(false);

            const visibleTimer = setTimeout(() => setIsVisible(true), 100);
            const zoomTimer = setTimeout(() => {
                setCurrentData(zoomedData);
            }, 1500); // Wait for initial lines to draw, then zoom
            const barsTimer = setTimeout(() => setShowBars(true), 3000);

            return () => {
                clearTimeout(visibleTimer);
                clearTimeout(zoomTimer);
                clearTimeout(barsTimer);
            };
        } else {
            setIsVisible(true);
            setCurrentData(zoomedData);
            setShowBars(true);
        }
    }, [animate]);

    // Custom tooltip
    const CustomTooltip = ({ active, payload, label }: {
        active?: boolean;
        payload?: Array<{ value: number; dataKey: string; color: string }>;
        label?: string
    }) => {
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
                        marginBottom: '8px',
                        fontWeight: 600,
                    }}>
                        {label}
                    </p>
                    {payload.map((entry, index) => {
                        if (entry.value === null) return null;
                        let label = '';
                        let formattedValue = '';
                        if (entry.dataKey === 'totalGeneration') {
                            label = 'Total Generation';
                            formattedValue = `${entry.value.toLocaleString()} TWh`;
                        } else if (entry.dataKey === 'perPerson') {
                            label = 'Per Person';
                            formattedValue = `${entry.value.toLocaleString()} kWh`;
                        } else if (entry.dataKey === 'aiInvestment') {
                            label = 'AI Investment';
                            formattedValue = `$${entry.value}B`;
                        }
                        return (
                            <p key={index} style={{
                                margin: 0,
                                fontSize: '0.95rem',
                                color: entry.color,
                                marginBottom: index < payload.length - 1 ? '4px' : 0,
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

    // Custom label for bar tops
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderBarLabel = (props: any) => {
        const { x, y, width, value } = props;
        if (!value || x === undefined || y === undefined || !width) return null;
        return (
            <text
                x={Number(x) + Number(width) / 2}
                y={Number(y) - 8}
                fill="#8384D8"
                textAnchor="middle"
                fontSize={9}
                fontWeight={600}
            >
                ${value}B
            </text>
        );
    };

    return (
        <div style={{ width: '100%', height: '350px', opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    data={currentData}
                    margin={{ top: 30, right: 60, left: 10, bottom: 5 }}
                >
                    <defs>
                        <linearGradient id="totalGradientAI" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.25} />
                            <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.02} />
                        </linearGradient>
                    </defs>

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
                        fontSize={11}
                        tickLine={false}
                        axisLine={{ stroke: 'currentColor', strokeOpacity: 0.3 }}
                        interval={0}
                    />
                    {/* Left Y-axis: Total generation */}
                    <YAxis
                        yAxisId="left"
                        orientation="left"
                        stroke="#4ECDC4"
                        strokeOpacity={0.8}
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${Math.round(value / 1000)}`}
                        domain={[16500, 'dataMax + 500']}
                        label={{
                            value: 'TWh (thousands)',
                            angle: -90,
                            position: 'insideLeft',
                            style: {
                                textAnchor: 'middle',
                                fill: '#4ECDC4',
                                opacity: 0.9,
                                fontSize: 9,
                            }
                        }}
                    />
                    {/* Right Y-axis: Per person */}
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#95D44A"
                        strokeOpacity={0.8}
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}`}
                        domain={[2000, 5500]}
                        label={{
                            value: 'kWh/person',
                            angle: 90,
                            position: 'insideRight',
                            style: {
                                textAnchor: 'middle',
                                fill: '#95D44A',
                                opacity: 0.9,
                                fontSize: 9,
                            }
                        }}
                    />
                    {/* Hidden Y-axis for AI Investment bars */}
                    <YAxis
                        yAxisId="bars"
                        orientation="right"
                        hide={true}
                        domain={[0, 180]}
                    />

                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        wrapperStyle={{ paddingTop: '10px' }}
                        formatter={(value) => (
                            <span style={{
                                color: value === 'aiInvestment' ? '#8384D8' : 'currentColor',
                                fontSize: '0.8rem'
                            }}>
                                {value === 'totalGeneration' ? 'Total Generation' :
                                    value === 'perPerson' ? 'Per Person' : 'AI Investment'}
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
                        fill="url(#totalGradientAI)"
                        isAnimationActive={true}
                        animationDuration={1000}
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
                        isAnimationActive={true}
                        animationDuration={1000}
                        animationEasing="ease-out"
                        name="perPerson"
                    />

                    {/* AI Investment - Bar chart overlay */}
                    {showBars && (
                        <Bar
                            yAxisId="bars"
                            dataKey="aiInvestment"
                            name="aiInvestment"
                            fill="#8384D8"
                            fillOpacity={0.7}
                            isAnimationActive={true}
                            animationDuration={1000}
                            animationEasing="ease-out"
                            radius={[4, 4, 0, 0]}
                        >
                            <LabelList dataKey="aiInvestment" content={renderBarLabel} />
                            {currentData.map((entry: any, index: number) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.aiInvestment ? "#8384D8" : "transparent"}
                                    fillOpacity={0.7}
                                />
                            ))}
                        </Bar>
                    )}
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
