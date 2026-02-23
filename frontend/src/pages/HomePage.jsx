import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import WhyIDesignSection from '../components/sections/WhyIDesignSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ValuesSection from '../components/sections/ValuesSection';
import OtherWorksSection from '../components/sections/OtherWorksSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <OtherWorksSection />
        <AboutSection />
        <ExperienceSection />
        {/* <ValuesSection /> */}
        {/* <WhyIDesignSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

