import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import metadataJSON from "@/data/metaData";

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
