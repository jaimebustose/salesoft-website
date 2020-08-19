import AwsLogo from '../public/res/logos/aws-logo.svg';
import DockerLogo from '../public/res/logos/docker-logo.svg';
import NginxLogo from '../public/res/logos/nginx-logo.svg';
import PythonLogo from '../public/res/logos/python-logo.svg';
import SassLogo from '../public/res/logos/sass-logo.svg';
import JSLogo from '../public/res/logos/javascript-logo.svg';
import ReactLogo from '../public/res/logos/react-logo.svg';
import NextLogo from '../public/res/logos/nextjs-logo.svg';

const DefaultElements = () => (
  <>
    <div className='flex items-center overflow-hidden ss-skills-content'>
      <span className='ss-element mx-10 opacity-25 hover:opacity-100 duration-300'>
        <AwsLogo />
      </span>
      <span className='ss-element mx-10 opacity-25 hover:opacity-100 duration-300'>
        <DockerLogo />
      </span>
      <span className='ss-element mx-10 opacity-25 hover:opacity-100 duration-300'>
        <NginxLogo />
      </span>
      <span className='ss-element mx-10 opacity-25 hover:opacity-100 duration-300'>
        <PythonLogo />
      </span>
    </div>
    <div className='flex items-center overflow-hidden ss-skills-content'>
      <span className='ss-element mx-10 opacity-25 hover:opacity-100 duration-300'>
        <SassLogo />
      </span>
      <span className='ss-element mx-10 opacity-25 hover:opacity-100 duration-300'>
        <JSLogo />
      </span>
      <span className='ss-element mx-10 opacity-25 hover:opacity-100 duration-300'>
        <ReactLogo />
      </span>
      <span className='ss-element mx-10 opacity-25 hover:opacity-100 duration-300'>
        <NextLogo />
      </span>
    </div>
  </>
);

export default DefaultElements;