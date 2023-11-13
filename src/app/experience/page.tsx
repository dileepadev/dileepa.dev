import ItemCards from "@/components/ItemCards";
import SectionTitle from "@/components/SectionTitle";
import textData from "@/constants/textData";

export default function Experience() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <p className="pageTitleTheme">{textData.experiencePageData.title}</p>
        <p className="pt-5 text-base font-normal text-center textSecondaryTheme">
          {textData.experiencePageData.subtitle}
        </p>
      </div>
      <SectionTitle title="💼 Work Experience" />
      <ItemCards.iconCard
        listItems={textData.experiencePageData.work}
        page="Experience"
      />
      <SectionTitle title="🌏 Volunteer Experience" />
      <ItemCards.iconCard
        listItems={textData.experiencePageData.volunteer}
        page="Experience"
      />
    </section>
  );
}
