// "use client";

// import { useEffect } from "react";
// import Clarity from "@microsoft/clarity";

// export default function MicrosoftClarity() {
//   useEffect(() => {
//     const microsoftClarityProjectId =
//       process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_PROJECT_ID;

//     if (!microsoftClarityProjectId) {
//       console.error("Microsoft Clarity Project ID is not defined.");
//       return;
//     }
//     if (process.env.NODE_ENV === "production") {
//       Clarity.init(microsoftClarityProjectId);
//     }
//     if (process.env.NODE_ENV === "development") {
//       Clarity.init(microsoftClarityProjectId);
//     }
//   }, []);
//   return null;
// }

import Script from "next/script";

const microsoftClarityProjectId =
  process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_PROJECT_ID;

export default function MicrosoftClarity() {
  console.log("microsoftClarityProjectId: ", microsoftClarityProjectId);
  if (!microsoftClarityProjectId) {
    console.error("Microsoft Clarity Project ID is not defined.");
    return null;
  }
  if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "development"
  ) {
    return (
      <Script id="microsoft-clarity-analytics">
        {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${microsoftClarityProjectId}");
        `}
      </Script>
    );
  }
  return null;
}
