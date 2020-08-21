import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import ArrowLeft from '../public/res/arrow-left.svg';
import { useRouter } from 'next/router';

export default function ContactForm() {
  const router = useRouter();
  const { email, asunto } = router.query;
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='flex min-h-screen bg-gray-100 lg:bg-white'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='max-w-screen-xl my-auto px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg lg:shadow-lg'
      >
        <div className='flex flex-col justify-between'>
          <div className='relative'>
            <Link href='/'>
              <a className='absolute flex text-gray-700 fill-current sm:hover:text-gray-900 top-0 -mt-8 lg:-mt-6 duration-200'>
                <ArrowLeft className='h-auto mr-2' style={{ width: '14' }} />
                Volver
              </a>
            </Link>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
              ¿Tienes dudas? ¡Nosotros te ayudamos!
            </h2>
            <div className='text-gray-700 mt-8'>
              ¡Hazla corta! envianos un <b>e-mail</b> y te daremos respuesta de
              inmediato.
            </div>
          </div>
        </div>
        <div className='text-left'>
          <div className=''>
            <div>
              <span className='uppercase text-sm text-gray-600 font-bold'>
                Nombre
              </span>
              <input
                className='w-full bg-gray-300 text-gray-900 mt-2 px-4 py-2 block appearance-none rounded-md focus:outline-none  leading-normal'
                type='text'
                name='nombre'
                placeholder='Nombre Completo'
                ref={register({ required: true })}
              />
            </div>
            <div className='mt-8 grid gap-4 grid-cols-2'>
              <div className='w-full'>
                <span className='uppercase text-sm text-gray-600 font-bold'>
                  Asunto
                </span>
                <input
                  className='w-full  bg-gray-300 text-gray-900 mt-2 px-4 py-2 block appearance-none rounded-md focus:outline-none  leading-normal'
                  type='text'
                  name='asunto'
                  defaultValue={`${asunto ? asunto : '[Consulta]'}`}
                  placeholder='[Asunto]'
                  ref={register({ required: true })}
                />
              </div>
              <div className='w-full'>
                <span className='uppercase text-sm text-gray-600 font-bold'>
                  Email
                </span>
                <input
                  className='w-full bg-gray-300 text-gray-900 mt-2 px-4 py-2 block appearance-none rounded-md focus:outline-none leading-normal'
                  type='email'
                  defaultValue={email}
                  name='email'
                  placeholder='usuario@mail.com'
                  ref={register({ required: true })}
                />
              </div>
            </div>
            <div className='mt-8'>
              <span className='uppercase text-sm text-gray-600 font-bold'>
                Mensaje
              </span>
              <textarea
                className='w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none resize-none'
                name='mensaje'
                ref={register({
                  required: true,
                  minLength: 20,
                  maxLength: 240,
                })}
              ></textarea>
            </div>
            <div className='mt-8'>
              <button
                type='submit'
                className='uppercase text-sm font-bold tracking-wide bg-neutralv-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none'
              >
                Enviar mensaje
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
