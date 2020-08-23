import HeadTag from '../components/HeadTag';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Privacidad from '../components/Privacidad';

const privacy = () => (
  <div>
    <HeadTag
      title={'ScaleSoft'}
      description={
        'ScaleSoft, generación de soluciones tecnológicas y software a medida'
      }
    />
    <MessengerCustomerChat pageId='112750400525941' appId='333767174430636' />
    <Privacidad />
  </div>
);

export default privacy;