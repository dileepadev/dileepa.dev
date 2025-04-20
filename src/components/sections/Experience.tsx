import Image from "next/image";
import { experiences } from "@/data/experiences";
import { skills } from "@/data/skills";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-white transition-all duration-300"
    >
      <div className="container mx-auto px-8">
        <h2 className="md:text-3xl text-2xl font-bold mb-12 text-center text-gray-900">
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((job) => (
            <div
              key={`${job.company}-${job.title}`}
              className="relative pl-8 border-l-2 border-gray-300 animate-on-scroll"
            >
              <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px] top-1"></div>
              <div className="flex items-start gap-4">
                {/* Desktop Logo */}
                <div className="hidden md:block w-16 h-16 relative flex-shrink-0 bg-white rounded-md overflow-hidden border border-gray-200">
                  <Image
                    src={job.logo || "/placeholder.svg"}
                    alt={`${job.company} logo`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  {/* Mobile Logo */}
                  <div className="block md:hidden mb-2 w-12 h-12 relative bg-white rounded-md overflow-hidden border border-gray-200">
                    <Image
                      src={job.logo || "/placeholder.svg"}
                      alt={`${job.company} logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <h3 className="md:text-lg text-base font-bold text-gray-900">
                    {job.title}
                  </h3>
                  <div className="mb-2">
                    <div className="md:text-lg text-base text-gray-700 font-medium flex items-center">
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors duration-200"
                      >
                        {job.company}
                      </a>
                    </div>
                    <div className="text-sm md:text-base text-gray-500">
                      {job.period}
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 mb-3">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm md:text-base rounded-full"
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
        <p className="text-center md:text-2xl text-xl text-gray-700 font-bold mt-20 mb-6 animate-on-scroll">
          Technologies I Regularly Work With
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-on-scroll">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="bg-white p-4 rounded-lg shadow-sm bg-gradient-card flex flex-col items-center justify-center"
            >
              <div className="mb-2 h-10 w-10 relative">
                {" "}
                {/* Container for sizing */}
                <Image
                  src={skill.imageUrl}
                  alt={`${skill.label} logo`}
                  loading="eager"
                  priority
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-base text-gray-700 font-medium">
                {skill.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
