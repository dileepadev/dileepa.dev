import Image from "next/image";
import CTAButton from "../CTAButton";
import { getAboutData } from "@/lib/api";

export default async function Hero() {
  const aboutData = await getAboutData();
  return (
    <section
      id="hero"
      className="pt-10 pb-20 md:pt-16 md:pb-32 container mx-auto px-4"
    >
      <div className="flex flex-col items-center text-center">
        {/* Profile Image at the top */}
        <div className="mb-10 animate-on-scroll">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <Image
              src={aboutData.images.profileWebp || "/placeholder.webp"}
              alt="Dileepa Bandara"
              loading="eager"
              placeholder="blur"
              blurDataURL="/placeholder.webp"
              priority
              width={800}
              height={800}
              className="object-cover"
            />
          </div>
        </div>

        {/* Text content below the image */}
        <div className="animate-on-scroll max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="textGradientColor bg-clip-text">
              {aboutData.name}
            </span>
          </h1>
          <p className="textSecondaryColor md:text-xl text-lg mb-8 leading-relaxed">
            I&#39;m an Associate AI Engineer passionate about building
            intelligent solutions that make a difference.
          </p>
          <div className="flex gap-4 justify-center">
            <CTAButton href="#connect">Get in Touch</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
