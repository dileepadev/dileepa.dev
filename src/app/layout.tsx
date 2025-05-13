import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ToastNotification } from "@/components/ToastNotification";
import metadataJSON from "@/data/metaData";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalyticsComponent from "@/components/analytics/GoogleAnalytics";
import Script from "next/script";

const mainFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = metadataJSON;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mainFont.className} antialiased bodyColor`}>
        <ThemeProvider>
          {children}
          <ToastNotification />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
        <GoogleAnalyticsComponent />
        <Script id="microsoft-clarity-analytics">
          {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "rii1dka37b");
          `}
        </Script>
      </body>
    </html>
  );
}
