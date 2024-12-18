import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/sections/hero/HeroSection';
import WhySection from '../components/sections/why/WhySection';
import ServicesSection from '../components/sections/services/ServicesSection';
import ReviewsSection from '../components/sections/reviews/ReviewsSection';
import Footer from '../components/Footer';
import GridBackground from '../components/ui/GridBackground';
import StartNowButton from '../components/ui/StartNowButton';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a scrollTo parameter in the URL
    const searchParams = new URLSearchParams(location.search);
    const scrollTo = searchParams.get('scrollTo');

    if (scrollTo === 'services') {
      // Find the services section and scroll to it
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (!scrollTo) {
      // If no scrollTo parameter, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <GridBackground />
      <StartNowButton />
      <div className="relative z-10">
        <HeroSection />
        <WhySection />
        <ServicesSection />
        <ReviewsSection />
        <Footer />
      </div>
    </div>
  );
}

export default Home;