import textData from "@/constants/textData";
import Image from "next/image";
import Link from "next/link";

export function BannerCard() {
  return (
    <div className="relative pb-5 mt-10 xs:h-52 sm:h-64 md:h-80 lg:h-80 rounded-xl">
      <Image
        alt="Image of the media banner"
        src="/banner.png"
        fill
        quality={100}
        sizes="100vw, 100vw"
        className="object-cover rounded-xl"
        priority
      />
    </div>
  );
}

export function MediaCard() {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 sm:grid-row-2 gap-4 md:gap-6">
      {textData.mediaPageData.log.map((item, index) => (
        <div
          className="p-5 flex flex-row rounded-xl cardDarkerTheme"
          key={index}
        >
          <div className="flex flex-shrink-0">
            <Link
              href={item.link}
              aria-label={`Link to the ${item.org} website`}
            >
              <Image
                src={`/svg/${item.image}.svg`}
                alt={`Image of the ${item.org}`}
                width={100}
                height={100}
                priority
              />
            </Link>
          </div>
          <div className="ml-5 flex-flex-col">
            <p className="text-md font-semibold textTheme">{item.title}</p>
            <p className="pt-2 text-sm font-normal text-start textSecondaryTheme">
              {item.org}
            </p>
            <p className="pt-1 text-sm font-normal text-start textSecondaryTheme">
              {item.handler}
            </p>
            <p className="pt-1 text-sm font-normal text-start textSecondaryTheme">
              {item.years}
            </p>
            <p className="pt-1 text-sm font-normal text-start textSecondaryTheme">
              {item.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Media() {
  return (
    <div className="pb-5 md:pb-10">
      <div className="flex flex-col justify-center items-center">
        <p className="pageTitleTheme">{textData.mediaPageData.title}</p>
        <p className="pt-5 text-base font-normal text-center textSecondaryTheme">
          {textData.mediaPageData.subtitle}
        </p>
      </div>
      <BannerCard />
      <MediaCard />
    </div>
  );
}
