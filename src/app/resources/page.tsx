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
              Wellness That Feels.
              <br />
              Like It&apos;s Made for You.
            </span>
          </>
        }
        subtitle="No quick fixes. No judgment. Just real support for real life"
        backgroundImage="/images/home-bg.jpg"
        buttonText="Being your wellness journey"
        buttonLink="/programs"
      />
      <PartnerWithUs />
      <ParallaxSection
        backgroundImage="/images/home-bg.jpg"
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