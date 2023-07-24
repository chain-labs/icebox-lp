import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveSection from "@/components/InteractiveSection";
import dynamic from "next/dynamic";
import ThawBox from "@/components/ThawBox";
import Footer from "@/components/Footer";

const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <p>Loading...</p>,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <InteractiveSection />
      <Gallery />
      <ThawBox />
      <Footer />
    </main>
  );
}
