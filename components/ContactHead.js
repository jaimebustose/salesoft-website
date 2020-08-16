import React from 'react';

export default function ContactHead() {
  return (
    <div className='rounded mt-8 font-open flex w-11/12 mx-auto sm:mx-0 sm:w-full'>
      <input
        type='text'
        className='w-5/6 bg-neutralv-900 focus:outline-none rounded-l-md py-2 px-4 block appearance-none leading-normal placeholder-white'
        placeholder="Correo electrónico"
      />
      <button className="ml-1 bg-neutralv-900 py-2 px-4 rounded-r-md focus:outline-none">
        Contáctanos
      </button>
    </div>
  );
}
