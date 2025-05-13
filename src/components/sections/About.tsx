import Image from "next/image";
import { getAboutData } from "@/lib/api";

export default async function About() {
  const aboutData = await getAboutData();

  return (
    <section id="about" className="sectionTransition py-20">
      <div className="container mx-auto px-8">
        <h2 className="md:text-3xl text-2xl font-bold mb-12 text-center">
          <span className="textGradientColor bg-clip-text">About Me</span>
        </h2>
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <p className="textSecondaryColor text-base md:text-lg mb-6">
            {aboutData.description[0]}
          </p>
          <p className="textSecondaryColor text-base md:text-lg mb-6">
            {aboutData.description[1]}
          </p>
          <p className="textSecondaryColor text-base md:text-lg">
            {aboutData.description[2]}
          </p>
          <Image
            src={aboutData.images.bannerWebp || "/placeholder.webp"}
            alt="About Me"
            loading="eager"
            placeholder="blur"
            blurDataURL="/placeholder.webp"
            priority
            width={800}
            height={400}
            className="mt-12 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
