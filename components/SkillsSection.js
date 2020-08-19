import React from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';
import DefaultElements from './DefaultElements';
import ExtraElements from './ExtraElements';

export default function SkillsSection() {
  return (
    <section className='ss-skills pt-4 flex flex-col h-10'>
      <div className='ss-slider my-6 flex' style={{ width: 'max-content' }}>
        <DefaultElements />
        <ExtraElements />
        <DefaultElements />
        <ExtraElements />
      </div>
    </section>
  );
}
