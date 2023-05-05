import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Script strategy='afterInteractive'>
        {`function loadScript(a){
            var b=document.getElementsByTagName("head")[0];
            var c=document.createElement("script");
            c.type="text/javascript";
            c.src="https://tracker.metricool.com/resources/be.js";
            c.onreadystatechange=a;
            c.onload=a;
            b.appendChild(c);
          }
          loadScript(function(){
            beTracker.t({hash:"6801246ecc0e92f5618666edd03131e9"})
          })`}
      </Script>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
