import React from 'react';
import PeopleCard from './PeopleCard';
import LeftPattern from '../public/res/left-pattern.svg';

export default function AboutSection() {
  const personas = [
    {
      nombre: 'Manfred Engler H.',
      profileImage:
        'https://scalesoft.s3-sa-east-1.amazonaws.com/media/profile-1.png',
      carrera: 'Ing. Civil Informática',
      skills: ['#Backend', '#CI/CD', '#Docker'],
    },
    {
      nombre: 'Jaime Bustos E.',
      profileImage:
        'https://scalesoft.s3-sa-east-1.amazonaws.com/media/profile-2.jpg',
      carrera: 'Ing. Civil Informática',
      skills: ['#Front End', '#React', '#SCSS'],
    },
  ];
  return (
    <section className='ss-about min-h-0 xl:min-h-screen mb-10 md:mb-16 xl:mb-8'>
      <h2 className='text-center p-0 lg:text-left text-neutral-700 sm:pl-4 text-3xl sm:text-5xl font-poppins pt-16 font-medium lg:text-neutral-300 lg:pl-8'>
        <span className="lg:text-white">Personas </span>de confianza</h2>
      <div className='pt-4 sm:pt-40 xl:pt-64 w-full flex items-end'>
        <LeftPattern className='hidden lg:block ml-16' />
        <div className='flex-1 flex flex-col items-center justify-around sm:flex-row'>
          {personas.map((props, index) => (
            <PeopleCard {...props} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
