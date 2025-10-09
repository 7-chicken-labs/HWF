import HeroSection from "@/components/HeroSection";
import ParallaxSection from "@/components/ParallaxSection";
import PartnerWithUs from "./components/PartnerWithUs";

export default function Home() {
  return (
    <>
      <HeroSection
        title={
          <>
            <span className="">
              Resources for Your 
              <br />
              Wellness Journey
            </span>
          </>
        }
        subtitle="Your wellness journey is personal and it deserves support that meets you where you are"
        backgroundImage="/images/resources-bg.jpg"
      />
      <PartnerWithUs />
      <ParallaxSection
        backgroundImage="/images/resources-bg.jpg"
        title="Feeling Drained by Daily Life? You&apos;re Not Alone."
        subtitle="Late nights. Constant stress. Aches that linger and worries that won&apos;t quit.
When work, family responsibilities, and health demands collide, staying well- physically or
emotionally- can feel out of reach."
        buttonText="Begin Your Wellness Journey"
        buttonLink="/programs"
      />
    </>
  );
}