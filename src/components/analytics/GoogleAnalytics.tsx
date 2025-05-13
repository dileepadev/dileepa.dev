import { GoogleAnalytics } from "@next/third-parties/google";

export default function GoogleAnalyticsComponent() {
  const GoogleAnalyticsID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  if (!GoogleAnalyticsID) {
    console.error("Google Analytics ID is not defined.");
    return null;
  }

  return (
    <>
      <GoogleAnalytics gaId={GoogleAnalyticsID} />
    </>
  );
}
