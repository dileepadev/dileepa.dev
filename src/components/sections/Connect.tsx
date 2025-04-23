import { connectLinks } from "@/data/links";
import Link from "next/link";

const Connect = () => {
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
              I love meeting new people and sharing meaningful moments. Feel
              free to follow, leave a comment, or just say hello on any of the
              platforms below!
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
                Whether you have a question, an idea, or just want to reach out,
                I&apos;d love to hear from you. Drop me a message anytime!
              </p>
              <form className="space-y-4 animate-on-scroll">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="textColor block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="textFieldTheme w-full px-4 py-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="textColor block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="textFieldTheme w-full px-4 py-2"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="textColor block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="textFieldTheme w-full px-4 py-2"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="textColor block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="textFieldTheme w-full px-4 py-2"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="buttonColor buttonTransition w-full py-3 rounded-md cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
