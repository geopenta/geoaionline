import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', roi: 100 },
  { month: 'Feb', roi: 140 },
  { month: 'Mar', roi: 180 },
  { month: 'Apr', roi: 240 },
  { month: 'May', roi: 300 },
  { month: 'Jun', roi: 380 }
];

const ROIChart = () => {
  return (
    <div className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-6">
      <h3 className="text-xl font-bold mb-6 font-mono">Return on Investment</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="roiGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#000',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '0.5rem'
              }}
            />
            <Area
              type="monotone"
              dataKey="roi"
              stroke="#8B5CF6"
              fillOpacity={1}
              fill="url(#roiGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ROIChart;