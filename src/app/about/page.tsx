import ItemCards from "@/components/ItemCards";
import SectionTitle from "@/components/SectionTitle";
import { TimelineItem } from "@/components/TimeLine";
import textData from "@/constants/textData";

const Acquainted = () => {
  return (
    <section id="acquainted">
      <SectionTitle
        title={textData.aboutPageData.title.acquainted}
        subTitle={textData.aboutPageData.subtitle.acquainted}
      />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 sm:grid-row-2 gap-4 md:gap-6">
        <ItemCards.tileCard
          title="Introduction"
          description={textData.aboutPageData.itemCardDescription.introduction}
        />
        <ItemCards.tileCard
          title="Background"
          description={textData.aboutPageData.itemCardDescription.background}
          listItems={textData.aboutPageData.itemCardList.backgroundList}
        />
        <ItemCards.tileCard
          title="Goals"
          description={textData.aboutPageData.itemCardDescription.goals}
          listItems={textData.aboutPageData.itemCardList.goalsList}
        />
        <ItemCards.tileCard
          title="Interests"
          description={textData.aboutPageData.itemCardDescription.interests}
          listItems={textData.aboutPageData.itemCardList.interestsList}
        />
      </div>
    </section>
  );
};

const Achievements = () => {
  return (
    <section id="achievements">
      <SectionTitle
        title={textData.aboutPageData.title.achievements}
        subTitle={textData.aboutPageData.subtitle.achievements}
      />
      <div className="w-full max-w-3xl mx-auto py-6 md:py-12">
        {textData.aboutPageData.achievementsList.map((achievement, index) => (
          <TimelineItem
            key={index}
            title={achievement.title}
            date={achievement.date}
            description={achievement.description}
          />
        ))}
      </div>
    </section>
  );
};

const Recommendations = () => {
  return (
    <section id="recommendations">
      <SectionTitle
        title={textData.aboutPageData.title.testimonials}
        subTitle={textData.aboutPageData.subtitle.testimonials}
      />
      <ItemCards.testimonialCard
        listItems={textData.aboutPageData.testimonials}
      />
    </section>
  );
};

export default function About() {
  return (
    <div>
      <Acquainted />
      <hr className="my-12 gradientDivider" />
      <Achievements />
      <hr className="my-12 gradientDivider" />
      <Recommendations />
    </div>
  );
}
