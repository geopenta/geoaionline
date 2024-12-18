import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import GradientText from '../ui/GradientText';

const codeExample = `// Initialize GEO.AI client
const geoai = new GeoAI({
  apiKey: process.env.GEOAI_API_KEY
});

// Connect to your data source
await geoai.connect({
  type: 'postgresql',
  url: process.env.DATABASE_URL
});

// Start processing geospatial data
const result = await geoai.analyze({
  dataset: 'urban_density',
  location: { lat: 40.7128, lng: -74.0060 },
  radius: '5km'
});`;

const IntegrationDemo = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-mono">
            <GradientText>Simple to Implement</GradientText>
          </h2>
          <p className="text-gray-400 font-mono">
            Get started with just a few lines of code
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative group max-w-3xl mx-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
        <div className="relative bg-black/80 backdrop-blur-xl rounded-xl border border-purple-500/20 overflow-hidden transition-all duration-500 group-hover:border-purple-500/50">
          {/* Header */}
          <div className="flex items-center gap-3 px-6 py-3 border-b border-purple-500/20">
            <Terminal className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-mono text-purple-400">Integration Example</span>
          </div>
          
          {/* Code */}
          <pre className="p-6 text-sm font-mono text-gray-300 overflow-x-auto">
            <code>{codeExample}</code>
          </pre>
        </div>
      </motion.div>
    </div>
  );
};

export default IntegrationDemo;