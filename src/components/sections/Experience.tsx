import Image from "next/image";
import { getExperiencesData, getToolsData } from "@/lib/api";

export default async function Experience() {
  const experienceData = await getExperiencesData();
  const toolsData = await getToolsData();
  return (
    <section id="experience" className="sectionTransition py-20">
      <div className="container mx-auto px-8">
        <h2 className="md:text-3xl text-2xl font-bold mb-12 text-center">
          <span className="textGradientColor bg-clip-text">
            Work Experience
          </span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {experienceData.map((job) => (
            <div
              key={job._id}
              className="borderConnectorColor relative pl-8 border-l-2 animate-on-scroll"
            >
              <div className="circleGradientColor absolute w-3 h-3 rounded-full -left-[7px]"></div>
              <div className="flex items-start gap-4">
                {/* Desktop Logo */}
                <div className="primaryCardTheme hidden md:block w-20 h-20 relative flex-shrink-0 rounded-md overflow-hidden">
                  {/* Light mode logo */}
                  <Image
                    src={job.logo.dark || "/placeholder.webp"}
                    alt={`${job.company} logo`}
                    loading="eager"
                    fill
                    className="object-contain p-2 block dark:hidden"
                  />
                  {/* Dark mode logo */}
                  <Image
                    src={job.logo.light || job.logo.dark || "/placeholder.webp"}
                    alt={`${job.company} logo`}
                    loading="eager"
                    fill
                    className="object-contain p-2 hidden dark:block"
                  />
                </div>
                <div className="flex-1">
                  {/* Mobile Logo */}
                  <div className="primaryCardTheme borderColor block md:hidden mb-4 w-18 h-18 relative rounded-md overflow-hidden border">
                    {/* Light mode logo */}
                    <Image
                      src={job.logo.dark || "/placeholder.webp"}
                      alt={`${job.company} logo`}
                      loading="eager"
                      fill
                      className="object-contain p-1 block dark:hidden"
                    />
                    {/* Dark mode logo */}
                    <Image
                      src={
                        job.logo.light || job.logo.dark || "/placeholder.webp"
                      }
                      alt={`${job.company} logo`}
                      loading="eager"
                      fill
                      className="object-contain p-1 hidden dark:block"
                    />
                  </div>
                  <h3 className="textColor md:text-lg text-base font-bold">
                    {job.title}
                  </h3>
                  <div className="mb-2">
                    <div className="textSecondaryColor text-sm md:text-base">
                      {job.company}
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
          {toolsData.map((tool) => (
            <div
              key={tool._id}
              className="primaryCardTheme shadow-sm p-4 rounded-lg flex flex-col items-center justify-center"
            >
              <div className="mb-2 h-10 w-10 relative">
                {" "}
                <Image
                  src={tool.logo.dark || "/placeholder.webp"}
                  alt={`${tool.name} logo`}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="/placeholder.webp"
                  priority
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-base font-medium">{tool.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
