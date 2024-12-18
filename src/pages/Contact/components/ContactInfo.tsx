import React from 'react';
import { Mail, MessageSquare, Clock, MapPin } from 'lucide-react';
import ContactInfoCard from './ContactInfoCard';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'info@geo-ai.online',
    description: 'Send us an email anytime'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    content: '24/7 Support',
    description: 'Get instant responses from our AI'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon-Fri: 9AM-6PM EET',
    description: 'For human support assistance'
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Athens, Greece',
    description: 'Global services, local presence'
  }
];

const ContactInfo = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {contactInfo.map((info, index) => (
        <ContactInfoCard key={index} info={info} index={index} />
      ))}
    </div>
  );
};

export default ContactInfo;