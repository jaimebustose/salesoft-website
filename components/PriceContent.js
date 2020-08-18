import React from 'react';

export default function PriceContent({ titulo, price, items, action, index }) {
  return (
    <div
      className={`${
        index < 3 && 'sm:border-neutral-100 sm:border-r'
      } ss-price-card bg-white mb-10 sm:my-6 flex-1 flex justify-center rounded p-6 mx-6 sm:mx-0`}
      style={{ minWidth: '16rem', minHeight: '400px' }}
    >
      <div className='ss-price-content flex flex-col items-center h-full'>
        <h2 className='text-xl text-neutral-700 text-center font-poppins font-medium'>
          {titulo}
        </h2>
        <span className='text-neutral-300 text-center my-auto font-open'>
          <span className='text-lg text-neutral-900'>{price} </span>clp
        </span>
        <ul className='ss-price-list font-open text-neutral-300 my-auto mb-8'>
          {items.map((item, index) => (
            <li className='p-1' key={index}>{item}</li>
          ))}
        </ul>
        <button
          type='button'
          className='w-full bg-transparent py-2 px-4 border border-primary-600 rounded-md text-primary-600'
          onClick={action}
          style={{ width: '160px' }}
        >
          Solicitar
        </button>
      </div>
    </div>
  );
}
