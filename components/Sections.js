import React from 'react';
import FirstSection from '../components/FirstSection';
import AboutSection from '../components/AboutSection';
import SolutionsSection from '../components/SolutionsSection';
import PriceSection from '../components/PriceSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/layout/Footer';

export default function Sections() {
  return (
    <>
      <FirstSection />
      <AboutSection />
      <SolutionsSection />
      <PriceSection />
      <SkillsSection />
      <Footer />
    </>
  );
}
