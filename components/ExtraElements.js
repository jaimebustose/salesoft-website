import DjangoLogo from '../public/res/logos/django-logo.svg';
import PostgreSQLLogo from '../public/res/logos/postgresql-logo.svg';
import MongoDBLogo from '../public/res/logos/mongodb-logo.svg';

const ExtraElements = ({ className }) => (
  <div className={`${className} items-center overflow-hidden ss-skills-content`}>
    <span className='ss-element mx-2 opacity-25 hover:opacity-100 duration-300 justi'>
      <img src='/res/logos/drf-logo.png' alt='...' width='135' height='60' />
    </span>
    <span className='ss-element mx-10 opacity-25 hover:opacity-100 duration-300'>
      <DjangoLogo />
    </span>
    <span className='ss-element mx-10 opacity-25 hover:opacity-100 duration-300'>
      <PostgreSQLLogo />
    </span>
    <span className='ss-element mx-10 opacity-25 hover:opacity-100 duration-300'>
      <MongoDBLogo />
    </span>
  </div>
);

export default ExtraElements;
