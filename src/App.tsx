import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OnboardingForm from './pages/OnboardingForm';
import Analytics from './pages/Analytics';
import Integration from './pages/Integration';
import AILeadGeneration from './pages/services/AILeadGeneration';
import CustomerSupport from './pages/services/CustomerSupport';
import CRMIntegrations from './pages/services/CRMIntegrations';
import Contact from './pages/Contact';

// Lazy load blog-related components
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/Blog/BlogPost'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mb-4"></div>
      <p className="text-gray-400 font-mono">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<OnboardingForm />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/services/lead-generation" element={<AILeadGeneration />} />
        <Route path="/services/customer-support" element={<CustomerSupport />} />
        <Route path="/services/crm-integrations" element={<CRMIntegrations />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Wrap blog routes in Suspense */}
        <Route path="/blog" element={
          <Suspense fallback={<LoadingFallback />}>
            <Blog />
          </Suspense>
        } />
        <Route path="/blog/:id" element={
          <Suspense fallback={<LoadingFallback />}>
            <BlogPost />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;