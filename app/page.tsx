import Features from "@/components/features-2";
import FooterSection from "@/components/footer-one";
import HeroSection from "@/components/hero-section";
import Contact  from "@/components/contact-section-one";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Features/>
      <Contact/>
      <FooterSection/>
    </>
  );
}
