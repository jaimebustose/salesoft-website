import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import ArrowLeft from '../public/res/arrow-left.svg';
import { useRouter } from 'next/router';
import CheckAnimation from '../public/res/check.svg';
import ErrorAnimation from '../public/res/error.svg';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';

const monthObj = {
  1: 'Enero',
  2: 'Febrero',
  3: 'Marzo',
  4: 'Abril',
  5: 'Mayo',
  6: 'Junio',
  7: 'Julio',
  8: 'Agosto',
  9: 'Septiembre',
  10: 'Octubre',
  11: 'Noviembre',
  12: 'Diciembre',
};

export default function ContactForm() {
  // EmailJS ID's required
  const TEMPLATE_ID = 'scalesoft-0001';
  const SERVICE_ID = 'scalesoft-email-0001';
  const USER_ID = 'user_zAwrXYdETIxQB45Z6gSdt';

  const [alert, setAlert] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState(null);
  const [charge, setCharge] = useState(false);
  const router = useRouter();
  const recaptchaRef = useRef(null);
  const { email, asunto } = router.query;
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    setCharge(true);
    const recaptchaValue = recaptchaRef.current.getValue();

    // Date
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; // Months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    // Fecha en formato de texto
    const date = day + ' de ' + monthObj[month] + ', ' + year;

    const params = {
      ...data,
      date,
      'g-recaptcha-response': recaptchaValue,
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, params, USER_ID).then(
      (result) => {
        setCharge(false);
        setAlert(true);
        setIsError(false);
        setMessage('Tu mensaje ha sido enviado de manera exitosa!');
        setTimeout(() => {
          router.push('/');
        }, 2000);
      },
      (error) => {
        setCharge(false);
        const { status, text } = error;
        setMessage(text);
        setAlert(true);
        setIsError(true);
      }
    );
  };

  return (
    <>
      <div className='relative'>
        {alert && (
          <div
            className={`${
              isError
                ? 'bg-red-100 border-red-500 text-red-700'
                : 'bg-green-100 border-green-500 text-green-700'
            } hidden sm:block ss-alert border-l-4 p-4 sm:absolute sm:right-0 sm:top-0 m-4`}
            role='alert'
          >
            <p className='font-bold'>{isError ? 'Error' : 'Completado'}</p>
            <p>{message}</p>
          </div>
        )}
      </div>
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
                ¡Hazla corta! envianos un <b>e-mail</b> y te daremos respuesta
                de inmediato o contáctanos a nuestro correo
                <b>scalesoftcl@gmail.com</b>.
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
              <div className='mt-8 grid gap-4 sm:grid-cols-2'>
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
                      maxLength: 500,
                    })}
                  />
                  {watch('mensaje') && (
                    <span className='absolute bottom-0 right-0 m-4 text-gray-700'>
                      <span>{watch('mensaje').length}/</span>
                      <span>500</span>
                    </span>
                  )}
                </div>
              </div>
              <div className='my-4 ml-auto' style={{ width: 'max-content' }}>
                {
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey='6LeTO8IZAAAAALCFlhlM7cKIQZSBAZamN4SfoGsg'
                  />
                }
              </div>
              {alert && (
                <div className='my-4 sm:hidden'>
                  <p
                    className={`${isError ? 'text-red-600' : 'text-green-600'}`}
                  >
                    <span
                      className={`${
                        isError ? 'text-red-600' : 'text-green-600'
                      } font-medium`}
                    >
                      {isError ? 'Error:' : 'Completado: '}
                    </span>{' '}
                    {message}
                  </p>
                </div>
              )}
              <div className='mt-4'>
                <button
                  type='submit'
                  className='inline-flex items-center justify-center uppercase text-sm font-bold tracking-wide bg-neutralv-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none'
                >
                  {charge && (
                    <svg
                      className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        stroke-width='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                  )}
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
