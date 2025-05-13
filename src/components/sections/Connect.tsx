import Link from "next/link";
import { connectLinks } from "@/data/links";
import ContactForm from "@/components/ContactForm";
import { getAboutData } from "@/lib/api";

export default async function Connect() {
  const aboutData = await getAboutData();

  return (
    <section id="connect" className="sectionTransition py-20">
      <div className="container mx-auto px-8">
        <h2 className="md:text-3xl text-2xl font-bold mb-12 text-center">
          <span className="textGradientColor bg-clip-text">
            Let&apos;s Connect
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-lg shadow-sm">
            <h3 className="textColor md:text-xl text-lg font-bold mb-6 text-center">
              Find me on social media
            </h3>{" "}
            <p className="textSecondaryColor md:text-lg text-md text-center mb-8">
              {aboutData.connect[0]}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {connectLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primaryCardTheme borderColor flex items-center p-4 rounded-lg"
                >
                  <link.icon className="mr-4" size={24} />
                  <div>
                    <div className="textColor text-sm font-semibold">
                      {link.name}
                    </div>
                    <div className="textSecondaryColor font-normal">
                      {link.value}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="borderColor border-t pt-8">
              <h3 className="textColor md:text-xl text-lg font-bold mb-6 text-center">
                Send me a message
              </h3>{" "}
              <p className="textSecondaryColor md:text-lg text-md text-center mb-8">
                {aboutData.connect[1]}
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
