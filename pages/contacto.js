import ContactForm from '../components/ContactForm';
import HeadTag from '../components/HeadTag';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const contacto = () => (
  <div>
    <HeadTag
      title={'ScaleSoft | Contacto'}
      description={
        'ScaleSoft, generación de soluciones tecnológicas y software a medida'
      }
    />
    <MessengerCustomerChat pageId='112750400525941' appId='333767174430636' language='es_ES' />
    <ContactForm />
  </div>
);

export default contacto;
