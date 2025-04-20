import { connectLinks } from "@/data/links";

const Connect = () => {
  return (
    <section
      id="connect"
      className="py-20 bg-gray-100 transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-neutral-900">
          Let&apos;s Connect
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="md:text-xl text-lg text-neutral-800 font-bold mb-6 text-center">
              Find me on social media
            </h3>{" "}
            <p className="md:text-lg text-md text-center text-neutral-800 mb-8">
              I love meeting new people and sharing meaningful moments. Feel
              free to follow, leave a comment, or just say hello on any of the
              platforms below!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {connectLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors"
                >
                  <link.icon className="text-gray-700 mr-3" size={24} />
                  <div>
                    <div className="text-sm font-semibold text-neutral-800">
                      {link.name}
                    </div>
                    <div className="font-normal text-neutral-800">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="md:text-xl text-lg text-neutral-800 font-bold mb-6 text-center">
                Send me a message
              </h3>{" "}
              <p className="md:text-lg text-md text-center text-neutral-800 mb-8">
                Whether you have a question, an idea, or just want to reach out,
                I&apos;d love to hear from you. Drop me a message anytime!
              </p>
              <form className="space-y-4 animate-on-scroll">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all text-neutral-900 placeholder:text-neutral-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all text-neutral-900 placeholder:text-neutral-600"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all text-neutral-900 placeholder:text-neutral-600"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all text-neutral-900 placeholder:text-neutral-600"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors cursor-pointer"
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
