import React from 'react';
import SolutionAnimation from '../public/res/ecommerce_premium.svg';

export default function SolutionCard() {
  return (
    <div className='solution-flex flex flex-col lg:flex-row my-auto xl:mt-24 items-center justify-center w-full xl:w-5/6'>
      <div className='flex-initial w-2/3 lg:text-left order-2 text-center mt-10 lg:mt-0'>
        <h2 className='font-poppins font-medium text-2xl sm:text-4xl text-neutral-700'>
          Sitio E-commerce Premium
        </h2>
        <p className='font-open text-base sm:text-xl text-neutral-300 my-4 lg:max-w-md'>
          Todos tus productos en un espacio personalizado e ideado para
          maximizar al máximo tus ventas.
        </p>
        <button className='font-open font-medium bg-neutralv-800 py-2 w-full lg:w-auto sm:px-20 lg:px-6 my-5 rounded-md text-white'>
          Solicitar
        </button>
      </div>
      <div className='flex w-2/3 justify-center mb-5 sm:mb-10 lg:mb-0 lg:justify-end lg:order-2'>
        <SolutionAnimation className='h-auto' />
      </div>
    </div>
  );
}
