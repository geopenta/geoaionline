import { Globe2, Brain, Workflow, Map, LineChart, Compass } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Industry {
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Globe2,
    title: 'Geospatial Intelligence',
    description: 'Transform location data into actionable insights with AI-powered analysis'
  },
  {
    icon: Brain,
    title: 'Advanced ML Models',
    description: 'Custom machine learning models optimized for spatial data processing'
  },
  {
    icon: Workflow,
    title: 'Automated Workflows',
    description: 'Streamline complex geospatial operations with intelligent automation'
  },
  {
    icon: Map,
    title: 'Real-time Mapping',
    description: 'Dynamic visualization of spatial data with AI-enhanced insights'
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Forecast spatial trends and patterns with machine learning'
  },
  {
    icon: Compass,
    title: 'Location Intelligence',
    description: 'Make data-driven decisions based on geographic context'
  }
];

export const industries: Industry[] = [
  {
    title: 'Urban Planning',
    description: 'Optimize city development with AI-powered spatial analysis'
  },
  {
    title: 'Environmental Monitoring',
    description: 'Track and predict environmental changes with precision'
  },
  {
    title: 'Agriculture',
    description: 'Enhance crop yields through AI-driven field analysis'
  },
  {
    title: 'Transportation',
    description: 'Improve routing and logistics with intelligent spatial optimization'
  }
];