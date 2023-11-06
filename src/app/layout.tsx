import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "@/components/NavBar";
import SiteInfo from "@/config/siteInfo";
import MainFont from "@/constants/fontStyle";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: SiteInfo.username,
  description: SiteInfo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${MainFont.className} bodyTheme`}>
        <div className="relative flex flex-col h-screen">
          <NavBar />
          <main className="mt-20 py-6 xs:mx-6 sm:mx-12 md:mx-16 flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
