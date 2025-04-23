import Image from "next/image";
import Link from "next/link";
import { educationData } from "@/data/education";

const Education = () => {
  return (
    <section id="education" className="sectionTransition py-20">
      <div className="container mx-auto px-8">
        <h2 className="md:text-3xl text-2xl font-bold mb-12 text-center">
          <span className="textGradientColor bg-clip-text">Work Education</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {educationData.map((edu) => (
            <div
              key={edu.course}
              className="borderConnectorColor relative pl-8 border-l-2 animate-on-scroll"
            >
              <div className="circleGradientColor absolute w-4 h-4 rounded-full -left-[9px]"></div>
              <div className="flex items-start gap-4">
                {/* Desktop Logo */}
                <div className="primaryCardTheme hidden md:block w-16 h-16 relative flex-shrink-0 rounded-md overflow-hidden">
                  {/* Light mode logo */}
                  <Image
                    src={edu.logoLightMode || "/placeholder.svg"}
                    alt={`${edu.institution} logo`}
                    fill
                    className="object-contain p-2 block dark:hidden"
                  />
                  {/* Dark mode logo */}
                  <Image
                    src={
                      edu.logoDarkMode ||
                      edu.logoLightMode ||
                      "/placeholder.svg"
                    }
                    alt={`${edu.institution} logo`}
                    fill
                    className="object-contain p-2 hidden dark:block"
                  />
                </div>
                <div className="flex-1">
                  {/* Mobile Logo */}
                  <div className="primaryCardTheme borderColor block md:hidden mb-2 w-12 h-12 relative rounded-md overflow-hidden border">
                    {/* Light mode logo */}
                    <Image
                      src={edu.logoLightMode || "/placeholder.svg"}
                      alt={`${edu.institution} logo`}
                      fill
                      className="object-contain p-1 block dark:hidden"
                    />
                    {/* Dark mode logo */}
                    <Image
                      src={
                        edu.logoDarkMode ||
                        edu.logoLightMode ||
                        "/placeholder.svg"
                      }
                      alt={`${edu.institution} logo`}
                      fill
                      className="object-contain p-1 hidden dark:block"
                    />
                  </div>
                  <h3 className="textColor md:text-lg text-base font-bold">
                    {edu.course}
                  </h3>
                  <div className="mb-2">
                    <div className="textButtonColor buttonTransition text-sm md:text-base flex items-center">
                      <Link
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {edu.institution}
                      </Link>
                    </div>
                    <div className="textSecondaryColor text-sm md:text-base">
                      {edu.period}
                    </div>
                  </div>
                  <p className="textSecondaryColor text-sm md:text-base mb-3">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
