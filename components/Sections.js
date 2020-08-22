import React, { useEffect } from 'react';
import FirstSection from '../components/FirstSection';
import AboutSection from '../components/AboutSection';
import SolutionsSection from '../components/SolutionsSection';
import PriceSection from '../components/PriceSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/layout/Footer';
import Scroll from 'react-scroll';

export default function Sections() {
  return (
    <>
      <FirstSection />
      <Scroll.Element name='about'>
        <AboutSection />
      </Scroll.Element>
      <Scroll.Element name='soluciones'>
        <SolutionsSection />
      </Scroll.Element>
      <Scroll.Element name='precios'>
        <PriceSection />
      </Scroll.Element>
      <Scroll.Element name='tecnologias'>
        <SkillsSection />
      </Scroll.Element>
      <Footer />
    </>
  );
}
