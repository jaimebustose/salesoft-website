import React from 'react';
import Header from './layout/Header';
import InformationHead from './InformationHead';

export default function FirstSection() {
  return (
    <div className='bg-primary-900 min-h-screen flex flex-col'>
      <Header />
      <div className='my-auto px-2 sm:pl-4 lg:pl-8'>
        <InformationHead />
      </div>
    </div>
  );
}
