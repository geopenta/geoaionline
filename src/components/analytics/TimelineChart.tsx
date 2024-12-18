import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'W1', efficiency: 30, satisfaction: 40 },
  { week: 'W2', efficiency: 45, satisfaction: 55 },
  { week: 'W3', efficiency: 60, satisfaction: 70 },
  { week: 'W4', efficiency: 75, satisfaction: 80 },
  { week: 'W5', efficiency: 85, satisfaction: 90 },
  { week: 'W6', efficiency: 95, satisfaction: 95 }
];

const TimelineChart = () => {
  return (
    <div className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-6">
      <h3 className="text-xl font-bold mb-6 font-mono">Performance Timeline</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="week" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#000',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '0.5rem'
              }}
            />
            <Line
              type="monotone"
              dataKey="efficiency"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={{ fill: '#8B5CF6' }}
            />
            <Line
              type="monotone"
              dataKey="satisfaction"
              stroke="#60A5FA"
              strokeWidth={2}
              dot={{ fill: '#60A5FA' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TimelineChart;