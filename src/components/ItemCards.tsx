import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaRegCalendarAlt,
  FaRegClock,
  FaRegIdCard,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { calculateDuration } from "@/utils/dateUtils";
import { IoIdCardOutline } from "react-icons/io5";

// Used in tileCard
export function ListItemRow({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex flex-row justify-start">
      <div className="flex items-center">
        <p className={"font-medium text-start text-xl textSecondaryTheme"}>
          {icon}
        </p>
        <p className={"pl-4 font-medium text-start text-sm textSecondaryTheme"}>
          {title}
        </p>
      </div>
    </div>
  );
}

// Used in About page
const tileCard = ({
  title,
  description,
  listItems,
}: {
  title: string;
  description: string;
  listItems?: any;
}) => {
  return (
    <div className="p-5 w-full rounded-xl cardDarkerButtonTheme">
      <p className="cardTitleTheme">{title}</p>
      <p className="pt-5 text-base font-normal text-start textSecondaryTheme">
        {description}
      </p>
      {listItems ? (
        <div className="pt-5 flex flex-col gap-2">
          {listItems.map((item: any) => (
            <ListItemRow icon={item.icon} title={item.title} key={item.title} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const testimonialCard = ({
  listItems,
}: {
  listItems: Array<{
    name: string;
    title: string;
    testimonial: string;
  }>;
}) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 sm:grid-row-2 gap-4 md:gap-6">
      {listItems.map((item: any, index: any) => (
        <div
          className="p-5 flex flex-col items-center rounded-xl cardDarkerButtonTheme"
          key={index}
        >
          <div className="flex flex-col items-center">
            <Link
              href={item.profileLink}
              aria-label={`Link to ${item.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="textButtonTheme transitionButtonTheme  pt-2"
            >
              <div className="flex flex-shrink-0">
                <Image
                  src={`/webp/${item.image}.webp`}
                  alt={`Image of the ${item.name}`}
                  className="rounded-full items-center"
                  width={100}
                  height={100}
                  priority
                />
              </div>
            </Link>
            <p className="pt-4 text-md font-semibold textTheme">{item.name}</p>
            <p className="pt-0 text-sm font-normal text-center textSecondaryTheme">
              {item.title}
            </p>
            <p className="pt-0 text-sm font-normal text-center textSecondaryTheme">
              {item.org}
            </p>
          </div>
          <p className="pt-5 text-sm font-normal text-center textSecondaryTheme">
            &quot;{item.testimonial}&quot;
          </p>
          <Link
            href={item.testimonialLink}
            aria-label={`Link to ${item.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pt-4 textButtonTheme transitionButtonTheme"
            key={index}
          >
            <div className="flex flex-row items-center">
              <FiExternalLink size={18} />
              <span className="pl-1 text-sm">View Source</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

// Used in Education page, Experience page
const iconCard = ({ listItems, page }: { listItems: any; page: string }) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 sm:grid-row-2 gap-4 md:gap-6">
      {listItems.map((item: any, index: any) => (
        <div
          className="p-5 flex flex-row rounded-xl cardDarkerButtonTheme"
          key={index}
        >
          <div className="flex flex-shrink-0">
            <Link
              href={item.link}
              aria-label={`Link to ${item.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="textButtonTheme transitionButtonTheme"
              key={index}
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
            <p className="text-base font-semibold textTheme">
              {page === "Education"
                ? item.course
                : page === "Experience" || page === "Media"
                ? item.title
                : page === "Volunteering"
                ? item.org
                : ""}
            </p>
            <p className="pt-0 text-base font-normal text-start textSecondaryTheme">
              {page === "Education"
                ? item.institute
                : page === "Experience" || page === "Media"
                ? item.org
                : page === "Volunteering"
                ? item.title
                : ""}
            </p>
            <p className="pt-0 text-sm font-normal text-start textSecondaryTheme">
              {item.years}
              <span className="hidden md:inline">
                {" "}
                · {calculateDuration(item.years)}
              </span>
            </p>
            <p className="pt-0 text-sm font-normal text-start textSecondaryTheme">
              {page === "Media" ? item.handler : item.location}
            </p>
            {item.status ? <hr className="mt-2 mb-2 divider" /> : <></>}
            <p className="pt-1 text-sm font-normal text-start textSecondaryTheme">
              {item.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Used in Experience page: Projects
const projectSmallCard = ({ listItems }: { listItems: any }) => {
  const top4Items = listItems.slice(0, 4);

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-4 sm:grid-row-2 gap-4 md:gap-6">
      {top4Items.map((item: any, index: any) => (
        <div
          key={index}
          className="mt-2 rounded-xl overflow-hidden cardDarkerButtonTheme"
        >
          <Image
            src={`/webp/${item.image}.webp`}
            alt={`Image of the ${item.title}`}
            height={300}
            width={400}
          />
          <div className="px-6 py-4">
            <div className="text-md font-semibold textTheme">{item.title}</div>
            <p className="pt-2 textSecondaryTheme text-sm">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Used in Experience page: Tools & Technologies
const toolsSmallCard = ({ listItems }: { listItems: any }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-4 justify-center">
      {listItems.map((item: any, index: any) => (
        <div
          key={index}
          className="mt-2 p-2 flex items-center text-center rounded-xl overflow-hidden cardDarkerButtonTheme"
        >
          <Image
            src={`/svg/tools/${item.image}.svg`}
            alt={`Image of the ${item.title}`}
            className="mr-2 hidden dark:block"
            width={24}
            height={24}
          />
          <Image
            src={`/svg/tools/${item.imageL}.svg`}
            alt={`Image of the ${item.title}`}
            className="mr-2 dark:hidden block"
            width={24}
            height={24}
          />
          <p className="textSecondaryTheme text-sm">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

// Used in Media page
const bannerCard = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <div className="relative pb-5 mt-10 xs:h-52 sm:h-64 md:h-80 lg:h-80 rounded-xl">
      <Image
        alt="Image of the media banner"
        src={imageSrc}
        fill
        quality={100}
        sizes="100vw, 100vw"
        className="object-cover rounded-xl"
        // placeholder="blur"
        priority
        loading="eager"
      />
    </div>
  );
};

// Used in Media page
const eventsCard = ({ listItems }: { listItems: any }) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 sm:grid-row-2 gap-4 md:gap-6">
      {listItems.map((item: any, index: any) => (
        <div
          key={index}
          className="mt-2 rounded-xl overflow-hidden cardDarkerButtonTheme"
        >
          {/* <Image
            src={`/${item.image}.webp`}
            alt={`Image of the ${item.title}`}
            height={300}
            width={900}
          /> */}
          <div className="px-6 py-4">
            <div className="text-md font-semibold textTheme">{item.title}</div>
            <p className="pt-1 textSecondaryTheme text-sm">
              {item.description}
            </p>
            <div className="flex flex-row pt-4 items-center">
              <FaRegCalendarAlt size={16} className="textTheme" />
              <p className="pl-2 text-sm font-normal text-start textSecondaryTheme">
                {item.date}
              </p>
            </div>
            <div className="flex flex-row pt-2 items-center">
              <FaRegClock size={16} className="textTheme" />
              <p className="pl-2 text-sm font-normal text-start textSecondaryTheme">
                {item.time}
              </p>
            </div>
            <div className="flex flex-row pt-2 items-center">
              <FaLocationDot size={16} className="textTheme" />
              <p className="pl-2 text-sm font-normal text-start textSecondaryTheme">
                {item.venue}
              </p>
            </div>
            <div className="flex flex-row pt-2 items-center">
              <IoIdCardOutline size={16} className="textTheme" />
              <p className="pl-2 text-sm font-normal text-start textSecondaryTheme">
                {item.role}
              </p>
            </div>
            {item.organizer && item.organizer.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-start textTheme">
                  {/* {item.organizer.length > 1 ? "Organizations" : "Organization"} */}
                  In collaboration with
                </p>
                <div className="flex flex-col mt-2">
                  {item.organizer.map(
                    (organizer: string, organizerIndex: number) => (
                      <div
                        key={organizerIndex}
                        className="flex items-center justify-start text-sm font-normal text-start textSecondaryTheme mt-2"
                      >
                        {item.organizerImage &&
                          item.organizerImage.length > 0 &&
                          item.organizerImage[organizerIndex] && (
                            <Link
                              href={item.link}
                              aria-label={`Link to ${item.title}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="textButtonTheme transitionButtonTheme mr-2"
                            >
                              <Image
                                src={`/svg/org/${item.organizerImage[organizerIndex]}.svg`}
                                alt={`Image of the ${item.title}`}
                                width={30}
                                height={30}
                                priority
                              />
                            </Link>
                          )}
                        <p>{organizer}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// Used in Connect page
type IconType =
  | typeof FaEnvelope
  | typeof FaGithub
  | typeof FaXTwitter
  | typeof FaXTwitter
  | typeof FaInstagram;

// Used in Connect page
function getIconComponent(iconName: String): IconType {
  switch (iconName) {
    case "email":
      return FaEnvelope;
    case "github":
      return FaGithub;
    case "linkedin":
      return FaLinkedin;
    case "xtwitter":
      return FaXTwitter;
    case "youtube":
      return FaYoutube;
    case "instagram":
      return FaInstagram;
    default:
      throw new Error(`Invalid icon name: ${iconName}`);
  }
}

// Used in Connect page
const connectChannelCard = ({ listItems }: { listItems: any }) => {
  return (
    <div className="grid sm:grid-rows-3 sm:grid-flow-col md:grid-rows-3 md:grid-flow-col lg:grid-rows-3 lg:grid-flow-col gap-4">
      {listItems.map((item: any, index: any) => {
        const ChannelIcon = getIconComponent(item.icon);
        return (
          <Link
            href={item.link}
            aria-label={`Link to ${item.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="textButtonTheme transitionButtonTheme"
            key={index}
          >
            <div
              className="p-5 flex flex-col justify-center items-center rounded-xl w-full min-w-[260px] cardDarkerButtonTheme"
              key={index}
            >
              <ChannelIcon size={28} />
              <p className="pt-2 text-md font-medium textTheme">{item.title}</p>
              <p className="pt-2 text-sm font-normal text-start textSecondaryTheme">
                {item.handler}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

// const statusCard = ({
//   status,
//   message,
// }: {
//   status: string;
//   message: string;
// }) => {
//   return (
//     <div className="text-center py-4 lg:px-4">
//       <div className="p-2 rounded-xl bg-green-800 bg-opacity-40 backdrop-blur items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex">
//         <span className="px-2 py-1 mr-3 flex rounded-full bg-green-600 bg-opacity-40 uppercase text-xs font-semibold">
//           {status}
//         </span>
//         <span className="mr-2 text-sm font-normal text-left flex-auto">
//           {message}
//         </span>
//       </div>
//     </div>
//   );
// };

const ItemCards = {
  tileCard,
  testimonialCard,
  iconCard,
  projectSmallCard,
  toolsSmallCard,
  bannerCard,
  eventsCard,
  connectChannelCard,
  // statusCard,
};

export default ItemCards;
