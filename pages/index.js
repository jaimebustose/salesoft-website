import Head from 'next/head';
import FacebookPixel from '../components/pixel/pixel';
import GoogleAnalytics from '../components/analytics/gtag';
import Sections from '../components/Sections';


const index = () => (
  <div>
    <Head>
      <FacebookPixel />
      <GoogleAnalytics />
      <title>ScaleSoft</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta
        name='description'
        content='ScaleSoft, generación de soluciones tecnológicas y software a medida'
      />
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
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta
        name='description'
        content='ScaleSoft está enfocado en la generación de soluciones tecnológicas, a partir de la construcción de software a medida para empresas en fase de crecimiento.'
      />
      <meta name='theme-color' content='#ffffff' />
      <meta
        name='google-site-verification'
        content='U0EhuDu7Jt2UA0BlFR59HAwOryFUzs6cs1iwYVVQbfk'
      />
      <meta
        name='facebook-domain-verification'
        content='84a7aed918drnjbrzf4p1oclk6lllz'
      />
    </Head>
    <Sections />
  </div>
);

export default index;
