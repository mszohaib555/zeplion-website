import Script from "next/script";

// Replace with your Facebook Page ID
export const FACEBOOK_PAGE_ID = "YOUR_PAGE_ID";

export function FacebookMessenger() {
  return (
    <>
      <div id="fb-root" />
      <div
        id="fb-customer-chat"
        className="fb-customerchat"
        {...({
          attribution: "setup_tool",
          page_id: FACEBOOK_PAGE_ID,
        } as Record<string, string>)}
      />
      <Script id="facebook-sdk-init" strategy="lazyOnload">
        {`
          window.fbAsyncInit = function() {
            FB.init({ xfbml: true, version: 'v21.0' });
          };
        `}
      </Script>
      <Script
        id="facebook-sdk"
        strategy="lazyOnload"
        src="https://connect.facebook.net/en_US/sdk.js"
        crossOrigin="anonymous"
      />
    </>
  );
}
