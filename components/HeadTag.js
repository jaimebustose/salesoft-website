import React from 'react';
import Head from 'next/head';
import FacebookPixel from './pixel/pixel';
import GoogleAnalytics from './analytics/gtag';

export default function HeadTag({ title, description }) {
  return (
    <Head>
      <FacebookPixel />
      <GoogleAnalytics />
      <script
        src='https://www.google.com/recaptcha/api.js'
        async
        defer
      ></script>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='theme-color' content='#ffffff' />
      <meta
        name='google-site-verification'
        content='U0EhuDu7Jt2UA0BlFR59HAwOryFUzs6cs1iwYVVQbfk'
      />
      <meta
        name='facebook-domain-verification'
        content='84a7aed918drnjbrzf4p1oclk6lllz'
      />
      <meta name='description' content={description} />
      <meta property='og:site_name' content='ScaleSoft' />
      <meta property='og:locale' content='es_ES' />
      <meta
        property='og:title'
        content='ScaleSoft - digitaliza tu StartUp y alcanza el siguiente nivel'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://scalesoft.cl' />
      <meta
        property='og:image'
        content='https://scalesoft.s3-sa-east-1.amazonaws.com/static/logo-cuadrado.png'
      />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:image:alt' content='ScaleSoft' />
      <meta property='og:image:width' content='400' />
      <meta property='og:image:height' content='400' />
      <meta property='og:description' content={description} />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
    </Head>
  );
}
