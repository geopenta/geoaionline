import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud, Share2, Shield, Zap, Settings } from 'lucide-react';
import GradientText from '../ui/GradientText';

const features = [
  {
    icon: Database,
    title: 'Data Sources',
    items: ['PostgreSQL/PostGIS', 'MongoDB', 'Elasticsearch', 'Redis']
  },
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    items: ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean']
  },
  {
    icon: Share2,
    title: 'APIs & Services',
    items: ['REST APIs', 'GraphQL', 'WebSockets', 'gRPC']
  },
  {
    icon: Shield,
    title: 'Security',
    items: ['OAuth 2.0', 'API Keys', 'JWT', 'Rate Limiting']
  },
  {
    icon: Zap,
    title: 'Performance',
    items: ['Caching', 'Load Balancing', 'Auto-scaling', 'CDN']
  },
  {
    icon: Settings,
    title: 'Tools',
    items: ['CLI Tools', 'SDKs', 'Webhooks', 'Monitoring']
  }
];

const IntegrationFeatures = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-mono">
            <GradientText>Complete Integration Suite</GradientText>
          </h2>
          <p className="text-gray-400 font-mono">
            Everything you need to build powerful geospatial applications
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-8 hover:border-purple-500/50 transition-all"
          >
            <feature.icon className="w-8 h-8 text-purple-400 mb-6" />
            <h3 className="text-xl font-bold mb-4 font-mono">{feature.title}</h3>
            <ul className="space-y-2">
              {feature.items.map((item, i) => (
                <li key={i} className="text-gray-400 font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationFeatures;