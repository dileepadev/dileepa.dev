import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ToastNotification } from "@/components/ToastNotification";
import metadataJSON from "@/data/metaData";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalyticsComponent from "@/components/analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";

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
        <MicrosoftClarity />
      </body>
    </html>
  );
}
