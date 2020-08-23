import Sections from '../components/Sections';
import HeadTag from '../components/HeadTag';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const index = () => (
  <div>
    <HeadTag
      title={'ScaleSoft'}
      description={
        'ScaleSoft, generación de soluciones tecnológicas y software a medida'
      }
    />
    <MessengerCustomerChat
      pageId='112750400525941'
      appId='333767174430636'
      language='es_ES'
      loggedInGreeting='Hola!, ¿Cuéntanos como podemos ayudarte?'
      loggedOutGreeting='Hola!, ¿Cuéntanos como podemos ayudarte?'
    />
    <Sections />
  </div>
);

export default index;
