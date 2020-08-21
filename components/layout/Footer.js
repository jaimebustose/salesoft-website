import React from 'react';
import FooterAnimation from '../../public/res/footer-background.svg';
import FooterContent from '../FooterContent';

export default function Footer() {
  return (
    <footer className='ss-footer'>
      <div className='ss-footer-animation overflow-x-hidden'>
        <FooterAnimation className='w-full h-auto' style={{ marginBottom: '-0.26px'}} />
        <FooterContent />
      </div>
    </footer>
  );
}
