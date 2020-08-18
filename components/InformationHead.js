import React from 'react';
import ContactHead from './ContactHead';

export default function InformationHead() {
  return (
    <div className='block text-white lg:w-1/2 lg:max-w-lg ml-auto xl:ml-32'>
      <h1 className='font-poppins text-4xl md:text-5xl mb-3 font-medium sm:whitespace-no-wrap'>
        Digitaliza tu StartUp
      </h1>
      <div className="max-w-full mx-auto lg:mx-0" style={{ width: 'max-content' }}>
        <p className='text-lg font-open whitespace-normal'>
          Busca la solución que se adecúe mejor a tus necesidades
        </p>
        <ContactHead />
      </div>
    </div>
  );
}
