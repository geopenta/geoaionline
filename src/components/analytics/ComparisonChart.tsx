import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    category: 'Customer Support',
    withoutAI: 40,
    withAI: 90
  },
  {
    category: 'Data Processing',
    withoutAI: 30,
    withAI: 95
  },
  {
    category: 'Task Automation',
    withoutAI: 25,
    withAI: 85
  },
  {
    category: 'Decision Making',
    withoutAI: 35,
    withAI: 80
  }
];

const ComparisonChart = () => {
  return (
    <div className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-6">
      <h3 className="text-xl font-bold mb-6 font-mono">Performance Comparison</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="category" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#000',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '0.5rem'
              }}
            />
            <Legend />
            <Bar dataKey="withoutAI" name="Without AI" fill="#4B5563" />
            <Bar dataKey="withAI" name="With GEO.AI" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComparisonChart;