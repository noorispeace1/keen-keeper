"use client";

import { useContext, useMemo } from "react";
import { InstallAppsContext } from "@/context/AppContext";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

export default function StatsPage() {
    
    const { timeline = [] } = useContext(InstallAppsContext) || {};

    const chartData = useMemo(() => {
        
        const calls = timeline.filter((t) =>
            (t.interactionType || "").toLowerCase().trim() === "call"
        ).length;

        const texts = timeline.filter((t) =>
            (t.interactionType || "").toLowerCase().trim() === "text"
        ).length;

        const videos = timeline.filter((t) =>
            (t.interactionType || "").toLowerCase().trim() === "video"
        ).length;

        return [
            { name: "Calls", value: calls, fill: '#0088FE' },
            { name: "Texts", value: texts, fill: '#00C49F' },
            { name: "Videos", value: videos, fill: '#FFBB28' },
        ].filter((item) => item.value > 0);
    }, [timeline]);

    const COLORS = ["#0ea5e9", "#22c55e", "#f97316"];

    return (
        <main className="min-h-screen bg-gray-50 text-black py-2">
            <div className="max-w-5xl mx-auto px-2">
                
                <div className="mb-5">
                    <h1 className="text-4xl font-bold  mb-2">
                        Friendship Analytics
                    </h1>
                </div>

                
                <div className="bg-white bg-slate-100 rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-black  dark:text-white mb-6">
                        By Interaction Type
                    </h2>

                    {chartData.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-gray-500 dark:text-gray-900 mb-4">
                                No interactions recorded yet. Start by checking in with your friends!
                            </p>
                        </div>
                    ) : (
                        <div className="w-full h-96">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        innerRadius="80%"
                                        outerRadius="100%"
                                        cornerRadius="50%"
                                        paddingAngle={5}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, value, percent }) =>
                                            `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
                                        }
                                        // outerRadius={120}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value) => `${value} interactions`}
                                        contentStyle={{
                                            backgroundColor: "#1f2937",
                                            border: "none",
                                            borderRadius: "8px",
                                            color: "#fff",
                                        }}
                                    />
                                    <Legend
                                        wrapperStyle={{
                                            paddingTop: "20px",
                                        }}
                                        formatter={(value) => (
                                            <span className="text-gray-700 dark:text-gray-200">{value}</span>
                                        )}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

