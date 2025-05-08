import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/components/sections/About";
import Community from "@/components/sections/Community";
import Connect from "@/components/sections/Connect";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-8 md:pt-4">
        <Hero />
        <hr className="gradientDividerTheme" />
        <About />
        <hr className="gradientDividerTheme" />
        <Experience />
        <hr className="gradientDividerTheme" />
        <Education />
        <hr className="gradientDividerTheme" />
        <Community />
        <hr className="gradientDividerTheme" />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
