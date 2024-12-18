import { Users, Headphones, Database } from 'lucide-react';

export const services = [
  {
    icon: Users,
    title: '_AI LEAD GENERATION',
    description: 'Generate high-quality leads with cutting-edge AI algorithms designed to find, analyze, and engage your ideal audience.',
    features: [
      'Targeted Outreach with AI-driven insights',
      'Efficient Scaling to reach 100s daily',
      'Real-Time Analytics for ROI optimization'
    ],
    metrics: [
      { value: '45%', label: 'Increase in conversion' },
      { value: '35%', label: 'Reduced cost per lead' },
      { value: '3X', label: 'More qualified leads' }
    ]
  },
  {
    icon: Headphones,
    title: '_CUSTOMER SUPPORT AI',
    description: 'Deliver seamless, 24/7 customer support with intelligent automation that understands, resolves, and delights your customers.',
    features: [
      'Instant AI responses for 85% of queries',
      'Smart issue escalation system',
      'Personalized customer interactions'
    ],
    metrics: [
      { value: '70%', label: 'Faster response time' },
      { value: '500h', label: 'Saved per month' },
      { value: '92%', label: 'Customer satisfaction' }
    ]
  },
  {
    icon: Database,
    title: '_CRM INTEGRATIONS',
    description: 'Streamline your business processes with AI-powered CRM integrations that connect your data and tools for maximum efficiency.',
    features: [
      'Automated data entry & syncing',
      'Unified dashboard view',
      'Custom workflow automation'
    ],
    metrics: [
      { value: '25%', label: 'Team productivity boost' },
      { value: '60%', label: 'Faster implementation' },
      { value: '99.9%', label: 'Data accuracy' }
    ]
  }
];