import React from 'react';
import { motion } from 'framer-motion';
import { Map, Database, Globe, Cloud, Layout, Share2 } from 'lucide-react';

const platforms = [
  {
    icon: Map,
    name: 'ArcGIS',
    description: 'Full compatibility with ESRI ArcGIS platform'
  },
  {
    icon: Globe,
    name: 'Google Maps API',
    description: 'Seamless integration with Google Maps services'
  },
  {
    icon: Database,
    name: 'PostGIS',
    description: 'Advanced spatial database support'
  },
  {
    icon: Cloud,
    name: 'Cloud Services',
    description: 'AWS, Azure, and GCP integration'
  },
  {
    icon: Layout,
    name: 'QGIS',
    description: 'Open-source GIS compatibility'
  },
  {
    icon: Share2,
    name: 'REST APIs',
    description: 'Easy-to-use REST API endpoints'
  }
];

const PlatformGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 text-center font-mono">Supported Platforms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-6 hover:border-purple-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
              <platform.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
            </div>
            <h3 className="text-lg font-semibold mb-2 font-mono">{platform.name}</h3>
            <p className="text-gray-400 text-sm font-mono">{platform.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlatformGrid;