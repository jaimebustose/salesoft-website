import React from 'react';
import FooterAnimation from '../../public/res/footer-background.svg';
import FooterContent from '../FooterContent';

export default function Footer() {
  return (
    <footer className='ss-footer'>
      <div className='ss-footer-animation'>
        <FooterAnimation className='w-full h-auto' />
        <FooterContent />
      </div>
    </footer>
  );
}
