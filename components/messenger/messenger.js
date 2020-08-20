import React from 'react';

export default function messenger() {
  return (
    <>
      <div id='fb-root'></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.fbAsyncInit = function() {
          FB.init({xfbml:true,version:'v8.0'});};
        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/es_ES/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));`,
        }}
      />
      <div
        className='fb-customerchat'
        attribution='setup_tool'
        page_id='112750400525941'
        logged_in_greeting='Hola!, ¿Cuéntanos como podemos ayudarte?'
        logged_out_greeting='Hola!, ¿Cuéntanos como podemos ayudarte?'
      ></div>
    </>
  );
}
