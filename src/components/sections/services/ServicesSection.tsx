import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../../ui/GradientText';
import ServiceCard from './ServiceCard';
import CombinedImpact from './CombinedImpact';
import { services } from './data';

const ServicesSection = () => {
  const servicePaths = {
    '_AI LEAD GENERATION': '/services/lead-generation',
    '_CUSTOMER SUPPORT AI': '/services/customer-support',
    '_CRM INTEGRATIONS': '/services/crm-integrations'
  };

  const captionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <div className="bg-black py-24 relative" id="services-section">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={captionVariants}
            className="text-4xl font-bold mb-6 font-mono flex items-center justify-center gap-2"
          >
            <span className="text-purple-400">&gt;_</span>
            <span className="text-white">Our</span>
            <GradientText className="inline-block">Services</GradientText>
          </motion.h2>
          
          <motion.p 
            variants={captionVariants}
            className="text-gray-400 font-mono text-lg max-w-2xl mx-auto"
          >
            Discover how our cutting-edge AI solutions can transform your business operations and drive growth.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              metrics={service.metrics}
              delay={0.2 * index}
              path={servicePaths[service.title]}
            />
          ))}
        </div>

        <CombinedImpact />
      </div>
    </div>
  );
};

export default ServicesSection;