import SiteInfo from "@/config/siteInfo";

export default function Logo() {
  return (
    <div className="flex items-center">
      <p className="font-medium text-md textButtonSecondaryTheme transitionButtonTheme">
        {SiteInfo.username}
      </p>
    </div>
  );
}
