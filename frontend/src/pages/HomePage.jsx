import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import WhyIDesignSection from '../components/sections/WhyIDesignSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ValuesSection from '../components/sections/ValuesSection';
import BeyondWorkSection from '../components/sections/BeyondWorkSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />

        <ExperienceSection />

        {/* <ValuesSection /> */}
        <BeyondWorkSection />
        {/* <WhyIDesignSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
