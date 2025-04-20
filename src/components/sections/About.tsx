const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 transition-all duration-300"
    >
      <div className="container mx-auto px-8">
        <h2 className="md:text-3xl text-2xl font-bold mb-12 text-center text-gray-900">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <p className="text-base md:text-lg mb-6 text-gray-800">
            I&apos;m an Associate AI Engineer with expertise in artificial
            intelligence, software development, and cloud computing. I enjoy
            solving real-world problems through code and building impactful
            solutions that improve people&apos;s lives.
          </p>
          <p className="text-base md:text-lg mb-6 text-gray-800">
            With hands-on experience in Python, TypeScript, and Azure, I
            specialize in designing and deploying AI systems that deliver real
            business value. I am particularly interested in the intersection of
            AI and human-computer interaction, focusing on creating technologies
            that enhance human capabilities rather than replace them.
          </p>
          <p className="text-base md:text-lg text-gray-800">
            Outside of work, I explore research, contribute to open-source
            projects, and stay up to date with the latest in AI. I also enjoy
            giving back to the community by volunteering, sharing knowledge, and
            creating content to help others grow and reach their goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
