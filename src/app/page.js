import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="tw-flex tw-flex-col tw-min-h-screen tw-bg-[#121212]">
      <Navbar />
      <div className="tw-container tw-mt-24 tw-mx-auto tw-px-12 tw-py-4">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
