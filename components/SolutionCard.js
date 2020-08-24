import React from 'react';

export default function SolutionCard({
  index,
  nombreSolucion,
  descripcion,
  action,
  solutionAnimation,
}) {
  return (
    <div className='ss-section-content solution-flex flex flex-col lg:flex-row lg:my-auto my-24 xl:mt-24 items-center justify-center w-full xl:w-5/6 focus:outline-none'>
      <div className='flex-initial w-2/3 lg:text-left order-2 text-center mt-10 lg:mt-0'>
        <h3 className='font-poppins font-medium text-2xl sm:text-4xl text-neutral-700'>
          {nombreSolucion}
        </h3>
        <p className='font-open text-base sm:text-xl text-neutral-300 my-4 lg:max-w-md'>
          {descripcion}
        </p>
        <button
          className='font-open font-medium bg-neutralv-800 py-2 w-full lg:w-auto sm:px-20 lg:px-6 my-5 rounded-md text-white focus:outline-none'
          onClick={action}
        >
          Solicitar
        </button>
      </div>
      <div className='flex w-2/3 justify-center mb-5 sm:mb-10 lg:mb-0 lg:justify-end lg:order-2'>
        {solutionAnimation}
      </div>
    </div>
  );
}
