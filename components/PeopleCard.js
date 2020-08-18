import React from 'react';

export default function PeopleCard({ nombre, profileImage, carrera, skills, index }) {
  return (
    <div className={`${index == 1 && 'sm:-mt-56'} max-w-xs mt-8 px-6 py-8 rounded-lg text-center bg-neutral-50`}>
      <img
        className='w-32 h-32 sm:w-40 sm:h-40 my-5 mx-auto rounded-full object-cover flex items-center justify-center'
        src={profileImage}
        alt='Profile'
      />
      <div className='px-6 py-4'>
        <div className='font-poppins text-xl sm:text-2xl font-medium text-neutral-700 mb-2'>
          {nombre}
        </div>
        <span className='font-open text-sm sm:text-base text-neutral-300 block'>
          {carrera}
        </span>
      </div>
      <div className='px-0 py-4'>
        {skills.map((skill, index) => (
          <span className={`${index < 2 && 'mr-2'} font-open inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-neutral-300`} key={index}>
          {skill}
        </span>
        ))}
      </div>
    </div>
  );
}
