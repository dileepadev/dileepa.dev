import ItemCards from "@/components/ItemCards";
import textData from "@/constants/textData";

export function IntroductionCard() {
  return (
    <ItemCards.tileCard
      title="Introduction"
      description={textData.aboutPageData.introduction}
    />
  );
}

export function BackgroundCard() {
  return (
    <ItemCards.tileCard
      title="Background"
      description={textData.aboutPageData.background}
      listItems={textData.aboutPageData.backgroundList}
    />
  );
}

export function GoalsCard() {
  return (
    <ItemCards.tileCard
      title="Goals"
      description={textData.aboutPageData.goals}
      listItems={textData.aboutPageData.goalsList}
    />
  );
}

export function InterestsCard() {
  return (
    <ItemCards.tileCard
      title="Interests"
      description={textData.aboutPageData.interests}
      listItems={textData.aboutPageData.interestsList}
    />
  );
}

export default function About() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <p className="pageTitleTheme">{textData.aboutPageData.title}</p>
        <p className="pt-5 text-base font-normal text-center textSecondaryTheme">
          {textData.aboutPageData.subtitle}
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 sm:grid-row-2 gap-4 md:gap-6">
        <IntroductionCard />
        <BackgroundCard />
        <GoalsCard />
        <InterestsCard />
      </div>
    </section>
  );
}
