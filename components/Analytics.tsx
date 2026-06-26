"use client";

import { useEffect } from "react";
import Script from "next/script";

// Replace with real GA4 ID from analytics.google.com
const GA_ID = "G-LCJ1DR537E";

// Replace with real Clarity ID from clarity.microsoft.com
const CLARITY_ID = "XXXXXXXXXX";

export function Analytics() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log(
        "Analytics placeholder active. Add real IDs to go live."
      );
    }
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `}
      </Script>
    </>
  );
}
