import textData from "@/constants/textData";
import Image from "next/image";
import Link from "next/link";

export function EducationCard() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 sm:grid-row-2 gap-4 md:gap-6">
      {textData.educationPageData.academic.map((item, index) => (
        <div
          className="p-5 flex flex-row rounded-xl cardDarkerTheme"
          key={index}
        >
          <div className="flex flex-shrink-0">
            <Link
              href={item.link}
              aria-label={`Link to the ${item.institute} website`}
            >
              <Image
                src={`/svg/${item.image}.svg`}
                alt={`Image of the ${item.institute}`}
                width={100}
                height={100}
                priority
              />
            </Link>
          </div>
          <div className="ml-5 flex-flex-col">
            <p className="text-md font-semibold textTheme">{item.course}</p>
            <p className="pt-2 text-sm font-normal text-start textSecondaryTheme">
              {item.institute}
            </p>
            <p className="pt-1 text-sm font-normal text-start textSecondaryTheme">
              {item.country}
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

export default function Education() {
  return (
    <div className="pb-5 md:pb-10">
      <div className="flex flex-col justify-center items-center">
        <p className="pageTitleTheme">{textData.educationPageData.title}</p>
        <p className="pt-5 text-base font-normal text-center textSecondaryTheme">
          {textData.educationPageData.subtitle}
        </p>
      </div>
      <EducationCard />
    </div>
  );
}
