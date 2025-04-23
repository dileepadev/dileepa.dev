import Image from "next/image";
import { experiences } from "@/data/experiences";
import { skills } from "@/data/skills";

const Experience = () => {
  return (
    <section id="experience" className="sectionTransition py-20">
      <div className="container mx-auto px-8">
        <h2 className="md:text-3xl text-2xl font-bold mb-12 text-center">
          <span className="textGradientColor bg-clip-text">
            Work Experience
          </span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((job) => (
            <div
              key={`${job.company}-${job.title}`}
              className="borderConnectorColor relative pl-8 border-l-2 animate-on-scroll"
            >
              <div className="circleGradientColor absolute w-4 h-4 rounded-full -left-[9px]"></div>
              <div className="flex items-start gap-4">
                {/* Desktop Logo */}
                <div className="primaryCardTheme hidden md:block w-16 h-16 relative flex-shrink-0 rounded-md overflow-hidden">
                  {/* Light mode logo */}
                  <Image
                    src={job.logoLightMode || "/placeholder.svg"}
                    alt={`${job.company} logo`}
                    fill
                    className="object-contain p-2 block dark:hidden"
                  />
                  {/* Dark mode logo */}
                  <Image
                    src={
                      job.logoDarkMode ||
                      job.logoLightMode ||
                      "/placeholder.svg"
                    }
                    alt={`${job.company} logo`}
                    fill
                    className="object-contain p-2 hidden dark:block"
                  />
                </div>
                <div className="flex-1">
                  {/* Mobile Logo */}
                  <div className="primaryCardTheme borderColor block md:hidden mb-2 w-12 h-12 relative rounded-md overflow-hidden border">
                    {/* Light mode logo */}
                    <Image
                      src={job.logoLightMode || "/placeholder.svg"}
                      alt={`${job.company} logo`}
                      fill
                      className="object-contain p-1 block dark:hidden"
                    />
                    {/* Dark mode logo */}
                    <Image
                      src={
                        job.logoDarkMode ||
                        job.logoLightMode ||
                        "/placeholder.svg"
                      }
                      alt={`${job.company} logo`}
                      fill
                      className="object-contain p-1 hidden dark:block"
                    />
                  </div>
                  <h3 className="textColor md:text-lg text-base font-bold">
                    {job.title}
                  </h3>
                  <div className="mb-2">
                    <div className="textButtonColor buttonTransition text-sm md:text-base flex items-center">
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {job.company}
                      </a>
                    </div>
                    <div className="textSecondaryColor text-sm md:text-base">
                      {job.period}
                    </div>
                  </div>
                  <p className="textSecondaryColor text-sm md:text-base mb-3">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="primaryCardTheme shadow-sm px-3 py-1 text-xs md:text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="md:text-2xl text-xl font-bold text-center mt-20 mb-6 animate-on-scroll">
          <span className="textGradientColor bg-clip-text">
            Technologies I Regularly Work With
          </span>
        </h3>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-on-scroll">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="primaryCardTheme shadow-sm p-4 rounded-lg flex flex-col items-center justify-center"
            >
              <div className="mb-2 h-10 w-10 relative">
                {" "}
                <Image
                  src={skill.imageUrl}
                  alt={`${skill.label} logo`}
                  loading="eager"
                  priority
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-base font-medium">{skill.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
