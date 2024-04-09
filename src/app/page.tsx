import Image from "next/image";
import profilePicture from "../../public/profile.webp";

const ProfilePicture = ({ isMobile }: { isMobile: boolean }) => {
  const imageWidth = isMobile ? 200 : 300;
  const imageHeight = isMobile ? 200 : 300;
  const imageViewType = isMobile ? "md:hidden md-10 mb-10" : "hidden md:block";
  return (
    <div
      className={`pt-8 flex flex-col items-center justify-center ${imageViewType}`}
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
    <div className="md:h-[40rem] h-[38rem] w-full bodyTheme  dark:bg-grid-white/[0.16] bg-grid-black/[0.18] relative flex items-start justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bodyTheme [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
      <div className="flex flex-col items-center justify-evenly relative">
        <h1 className="pageHeaderTheme">
          Hi, everyone!
          <br />
          I&apos;m Dileepa Bandara.
        </h1>
        <p className="mt-8 font-normal text-base md:text-lg textTertiaryTheme max-w-4xl text-center mx-auto px-4 md:px-0">
          Welcome to my profile. I&apos;m a student and developer who loves to
          solve problems while helping others by leveraging Artificial
          Intelligence, Software Development, and Cloud Computing technologies.
        </p>
        <ProfilePicture isMobile={false} />
        <ProfilePicture isMobile={true} />
        <div className="relative rounded-full md:mt-9 -mt-1.5 px-3 py-1 text-sm leading-6 cardDarkerButtonTheme">
          Seeking contact?{" "}
          <a href="/connect" className="font-semibold textTheme">
            <span className="absolute inset-0" aria-hidden="true" />
            Let&apos;s connect! 💬<span aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
