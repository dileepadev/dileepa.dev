import type { Metadata } from "next";
import SiteInfo from "@/config/siteInfo";
import WebLinks from "@/constants/links";

const metadataJSON: Metadata = {
  title: SiteInfo.username,
  description: SiteInfo.description,
  applicationName: SiteInfo.username,
  category: "Personal Website",
  keywords: SiteInfo.keywords,
  creator: SiteInfo.username,
  robots: "index, follow",
  authors: [
    {
      name: SiteInfo.username,
      url: SiteInfo.domain,
    },
  ],
  twitter: {
    card: "summary_large_image",
    site: `@${WebLinks.xtwitter}`,
    creator: `@${WebLinks.xtwitter}`,
    title: SiteInfo.username,
    description: SiteInfo.description,
    images: "/banner.webp",
  },
  openGraph: {
    type: "website",
    url: SiteInfo.domain,
    siteName: SiteInfo.username,
    emails: WebLinks.email,
    title: SiteInfo.username,
    description: SiteInfo.description,
    images: [
      {
        url: `/banner.webp`,
        width: 1200,
        height: 630,
        alt: SiteInfo.username,
      },
    ],
  },
};

export default metadataJSON;
