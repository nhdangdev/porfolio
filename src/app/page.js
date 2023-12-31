import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="tw-flex tw-flex-col tw-min-h-screen tw-bg-[#121212]">
      <Navbar />
      <div className="tw-container tw-mx-auto tw-px-12 tw-py-4">
        <HeroSection />
      </div>
    </main>
  );
}
