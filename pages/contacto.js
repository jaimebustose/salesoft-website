import ContactForm from '../components/ContactForm';
import HeadTag from '../components/HeadTag';

const contacto = () => (
  <div>
    <HeadTag
      title={'ScaleSoft | Contacto'}
      description={
        'ScaleSoft está enfocado en la generación de soluciones tecnológicas, a partir de la construcción de software a medida para empresas en fase de crecimiento.'
      }
      canonical={'https://scalesoft.cl/contacto'}
    />
    <ContactForm />
  </div>
);

export default contacto;
