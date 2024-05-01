import ItemCards from "@/components/ItemCards";
import SectionTitle from "@/components/SectionTitle";
import textData from "@/constants/textData";

export default function Education() {
  return (
    <div>
      <section key="Academic">
        <SectionTitle
          title="Academic Education"
          subTitle={textData.educationPageData.subtitle}
        />
        <ItemCards.iconCard
          listItems={textData.educationPageData.academic}
          page="Education"
        />
      </section>
    </div>
  );
}
