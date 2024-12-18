import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ServiceFeature from './ServiceFeature';

interface ServiceMetricData {
  value: string;
  label: string;
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  metrics: ServiceMetricData[];
  delay?: number;
  path: string;
}

const bounceVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      type: "spring",
      stiffness: 50,
      damping: 15,
      mass: 1
    }
  }),
  hover: {
    y: -5,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  metrics,
  delay = 0,
  path
}: ServiceCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={bounceVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      custom={delay}
      viewport={{ once: true, margin: "-50px" }}
      className="group p-8 rounded-xl bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F] border border-purple-500/10 hover:bg-gradient-to-b hover:from-purple-900/20 hover:to-blue-900/20 transition-all duration-700 flex flex-col h-full"
    >
      <div className="w-12 h-12 rounded-full bg-purple-900/20 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500/30 group-hover:text-purple-300 transition-colors duration-700">
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-bold text-white mb-4 font-mono group-hover:text-purple-200 transition-colors duration-700 whitespace-nowrap">
        {title}
      </h3>

      <p className="text-gray-400 font-mono text-sm mb-8 group-hover:text-gray-300 transition-colors duration-700">
        {description}
      </p>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <ServiceFeature 
            key={index} 
            text={feature} 
            delay={delay + 0.3 + (index * 0.1)} 
          />
        ))}
      </div>

      <div className="mt-auto">
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-purple-500/10 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-mono mb-1 group-hover:opacity-90 transition-all duration-500">
                {metric.value}
              </p>
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider group-hover:text-gray-400 transition-colors duration-500">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <button 
          onClick={() => navigate(path)}
          className="flex items-center gap-2 text-purple-400 font-mono text-sm px-4 py-2 border border-purple-500/20 rounded-lg hover:bg-purple-500/10 transition-all duration-300 group-hover:text-purple-300"
        >
          _LEARN_MORE <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;