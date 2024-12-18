import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../../../components/ui/GradientText';
import StatItem from './StatItem';

interface Stat {
  value: string;
  label: string;
}

interface ServiceStatsProps {
  title: string;
  stats: Stat[];
}

const ServiceStats = ({ title, stats }: ServiceStatsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-12 text-center"
    >
      <h2 className="text-3xl font-bold mb-12 font-mono">
        <GradientText>{title}</GradientText>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            value={stat.value}
            label={stat.label}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceStats;