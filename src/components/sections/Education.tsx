import Image from "next/image";
import Link from "next/link";
import { educationData } from "@/data/education";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gray-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="md:text-3xl text-2xl font-bold mb-12 text-center text-gray-900">
          Education
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {educationData.map((edu) => (
            <div
              key={edu.course}
              className="relative pl-8 border-l-2 border-gray-300 animate-on-scroll"
            >
              <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px] top-1"></div>
              <div className="flex items-start gap-4">
                <div className="hidden md:block w-16 h-16 relative flex-shrink-0 bg-white rounded-md overflow-hidden border border-gray-200">
                  <Image
                    src={edu.logo || "/placeholder.svg"}
                    alt={`${edu.institution} logo`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <div className="block md:hidden mb-2 w-12 h-12 relative bg-white rounded-md overflow-hidden border border-gray-200">
                    <Image
                      src={edu.logo || "/placeholder.svg"}
                      alt={`${edu.institution} logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <h3 className="md:text-lg text-base font-bold text-gray-900">
                    {edu.course}
                  </h3>
                  <div className="mb-2">
                    <div className="md:text-lg text-base text-gray-700 font-medium flex items-center">
                      <Link
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-black transition-colors duration-300"
                      >
                        {edu.institution}
                      </Link>
                    </div>
                    <div className="text-sm md:text-base text-gray-500">
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 mb-3">
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
