import ContactForm from '../components/ContactForm';
import HeadTag from '../components/HeadTag';

const contacto = () => (
  <div>
    <HeadTag
      title={'ScaleSoft | Contacto'}
      description={
        'ScaleSoft, generación de soluciones tecnológicas y software a medida'
      }
    />
    <ContactForm />
  </div>
);

export default contacto;
