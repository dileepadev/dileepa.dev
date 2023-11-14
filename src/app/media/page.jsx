import ItemCards from "@/components/ItemCards";
import textData from "@/constants/textData";
import bannerImage from "../../../public/banner.webp";

export default function Media() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <p className="pageTitleTheme">{textData.mediaPageData.title}</p>
        <p className="pt-5 text-base font-normal text-center textSecondaryTheme">
          {textData.mediaPageData.subtitle}
        </p>
      </div>
      <ItemCards.bannerCard imageSrc={bannerImage} />
      <ItemCards.iconCard listItems={textData.mediaPageData.log} page="Media" />
    </section>
  );
}
