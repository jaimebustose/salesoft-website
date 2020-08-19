import React from 'react';
import DefaultElements from './DefaultElements';
import ExtraElements from './ExtraElements';

export default function SkillsSection() {
  return (
    <section
      className='ss-skills my-4 flex flex-col h-10 overflow-hidden'
      style={{ height: 'min-content' }}
    >
      <div className='ss-slider my-6 flex' style={{ width: 'max-content' }}>
        <DefaultElements />
        <ExtraElements className='hidden sm:flex' />
        <DefaultElements />
        <ExtraElements className='hidden sm:flex' />
      </div>
      <div className='flex sm:hidden ss-slider-two my-6' style={{ width: 'max-content' }}>
        <ExtraElements className='flex' />
        <ExtraElements className='flex' />
      </div>
    </section>
  );
}
