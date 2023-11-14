import Image from "next/image";
import Link from "next/link";
import SiteInfo from "@/config/siteInfo";
import profilePicture from "../../public/profile_picture.jpg";

const Title = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-2xl md:text-3xl mb-4 font-semibold text-center textSecondaryTheme">
        Hi, everyone! I&apos;m
      </p>
      <p className="text-4xl md:text-5xl font-bold text-center">
        Dileepa Bandara
      </p>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 pt-8 md:pt-12">
        <p className="text-center text-md md:text-lg font-medium textSecondaryTheme">
          🎓 Computing Student
        </p>
        <p className="text-center text-md md:text-lg font-medium textSecondaryTheme">
          💻 Solution Developer
        </p>
        <p className="text-center text-md md:text-lg font-medium textSecondaryTheme">
          🌏 Community Volunteer
        </p>
        <p className="text-center text-md md:text-lg font-medium textSecondaryTheme">
          📢 Content Creator
        </p>
      </div>
      <div className="flex flex-col items-center justify-center pt-10 md:pt-16">
        <div className="flex md:flex-row xs:flex-col gap-2">
          <p className="text-center textTheme">Looking to contact?</p>
          <p className="text-center textTheme">Send me an email ✨ </p>
        </div>
        <Link
          href={`mailto:${SiteInfo.email}`}
          className="pt-2 text-wd textButtonTheme transitionButtonTheme"
        >
          <span className="ml-2">{SiteInfo.email}</span>
        </Link>
      </div>
    </div>
  );
};

const ProfilePicture = ({ isMobile }: { isMobile: boolean }) => {
  const imageWidth = isMobile ? 250 : 400;
  const imageHeight = isMobile ? 250 : 400;
  const imageViewType = isMobile ? "md:hidden md-10 mb-10" : "hidden md:block";
  return (
    <div
      className={`flex flex-col items-center justify-center ${imageViewType}`}
    >
      <Image
        src={profilePicture}
        alt="Profile picture of Dileepa Bandara"
        width={imageWidth}
        height={imageHeight}
        quality={100}
        className="rounded-full mx-auto"
        placeholder="blur"
        loading="eager"
        priority
      />
    </div>
  );
};

export default function Home() {
  return (
    <div className="pt-5 md:pt-20 pb-5 md:pb-40">
      <ProfilePicture isMobile={true} />
      <div className="flex flex-row items-center justify-evenly ">
        <Title />
        <ProfilePicture isMobile={false} />
      </div>
    </div>
  );
}
