// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import LeadersSection from './components/LeadersSection';
import PropertiesSection from './components/PropertiesSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import PropertyInfo from './components/PropertyInfo';
import { ProjectsGallerySection } from './components/ProjectsGallery';
import CtaSection from './components/CtaSection';

const HomePage: React.FC = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <AboutSection />
      <LeadersSection />
      <PropertiesSection />
      <ProjectsGallerySection />
      <ServicesSection />
      <CtaSection />
    </main>
    <Footer />
    <FloatingActions />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
