import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="text-white sm:flex select-none">
      <div className='flex items-center justify-between px-4 lg:pl-8 py-4'>
        <div>
          <h1 className='font-quick text-2xl md:text-4xl sm:opacity-75 sm:hover:opacity-100 duration-200 cursor-pointer'>
            <span className='text-primary-600'>Scale</span>Soft
          </h1>
        </div>
        <div className="sm:hidden">
          <button
            type='button'
            className='block text-gray-500 hover:text-white focus:text-white focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
              <path
                fillRule='evenodd'
                d={`${
                  isOpen
                    ? 'M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                    : 'M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                }`}
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} px-2 pb-4 sm:p-0 sm:ml-auto sm:pr-1 lg:pr-6 font-open sm:flex sm:items-center`}>
        <a
          href='#'
          className='block px-2 py-1 sm:px-4 lg:px-6 text-sm font-normal sm:opacity-75 sm:hover:opacity-100 duration-200'
        >
          Nosotros
        </a>
        <a
          href='#'
          className='mt-1 sm:mt-0 block px-2 py-1 sm:px-4 lg:px-6 text-sm font-normal sm:opacity-75 sm:hover:opacity-100 duration-200'
        >
          Soluciones
        </a>
        <a
          href='#'
          className='mt-1 sm:mt-0 block px-2 py-1 sm:px-4 lg:px-6 text-sm font-normal sm:opacity-75 sm:hover:opacity-100 duration-200'
        >
          Precios
        </a>
        <a
          href='#'
          className='mt-1 sm:mt-0 block px-2 py-1 sm:px-4 lg:px-6 text-sm font-normal sm:opacity-75 sm:hover:opacity-100 duration-200'
        >
          Tecnologías
        </a>
        <a
          href='#'
          className='mt-1 sm:border-none sm:mt-0 block px-2 py-1 sm:px-4 lg:px-6 text-sm font-normal sm:opacity-75 sm:hover:opacity-100 duration-200'
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
