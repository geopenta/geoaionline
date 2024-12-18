import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GridBackground from '../components/ui/GridBackground';
import PerformanceMetrics from '../components/analytics/PerformanceMetrics';
import ROIChart from '../components/analytics/ROIChart';
import TimelineChart from '../components/analytics/TimelineChart';
import ComparisonChart from '../components/analytics/ComparisonChart';
import GradientText from '../components/ui/GradientText';
import NavButton from '../components/ui/NavButton';

const Analytics = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative">
      <GridBackground />
      
      <div className="relative z-10">
        {/* Navigation */}
        <div className="fixed top-8 left-8">
          <NavButton icon={ArrowLeft} onClick={() => navigate('/')}>
            Back to Home
          </NavButton>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4 font-mono">
              <GradientText>Analytics Dashboard</GradientText>
            </h1>
            <p className="text-gray-400 font-mono">
              Discover how GEO.AI transforms business performance
            </p>
          </motion.div>

          {/* Performance Metrics */}
          <div className="mb-12">
            <PerformanceMetrics />
          </div>

          {/* Charts Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ROIChart />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TimelineChart />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <ComparisonChart />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;