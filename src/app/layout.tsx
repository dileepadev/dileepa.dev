import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const mainFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dileepa Bandara",
  description: "Associate AI Engineer",
};

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
