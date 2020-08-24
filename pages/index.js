import Sections from '../components/Sections';
import HeadTag from '../components/HeadTag';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const index = () => (
  <div>
    <HeadTag
      title={'ScaleSoft - digitaliza tu StartUp y alcanza el siguiente nivel'}
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
    <Sections />
  </div>
);

export default index;
