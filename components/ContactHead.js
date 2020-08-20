import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function ContactHead() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => router.push({pathname: '/contacto', query: {email: data.email}});
  const router = useRouter();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='rounded mt-8 font-open flex w-11/12 mx-auto sm:mx-0 sm:w-full'>
        <input
          type='email'
          name='email'
          className='w-5/6 bg-neutralv-900 focus:outline-none rounded-l-md py-2 px-4 block appearance-none leading-normal placeholder-white'
          placeholder='Correo electrónico'
          ref={register({ required: true })}
        />
        <button
          type='submit'
          className='ml-1 bg-neutralv-900 py-2 px-4 rounded-r-md focus:outline-none'
        >
          Contáctanos
        </button>
      </div>
    </form>
  );
}
