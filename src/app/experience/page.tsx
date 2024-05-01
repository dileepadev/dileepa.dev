import ItemCards from "@/components/ItemCards";
import SectionTitle from "@/components/SectionTitle";
import textData from "@/constants/textData";
import Link from "next/link";
import { PageLinks } from "@/constants/links";

export default function Experience() {
  return (
    <div>
      <section key="Work">
        <SectionTitle
          title="Professional Journey"
          subTitle={textData.experiencePageData.subtitle.work}
        />
        <ItemCards.iconCard
          listItems={textData.experiencePageData.work}
          page="Experience"
        />
      </section>
      <hr className="my-12 gradientDivider" />
      <section key="Projects" className="mt-16">
        <SectionTitle
          title="Featured Projects"
          subTitle={textData.experiencePageData.subtitle.projects}
        />
        <ItemCards.projectSmallCard
          listItems={textData.experiencePageData.projects}
        />
        <div className="text-center">
          <p className="mt-8 text-center">
            Interesting to see more projects?{" "}
            <span className="block md:inline sm:inline">
              Check out all my projects here.
            </span>
          </p>
          <button
            type="submit"
            className="mt-5 pt-2 pb-2 ps-6 pe-6 rounded-xl buttonTheme transitionButtonTheme"
          >
            <Link href={PageLinks.experience.projects}>View All Projects</Link>
          </button>
        </div>
      </section>
      <hr className="my-12 gradientDivider" />
      <section key="Tools & Technologies" className="mt-16">
        <SectionTitle
          title="Tools & Technologies"
          subTitle={textData.experiencePageData.subtitle.tools}
        />
        <p className="mt-8 text-md font-semibold textTheme text-center">
          Frontend & Backend Development
        </p>
        <ItemCards.toolsSmallCard
          listItems={textData.experiencePageData.toolsFrontBack}
        />
        <p className="mt-8 text-md font-semibold textTheme text-center">
          Cloud, BaaS, Database & CI/CD Management
        </p>
        <ItemCards.toolsSmallCard
          listItems={textData.experiencePageData.toolsCloud}
        />
        <p className="mt-8 text-md font-semibold textTheme text-center">
          Artificial Intelligence & Machine Learning
        </p>
        <ItemCards.toolsSmallCard
          listItems={textData.experiencePageData.toolsAIML}
        />
        <p className="mt-8 text-md font-semibold textTheme text-center">
          Code Editors & IDEs
        </p>
        <ItemCards.toolsSmallCard
          listItems={textData.experiencePageData.toolsCode}
        />
        <p className="mt-8 text-md font-semibold textTheme text-center">
          Project Management & Designing
        </p>
        <ItemCards.toolsSmallCard
          listItems={textData.experiencePageData.toolsPM}
        />
        <p className="mt-16 text-center textSecondaryTheme">
          Hey! I&apos;m not an expert in all of these, but I&apos;m continuously
          learning ✌🏽💖
        </p>
      </section>
      <hr className="my-12 gradientDivider" />
      <section key="Volunteering" className="mt-16">
        <SectionTitle
          title="Community Engagement"
          subTitle={textData.experiencePageData.subtitle.volunteer}
        />
        <ItemCards.iconCard
          listItems={textData.experiencePageData.volunteer}
          page="Volunteering"
        />
      </section>
    </div>
  );
}
