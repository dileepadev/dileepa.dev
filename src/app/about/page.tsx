import AboutPageData from "@/constants/textData";

export function TileCard({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex flex-row justify-start">
      <div className="flex items-center">
        <p className={"font-medium text-start text-xl textTheme"}>{icon}</p>
        <p className={"pl-4 font-medium text-start text-sm textTheme"}>
          {title}
        </p>
      </div>
    </div>
  );
}

export function IntroductionCard() {
  return (
    <div className="p-5 w-full rounded-xl cardDarkerTheme">
      <p className="pageSubtitleTheme">Introduction</p>
      <p className="pt-5 text-base font-normal text-start textSecondaryTheme">
        {AboutPageData.introduction}
      </p>
    </div>
  );
}

export function BackgroundCard() {
  return (
    <div className="p-5 w-full rounded-xl cardDarkerTheme">
      <p className="pageSubtitleTheme">Background</p>
      <p className="pt-5 text-base font-normal text-start textSecondaryTheme">
        {AboutPageData.background}
      </p>
      <div className="pt-5 flex flex-col gap-2">
        <TileCard icon="🎟️" title="Name is Dileepa Lakmal Bandara" />
        <TileCard icon="📆" title="Born on July 24, 1997" />
        <TileCard icon="🌏" title="Lives in Sri Lanka (GMT+5:30)" />
        <TileCard icon="👦🏽" title="Gender is Male (He/Him/His)" />
        <TileCard icon="💼" title="Works in Sinhala & English" />
      </div>
    </div>
  );
}

export function GoalsCard() {
  return (
    <div className="p-5 w-full rounded-xl cardDarkerTheme">
      <p className="pageSubtitleTheme">Goals</p>
      <p className="pt-5 text-base font-normal text-start textSecondaryTheme">
        {AboutPageData.goals}
      </p>
      <div className="pt-5 flex flex-col gap-2">
        <TileCard icon="🤖" title="Follow the AI Engineer Path" />
        <TileCard icon="💻" title="Follow the Software Developer Path" />
        <TileCard icon="🚩" title="Build a Tech Community" />
        <TileCard icon="🎓" title="Pursue a Master's Degree" />
      </div>
    </div>
  );
}

export function InterestsCard() {
  return (
    <div className="p-5 w-full rounded-xl cardDarkerTheme">
      <p className="pageSubtitleTheme">Interests</p>
      <p className="pt-5 text-base font-normal text-start textSecondaryTheme">
        {AboutPageData.interests}
      </p>
      <div className="pt-5 flex flex-col gap-2">
        <TileCard icon="🎬" title="Watching Movies & TV Shows" />
        <TileCard icon="🎧" title="Listening to Music" />
        <TileCard icon="🖌️" title="Creating Contents" />
        <TileCard icon="📚" title="Studying New Things" />
        <TileCard icon="🎤" title="Public Speaking" />
      </div>
    </div>
  );
}

export function LeftGrid() {
  return (
    <div className="flex flex-col gap-8 justify-center items-start">
      <IntroductionCard />
      <BackgroundCard />
    </div>
  );
}

export function RightGrid() {
  return (
    <div className="flex flex-col gap-8 justify-center items-start">
      <GoalsCard />
      <InterestsCard />
    </div>
  );
}

export default function About() {
  return (
    <div className="pb-5 md:pb-10 flex flex-col justify-center items-center">
      <p className="pageTitleTheme">{AboutPageData.title}</p>
      <p className="pt-5 text-base font-normal text-center textSecondaryTheme">
        {AboutPageData.subtitle}
      </p>
      <div className="mt-16 grid md:grid-flow-col sm:grid-flow-row gap-8 justify-start items-start">
        <LeftGrid />
        <RightGrid />
      </div>
    </div>
  );
}
