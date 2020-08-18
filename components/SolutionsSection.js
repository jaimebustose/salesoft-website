import React from 'react';
import SolutionCard from './SolutionCard';
import SolutionAnimation from '../public/res/ecommerce_premium.svg';

export default function SolutionsSection() {
  const soluciones = [
    {
      nombreSolucion: 'Sitio Web básico',
      descripcion: 'Funciones básicas, landing page e información relevante a tu negocio y/o empresa, todo esto en tu espacio personal.',
      action: () => console.log('Solicitar'),
      solutionAnmiation: ''
    },
    {
      nombreSolucion: 'Sitio de reserva de horas',
      descripcion: 'Automatiza la solicitud de horas de tu negocio permitiendo así, evitar retrasos y preocupandote únicamente de realizar ventas.',
      action: () => console.log('Solicitar'),
      solutionAnmiation: ''
    },
    {
      nombreSolucion: 'Sitio E-commerce Premium',
      descripcion: 'Todos tus productos en un espacio personalizado e ideado para maximizar al máximo tus ventas.',
      action: () => console.log('Solicitar'),
      solutionAnmiation: ''
    },
    {
      nombreSolucion: 'Aplicación Web Delivery',
      descripcion: 'Amplia tus canales de venta y monitorea tus envíos de manera de automatizada, fidelizando clientes y maximizando ganancias.',
      action: () => console.log('Solicitar'),
      solutionAnmiation: ''
    }
  ]
  return (
    <section className="max-w-full min-h-screen flex flex-col text-center items-center mb-16 sm:mx-8 xl:mx-10">
      <h2 className="font-poppins font-medium text-3xl sm:text-5xl text-neutral-700 sm:mb-20 xl:mb-4">
        Soluciones
      </h2>
      <SolutionCard />
    </section>
  )
}
