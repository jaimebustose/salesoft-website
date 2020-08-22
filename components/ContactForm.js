import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import ArrowLeft from '../public/res/arrow-left.svg';
import { useRouter } from 'next/router';
import CheckAnimation from '../public/res/check.svg';
import ErrorAnimation from '../public/res/error.svg';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {
  const router = useRouter();
  const recaptchaRef = useRef(null);
  const { email, asunto } = router.query;
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const recaptchaValue = recaptchaRef.current.getValue();
  };

  return (
    <div className='flex min-h-screen bg-gray-100 lg:bg-white'>
      <h1 className='sr-only'>Contacto</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='max-w-screen-xl my-auto px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg lg:shadow-lg'
      >
        <div className='flex flex-col justify-between'>
          <div className='relative'>
            <Link href='/'>
              <a className='absolute flex text-gray-700 fill-current sm:hover:text-gray-900 top-0 -mt-8 lg:-mt-6 duration-200'>
                <ArrowLeft
                  className='mr-2 align-baseline'
                  style={{ width: '14px', height: '24px' }}
                />
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
          <div className='w-full flex-col'>
            <div className='w-full'>
              <span className='uppercase text-sm text-gray-600 font-bold'>
                Nombre
              </span>
              <div className='relative'>
                <input
                  className='w-full bg-gray-300 text-gray-900 mt-2 px-4 py-2 block appearance-none rounded-md focus:outline-none  leading-normal'
                  type='text'
                  name='nombre'
                  placeholder='Nombre Completo'
                  ref={register({ required: true })}
                />
                {errors.nombre && (
                  <span className='ss-error-container absolute right-0 mr-3 fill-current text-red-600'>
                    <ErrorAnimation className='ss-error-animation' />
                  </span>
                )}
              </div>
            </div>
            <div className='mt-8 grid gap-4 grid-cols-2'>
              <div className='w-full'>
                <span className='uppercase text-sm text-gray-600 font-bold'>
                  Asunto
                </span>
                <div className='relative'>
                  <input
                    className='w-full  bg-gray-300 text-gray-900 mt-2 px-4 py-2 block appearance-none rounded-md focus:outline-none  leading-normal'
                    type='text'
                    name='asunto'
                    defaultValue={`${asunto ? asunto : '[Consulta]'}`}
                    placeholder='[Asunto]'
                    ref={register({ required: true })}
                  />
                  {errors.asunto && (
                    <span className='ss-error-container absolute right-0 mr-3 fill-current text-red-600'>
                      <ErrorAnimation className='ss-error-animation' />
                    </span>
                  )}
                </div>
              </div>
              <div className='w-full'>
                <span className='uppercase text-sm text-gray-600 font-bold'>
                  Email
                </span>
                <div className='relative'>
                  <input
                    className='w-full bg-gray-300 text-gray-900 mt-2 px-4 py-2 block appearance-none rounded-md focus:outline-none leading-normal'
                    type='email'
                    defaultValue={email}
                    name='email'
                    placeholder='usuario@mail.com'
                    ref={register({ required: true })}
                  />
                  {errors.email && (
                    <span className='ss-error-container absolute right-0 mr-3 fill-current text-red-600'>
                      <ErrorAnimation className='ss-error-animation' />
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <span className='uppercase text-sm text-gray-600 font-bold'>
                Mensaje
              </span>
              <div className='relative'>
                <textarea
                  className={`${
                    errors.mensaje && 'border-red-600 border'
                  } w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none resize-none`}
                  name='mensaje'
                  ref={register({
                    required: true,
                    minLength: 1,
                    maxLength: 240,
                  })}
                />
                {watch('mensaje') && (
                  <span className='absolute bottom-0 right-0 m-4 text-gray-700'>
                    <span>{watch('mensaje').length}/</span>
                    <span>240</span>
                  </span>
                )}
              </div>
            </div>
            <div className='my-4 ml-auto' style={{ width: 'max-content' }}>
              {
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey='6LeTO8IZAAAAALCFlhlM7cKIQZSBAZamN4SfoGsg'
                  onChange={(value) => console.log('Captcha: ', value)}
                />
              }
            </div>
            <div className='mt-4'>
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
