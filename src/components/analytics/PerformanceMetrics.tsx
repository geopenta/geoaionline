import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, DollarSign } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    label: 'Efficiency Increase',
    value: '45%',
    color: 'from-purple-500 to-blue-500'
  },
  {
    icon: Clock,
    label: 'Time Saved',
    value: '120h',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    label: 'Customer Satisfaction',
    value: '95%',
    color: 'from-cyan-500 to-green-500'
  },
  {
    icon: DollarSign,
    label: 'Cost Reduction',
    value: '35%',
    color: 'from-green-500 to-emerald-500'
  }
];

const PerformanceMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-6"
        >
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${metric.color} bg-opacity-10 flex items-center justify-center mb-4`}>
            <metric.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold font-mono mb-2">{metric.value}</h3>
          <p className="text-gray-400 text-sm font-mono">{metric.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default PerformanceMetrics;