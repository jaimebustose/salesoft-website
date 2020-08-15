import React from 'react';
import ContactHead from './ContactHead';

export default function InformationHead() {
  return (
    <div className='block text-white sm:w-1/2 sm:max-w-lg'>
      <h1 className='font-poppins text-3xl md:text-5xl mb-3'>
        Digitaliza tu StartUp
      </h1>
      <div className="max-w-full" style={{ width: 'max-content' }}>
        <p className='text-lg font-open whitespace-normal'>
          Busca la solución que se adecúe mejor a tus necesidades
        </p>
        <ContactHead />
      </div>
    </div>
  );
}
