import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "@/components/NavBar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dileepa Bandara",
  description:
    "Hello there, I'm Dileepa Bandara. This is my personal website, which contains public information that anyone can find on the internet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
