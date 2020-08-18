import React from 'react';

export default function gtag() {
  return (
    <>
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=UA-175622039-1'
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-175622039-1');`,
        }}
      />
    </>
  );
}
