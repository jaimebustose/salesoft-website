import HeadTag from '../components/HeadTag';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Privacidad from '../components/Privacidad';

const privacy = () => (
  <div>
    <HeadTag
      title={'ScaleSoft | Política de privacidad'}
      description={
        'ScaleSoft está enfocado en la generación de soluciones tecnológicas, a partir de la construcción de software a medida para empresas en fase de crecimiento.'
      }
    />
    <MessengerCustomerChat
      pageId='112750400525941'
      appId='333767174430636'
      language='es_ES'
      loggedInGreeting='Hola!, ¿Cuéntanos como podemos ayudarte?'
      loggedOutGreeting='Hola!, ¿Cuéntanos como podemos ayudarte?'
    />
    <Privacidad />
  </div>
);

export default privacy;
