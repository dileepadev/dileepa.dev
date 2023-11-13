import ItemCards from "@/components/ItemCards";
import textData from "@/constants/textData";

export default function Media() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <p className="pageTitleTheme">{textData.mediaPageData.title}</p>
        <p className="pt-5 text-base font-normal text-center textSecondaryTheme">
          {textData.mediaPageData.subtitle}
        </p>
      </div>
      <ItemCards.bannerCard imageSrc="/banner.png" />
      <ItemCards.iconCard listItems={textData.mediaPageData.log} page="Media" />
    </section>
  );
}
