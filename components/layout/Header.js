import React, { useEffect } from 'react';
import Link from 'next/link';
import Scroll from 'react-scroll';

export default function Header({ isOpen, onHandleIsOpen }) {

  useEffect(() => {
    () => {
      Scroll.Events.scrollEvent.register('begin', (to, element) => {
        console.log('begin', arguments);
      });
      Scroll.Events.scrollEvent.register('end', (to, element) => {
        console.log('end', arguments);
      })
    }
    return () => {
      Scroll.Events.scrollEvent.remove('begin');
      Scroll.Events.scrollEvent.remove('end');
    }
  }, [])

  return (
    <header
      className={`${
        isOpen && 'bg-neutralv-900'
      } text-white md:flex select-none md:bg-primary-900 w-full`}
    >
      <h1 className='sr-only'>ScaleSoft - digitaliza tu StartUp y alcanza el siguiente nivel</h1>
      <p className='sr-only'>En ScaleSoft.cl estamos interesados en entregar herramientas profesionales a empresas en fase de crecimiento</p>
      <div className='flex items-center justify-between px-4 lg:pl-8 py-4'>
        <div>
          <h2 className='font-quick text-2xl md:text-4xl duration-200 cursor-pointer'>
            <span className='text-primary-600'>Scale</span>Soft
          </h2>
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
        <Scroll.Link
          spy={true}
          smooth={true}
          to={'about'}
          duration={500}
          className='block cursor-pointer px-2 py-1 sm:px-4 lg:px-6 text-sm font-normal sm:opacity-75 sm:hover:opacity-100 duration-200'
        >
          Nosotros
        </Scroll.Link>
        <Scroll.Link
          spy={true}
          smooth={true}
          to={'soluciones'}
          duration={500}
          className='mt-1 sm:mt-0 block cursor-pointer px-2 py-1 sm:px-4 lg:px-6 text-sm font-normal sm:opacity-75 sm:hover:opacity-100 duration-200'
        >
          Soluciones
        </Scroll.Link>
        <Scroll.Link
          spy={true}
          smooth={true}
          to={'precios'}
          duration={500}
          className='mt-1 sm:mt-0 block cursor-pointer px-2 py-1 sm:px-4 lg:px-6 text-sm font-normal sm:opacity-75 sm:hover:opacity-100 duration-200'
        >
          Precios
        </Scroll.Link>
        <Scroll.Link
          spy={true}
          smooth={true}
          to={'tecnologias'}
          duration={500}
          className='mt-1 sm:mt-0 block cursor-pointer px-2 py-1 sm:px-4 lg:px-6 text-sm font-normal sm:opacity-75 sm:hover:opacity-100 duration-200'
        >
          Tecnologías
        </Scroll.Link>
        <Link href='/contacto'>
          <a className='mt-1 sm:border-none sm:mt-0 block cursor-pointer px-2 py-1 sm:px-4 lg:px-6 text-sm font-normal sm:opacity-75 sm:hover:opacity-100 duration-200'>
            Contacto
          </a>
        </Link>
      </div>
    </header>
  );
}
