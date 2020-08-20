import React from 'react';
import ContactForm from '../components/ContactForm';
import HeadTag from '../components/HeadTag';
import FacebookMessenger from '../components/messenger/messenger';

const contacto = () => (
  <div>
    <HeadTag
      title={'ScaleSoft | Contacto'}
      description={
        'ScaleSoft, generación de soluciones tecnológicas y software a medida'
      }
    />
    {/* <FacebookMessenger /> */}
    <ContactForm />
  </div>
);

export default contacto;
