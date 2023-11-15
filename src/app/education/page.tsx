import ItemCards from "@/components/ItemCards";
import SectionTitle from "@/components/SectionTitle";
import textData from "@/constants/textData";

export default function Education() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <p className="pageTitleTheme">{textData.educationPageData.title}</p>
        <p className="pt-5 text-base font-normal text-center textSecondaryTheme">
          {textData.educationPageData.subtitle}
        </p>
      </div>
      <SectionTitle title="🎓 Academic Qualifications" />
      <ItemCards.iconCard
        listItems={textData.educationPageData.academic}
        page="Education"
      />
    </section>
  );
}
