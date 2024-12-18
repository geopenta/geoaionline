import React from 'react';
import { Users, Clock, Star, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReviewMetric from './ReviewMetric';
import ReviewCard from './ReviewCard';
import GradientText from '../../ui/GradientText';
import Button from '../../ui/Button';

const metrics = [
  {
    icon: Users,
    value: '500+',
    label: 'Happy Clients'
  },
  {
    icon: Clock,
    value: '10,000+',
    label: 'Hours Saved'
  },
  {
    icon: Star,
    value: '95%',
    label: 'Customer Satisfaction'
  },
  {
    icon: TrendingUp,
    value: '3x',
    label: 'Average ROI'
  }
];

const testimonials = [
  {
    quote: "GEO.AI has transformed how we handle customer support. It's like having an extra team working 24/7.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp"
  },
  {
    quote: "The automation capabilities have saved us countless hours and improved our customer satisfaction scores.",
    author: "Michael Chen",
    role: "Operations Director, CloudScale"
  }
];

const ReviewsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black py-24 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 font-mono flex items-center justify-center gap-2">
            <span className="text-purple-400">&gt;_</span>
            <span className="text-white">Our</span>
            <GradientText>Results</GradientText>
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <ReviewMetric
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
              delay={0.2 * index}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <ReviewCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              delay={0.2 * index}
            />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="font-mono uppercase"
            onClick={() => navigate('/analytics')}
          >
            View Detailed Analytics
          </Button>
        </div>

        <div className="text-center pt-8 border-t border-purple-500/10 mt-16">
          <p className="text-purple-400/70 text-sm font-mono italic hover:text-purple-400 transition-colors duration-300 whitespace-nowrap">
            This site was created with AI in 10 minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;