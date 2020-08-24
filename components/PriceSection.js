import React from 'react';
import PriceContent from './PriceContent';
import { useRouter } from 'next/router';

export default function PriceSection() {
  const router = useRouter();
  const precios = [
    {
      titulo: 'Sitio Web Básico*',
      price: '$300.000',
      items: ['React', 'Docker', 'Base de Datos', 'Diseño Básico', 'Boostrap'],
      action: () =>
        router.push({
          pathname: '/contacto',
          query: { asunto: '[Sitio Web Básico]' },
        }),
    },
    {
      titulo: 'Sitio de reserva de horas*',
      price: '$400.000',
      items: [
        'React',
        'Docker',
        'Base de Datos',
        'Diseño Básico',
        'Tailwind CSS',
      ],
      action: () =>
        router.push({
          pathname: '/contacto',
          query: { asunto: '[Sitio de reserva de horas]' },
        }),
    },
    {
      titulo: 'Sitio E-commerce Premium*',
      price: '$600.000',
      items: [
        'React',
        'Docker',
        'Base de Datos',
        'Almacenamiento Cloud',
        'Tailwind CSS',
      ],
      action: () =>
        router.push({
          pathname: '/contacto',
          query: { asunto: '[Sitio E-commerce Premium]' },
        }),
    },
    {
      titulo: 'Aplicación Web Delivery*',
      price: '$800.000',
      items: [
        'React',
        'Docker',
        'Base de Datos',
        'Estado del pedido',
        'Tailwind CSS',
      ],
      action: () =>
        router.push({
          pathname: '/contacto',
          query: { asunto: '[Aplicación Web Delivery]' },
        }),
    },
  ];
  return (
    <section className='min-h-screen bg-neutral-100 flex flex-col'>
      <h3 className='block sm:hidden mx-auto py-8 font-poppins font-medium text-3xl text-neutral-700'>
        Precios
      </h3>
      <div className='ss-section-content ss-price-flex flex flex-col w-5/6 sm:my-32 mx-auto sm:bg-white sm:border-t-4 rounded sm:border-primary-600'>
        <h3 className='hidden sm:block mx-auto py-8 font-poppins font-medium text-2xl sm:text-4xl text-neutral-700'>
          Precios
        </h3>
        <div className='flex flex-wrap min-w-full flex-1'>
          {precios.map((props, index) => (
            <PriceContent {...props} key={index} index={index} />
          ))}
        </div>
        <div className='mx-auto pb-4 sm:ml-auto sm:mr-0 sm:p-4'>
          <small className='text-neutral-300'>
            * Todos nuestros productos incluyen un sitio administrativo básico,
            y poseen características que les permiten ser escalables
          </small>
        </div>
      </div>
    </section>
  );
}
