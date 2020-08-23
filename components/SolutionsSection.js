import React, { useState, useEffect } from 'react';
import SolutionCard from './SolutionCard';
import BasicoAnimation from '../public/res/web-basico.svg';
import ReservaAnimation from '../public/res/reserva-de-horas.svg';
import EcommerceAnimation from '../public/res/ecommerce-premium.svg';
import DeliveryAnimation from '../public/res/delivery-web-app.svg';
import HorizontalScroll from './horizontal-scroll/HorizontalScroll';
import { useRouter } from 'next/router';

export default function SolutionsSection() {
  const router = useRouter();
  const [width, setWidth] = useState(0);

  const soluciones = [
    {
      nombreSolucion: 'Sitio Web básico',
      descripcion:
        'Funciones básicas, landing page e información relevante a tu negocio y/o empresa, todo esto en tu espacio personal.',
      action: () =>
        router.push({
          pathname: '/contacto',
          query: { asunto: '[Sitio Web básico]' },
        }),
      solutionAnimation: <BasicoAnimation className='h-auto' />,
    },
    {
      nombreSolucion: 'Sitio de reserva de horas',
      descripcion:
        'Automatiza la solicitud de horas de tu negocio permitiendo así, evitar retrasos y preocupandote únicamente de realizar ventas.',
      action: () =>
        router.push({
          pathname: '/contacto',
          query: { asunto: '[Sitio de reserva de horas]' },
        }),
      solutionAnimation: <ReservaAnimation className='h-auto' />,
    },
    {
      nombreSolucion: 'Sitio E-commerce Premium',
      descripcion:
        'Todos tus productos en un espacio personalizado e ideado para maximizar al máximo tus ventas.',
      action: () =>
        router.push({
          pathname: '/contacto',
          query: { asunto: '[Sitio E-commerce Premium]' },
        }),
      solutionAnimation: <EcommerceAnimation className='h-auto' />,
    },
    {
      nombreSolucion: 'Aplicación Web Delivery',
      descripcion:
        'Amplia tus canales de venta y monitorea tus envíos de manera de automatizada, fidelizando clientes y maximizando ganancias.',
      action: () =>
        router.push({
          pathname: '/contacto',
          query: { asunto: '[Sitio E-commerce Premium]' },
        }),
      solutionAnimation: <DeliveryAnimation className='h-auto' />,
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefinied') {
      setWidth(window.screen.height);
    }
  }, []);

  return (
    <section className='ss-section-content min-h-screen flex flex-col text-center items-center mb-16'>
      <h2 className='mt-4 font-poppins font-medium text-3xl sm:text-5xl text-neutral-700 mb-12 sm:mb-20 xl:mb-12 sm:mx-8 xl:mx-10'>
        Soluciones
      </h2>
      {width > 1024 ? (
        <HorizontalScroll>
          <div className='flex items-center flex-no-wrap flex-start min-h-screen'>
            {soluciones.map((props, index) => (
              <div
                className='w-screen flex flex-col text-center items-center sm:mx-8 xl:mx-10'
                key={`solution-${index}`}
              >
                <SolutionCard {...props} index={index} />
              </div>
            ))}
          </div>
        </HorizontalScroll>
      ) : (
        soluciones.map((props, index) => (
          <SolutionCard {...props} key={`solution-${index}`} index={index} />
        ))
      )}
    </section>
  );
}
