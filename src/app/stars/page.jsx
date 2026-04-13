"use client";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const StarsPage = () => {
  // Screenshot 32 onujayi data setup
  const data = [
    { name: 'Text', value: 400, color: '#8B5CF6' },   // Purple
    { name: 'Call', value: 300, color: '#1E3A34' },   // Dark Green
    { name: 'Video', value: 300, color: '#34A853' },  // Light Green
  ];

  return (
    <div className="min-h-screen bg-[#f8fafb] py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Page Title with Border Bottom */}
        <h1 className="text-3xl font-bold text-[#1a2e28] mb-8 border-b border-gray-200 pb-4">
          Friendship Analytics
        </h1>

        {/* Chart Wrapper Card */}
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-bold text-[#4B635A] uppercase tracking-wider mb-8">
            By Interaction Type
          </h3>

          {/* Chart Display Area */}
          <div className="h-[350px] w-full flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={75}   // Doughnut effect
                  outerRadius={115}
                  paddingAngle={10}  // Slices gap
                  dataKey="value"
                  stroke="none"      // Removes border around slices
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                
                {/* Centered Legend at the Bottom */}
                <Legend 
                  verticalAlign="bottom" 
                  align="center"
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => (
                    <span className="text-gray-500 text-[11px] font-semibold ml-1 mr-6 uppercase tracking-tight">
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarsPage;