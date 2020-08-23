import React, { useEffect } from 'react';
import Link from 'next/link';
import FacebookAnimation from '../public/res/logos/facebook-brands.svg';
import InstagramAnimation from '../public/res/logos/instagram-brands.svg';
import LinkedinAnimation from '../public/res/logos/linkedin-brands.svg';
import WhatsAppAnimation from '../public/res/logos/whatsapp-brands.svg';
import Scroll from 'react-scroll';

export default function FooterContent() {
  useEffect(() => {
    () => {
      Scroll.Events.scrollEvent.register('begin', (to, element) => {
        console.log('begin', arguments);
      });
      Scroll.Events.scrollEvent.register('end', (to, element) => {
        console.log('end', arguments);
      });
    };
    return () => {
      Scroll.Events.scrollEvent.remove('begin');
      Scroll.Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <>
      <div className='bg-primary-900'>
        <div className='max-w-6xl lg:m-auto p-4 xl:p-0 text-gray-800 flex flex-wrap justify-center lg:justify-between'>
          <div className='flex duration-200 cursor-pointer my-auto items-baseline w-48'>
            <Link href='/'>
              <a className='font-quick text-4xl text-white '>
                <span className='text-primary-500'>Scale</span>Soft
              </a>
            </Link>
          </div>
          {/* <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Home
            </div>
            <a className="my-3 block" href="/#">
              Services <span className="text-teal-300 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Products <span className="text-teal-300 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              About Us <span className="text-teal-300 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Pricing <span className="text-teal-300 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Partners <span className="text-teal-300 text-xs p-1">New</span>
            </a>
          </div> */}
          {/* <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              User
            </div>
            <a className="my-3 block" href="/#">
              Sign in <span className="text-teal-300 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              New Account <span className="text-teal-300 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Demo <span className="text-teal-300 text-xs p-1">New</span>
            </a>
            <a className="my-3 block" href="/#">
              Career{" "}
              <span className="text-teal-300 text-xs p-1">We're hiring</span>
            </a>
            <a className="my-3 block" href="/#">
              Surveys <span className="text-teal-300 text-xs p-1">New</span>
            </a>
          </div> */}
          {/* <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Resources
            </div>
            <a className="my-3 block" href="/#">
              Documentation <span className="text-teal-300 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Tutorials <span className="text-teal-300 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Support <span className="text-teal-300 text-xs p-1">New</span>
            </a>
          </div> */}
          <div className='mx-auto lg:mr-0 flex flex-wrap justify-center'>
            <div className='p-5 w-56 '>
              <div className='text-xs font-poppins text-white uppercase font-medium '>
                Acerca de nosotros
              </div>
              <Scroll.Link
                spy={true}
                smooth={true}
                to={'soluciones'}
                duration={500}
                className='my-3 block font-open text-neutral-300 hover:text-neutral-200 cursor-pointer'
              >
                Nuestras soluciones{' '}
                <span className='text-teal-300 text-xs p-1'></span>
              </Scroll.Link>
              <a
                target='_blank'
                className='my-3 block font-open text-neutral-300 hover:text-neutral-200'
                href='https://github.com/ScaleSoftcl'
                rel='noopener noreferrer'
              >
                Proyectos{' '}
                <span className='text-teal-300 text-xs p-1'>Nuevo</span>
              </a>
              {/*<a
                className='my-3 block font-open text-neutral-300 hover:text-neutral-200'
                href='/#'
              >
                Analítica <span className='text-teal-300 text-xs p-1'></span>
              </a>
              <a
                className='my-3 block font-open text-neutral-300 hover:text-neutral-200'
                href='/#'
              >
                Móvil <span className='text-teal-300 text-xs p-1'></span>
              </a>*/}
            </div>
            <div className='p-5 w-56'>
              <div className='text-xs font-poppins text-white uppercase font-medium'>
                Información
              </div>
              <a
                target='_blank'
                className='my-3 block font-open text-neutral-300 hover:text-neutral-200'
                href='https://jaimebustose.gitlab.io/portafolio'
                rel='noopener noreferrer'
              >
                Portafolio Jaime
                <span className='text-teal-300 text-xs p-1'></span>
              </a>
              <a
                target='_blank'
                className='my-3 block font-open text-neutral-300 hover:text-neutral-200'
                href='https://manfredengler.github.io/'
                rel='noopener noreferrer'
              >
                Portafolio Manfred
                <span className='text-teal-300 text-xs p-1'></span>
              </a>
            </div>
            <div className='p-5 w-56 '>
              <div className='text-xs font-poppins text-white uppercase font-medium'>
                Contacto
              </div>
              <span className='my-3 block font-open text-neutral-300 hover:text-neutral-200 cursor-pointer'>
                Sol y Mar #530, Viña del Mar, Chile{' '}
                <span className='text-teal-300 text-xs p-1'></span>
              </span>
              <Link
                href={{
                  pathname: '/contacto',
                  query: { asunto: '[Consulta]' },
                }}
              >
                <a className='my-3 block font-open text-neutral-300 hover:text-neutral-200'>
                  Scalesoft@gmail.com
                  <span className='text-teal-300 text-xs p-1'></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-primary-900 pt-2'>
        <div
          className='flex pb-5 px-3 m-auto pt-5 border-t border-neutralv-500 text-sm flex-col
      md:flex-row max-w-6xl items-center'
        >
          <div className='text-center text-gray-500'>
            © Copyright 2020. Todos los derechos reservados.
          </div>
          <div className='flex-auto flex-row-reverse mt-2 sm:mt-0 flex text-gray-500'>
            <a
              href='https://wa.me/+56963000049'
              className='w-6 mx-1 sm:hover:text-gray-400 duration-200'
            >
              <WhatsAppAnimation />
            </a>
            <a
              target='_blank'
              href='https://www.instagram.com/scalesoftcl/'
              className='w-6 mx-1 sm:hover:text-gray-400 duration-200'
            >
              <InstagramAnimation />
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/company/scalesoftcl'
              className='w-6 mx-1 sm:hover:text-gray-400 duration-200'
            >
              <LinkedinAnimation />
            </a>
            <a
              target='_blank'
              href='https://www.facebook.com/ScaleSoft-112750400525941'
              className='w-6 mx-1 sm:hover:text-gray-400 duration-200'
            >
              <FacebookAnimation />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
