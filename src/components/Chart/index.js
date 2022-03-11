import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { ChartTitle, ChartContainer } from './ChartStyles';

const Chart = ({ title, data, dataKey, grid }) => {
    return (
        <ChartContainer>
            <ChartTitle>{title}</ChartTitle>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#483D8B" strokeDasharray="3 4 5 2" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}

export default Chart
