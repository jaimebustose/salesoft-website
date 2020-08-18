import React, { useState } from 'react';
import Header from './layout/Header';
import InformationHead from './InformationHead';
import PrincipalAnimation from '../public/res/principal-animation.svg';

export default function FirstSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='ss-information bg-primary-900 min-h-screen flex flex-col'>
      <Header isOpen={isOpen} onHandleIsOpen={handleIsOpen} />
      <div className='my-auto px-2 lg:pr-0 lg:pl-8 text-center lg:text-left lg:flex items-center justify-center'>
        <InformationHead />
        <div className='hidden lg:block ml-10 xl:ml-auto'>
          <PrincipalAnimation className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
