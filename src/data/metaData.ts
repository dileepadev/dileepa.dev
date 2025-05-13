import type { Metadata } from "next";

const metadataJSON: Metadata = {
  metadataBase: new URL("https://dileepa.dev"),
  title: "Dileepa Bandara",
  description:
    "I'm an Associate AI Engineer passionate about building intelligent solutions that make a difference.",
  applicationName: "Dileepa Bandara",
  category: "Personal Website",
  keywords: [
    "Dileepa Bandara",
    "dileepadev",
    "dileepa",
    "dileepabandara",
    "AI Engineer",
    "AI",
  ],
  creator: "Dileepa Bandara",
  publisher: "Dileepa Bandara",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    {
      name: "Dileepa Bandara",
      url: "https://dileepa.dev",
    },
  ],
  twitter: {
    card: "summary_large_image",
    site: `@dileepadev`,
    creator: `@dileepadev`,
    title: "Dileepa Bandara",
    description:
      "I'm an Associate AI Engineer passionate about building intelligent solutions that make a difference.",
    images: [
      {
        url: `/banner.webp`,
        width: 1200,
        height: 630,
        alt: "Dileepa Bandara",
        type: "image/webp",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://dileepa.dev",
    siteName: "Dileepa Bandara",
    emails: "contact@dileepa.dev",
    title: "Dileepa Bandara",
    description:
      "I'm an Associate AI Engineer passionate about building intelligent solutions that make a difference.",
    images: [
      {
        url: `/banner.webp`,
        width: 1200,
        height: 630,
        alt: "Dileepa Bandara",
        type: "image/webp",
      },
    ],
  },
};

export default metadataJSON;
