import React from 'react';

export default function Header({ isOpen, onHandleIsOpen }) {
  return (
    <header
      className={`${
        isOpen && 'bg-neutralv-900'
      } text-white md:flex select-none md:bg-primary-900 w-full`}
    >
      <div className='flex items-center justify-between px-4 lg:pl-8 py-4'>
        <div>
          <h1 className='font-quick text-2xl md:text-4xl duration-200 cursor-pointer'>
            <span className='text-primary-600'>Scale</span>Soft
          </h1>
        </div>
        <div className='md:hidden'>
          <button
            type='button'
            className='block text-gray-500 hover:text-white focus:text-white focus:outline-none'
            onClick={() => onHandleIsOpen()}
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
      <div
        className={`${
          isOpen ? 'block bg-neutralv-900' : 'hidden'
        } px-2 pb-4 md:p-0 md:ml-auto md:pr-1 lg:pr-6 font-open md:flex md:items-center absolute md:relative w-full md:w-auto md:bg-primary-900`}
      >
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
