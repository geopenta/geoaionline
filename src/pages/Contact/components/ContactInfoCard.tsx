import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ContactInfoProps {
  info: {
    icon: LucideIcon;
    title: string;
    content: string;
    description: string;
  };
  index: number;
}

const ContactInfoCard = ({ info, index }: ContactInfoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-6 hover:border-purple-500/50 transition-all text-center group"
    >
      <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 mx-auto text-purple-400 group-hover:text-purple-300 transition-colors">
        <info.icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold mb-2 font-mono">{info.title}</h3>
      <p className="text-purple-400 mb-2 font-mono">{info.content}</p>
      <p className="text-gray-400 text-sm font-mono">{info.description}</p>
    </motion.div>
  );
};

export default ContactInfoCard;