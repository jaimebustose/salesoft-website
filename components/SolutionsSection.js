import React from 'react';
import SolutionCard from './SolutionCard';
import BasicoAnimation from '../public/res/web-basico.svg';
import ReservaAnimation from '../public/res/reserva-de-horas.svg';
import EcommerceAnimation from '../public/res/ecommerce-premium.svg';
import DeliveryAnimation from '../public/res/delivery-web-app.svg';
import { useRouter } from 'next/router';

export default function SolutionsSection() {
  const router = useRouter();
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
      solutionAnimation: <BasicoAnimation />,
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
      solutionAnimation: <ReservaAnimation />,
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
      solutionAnimation: <EcommerceAnimation />,
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
      solutionAnimation: <DeliveryAnimation />,
    },
  ];
  return (
    <section className='ss-section-content max-w-full min-h-screen flex flex-col text-center items-center mb-16 sm:mx-8 xl:mx-10'>
      <h2 className='font-poppins font-medium text-3xl sm:text-5xl text-neutral-700 sm:mb-20 xl:mb-4'>
        Soluciones
      </h2>
      <SolutionCard {...soluciones[0]} />
    </section>
  );
}
