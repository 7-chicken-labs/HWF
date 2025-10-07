import HeroSection from "@/components/HeroSection";
import Vision from "./components/Vision";
import TwoColumnSection from "@/components/TwoColumnSection";
import ParallaxSection from "@/components/ParallaxSection";
import HomeCareHero from "./components/HomeCareHero";

export default function Home() {
  return (
    <>
      <HeroSection
        title={
          <>
            <span className="">
              Helping You Thrive,
              <br />
              Not Just Survive
            </span>
          </>
        }
        subtitle="Our mission is to walk alongside you on your journey to vibrant health"
        backgroundImage="/images/about-bg.jpg"
      />
      <Vision />
      <HomeCareHero />
      <TwoColumnSection
        label="About HWF"
        imagePosition="left"
        title={<>Wellness That Feels Like It&apos;s Made for You</>}
        description={
          <>
            HWF isn&apos;t about one-size-fits-all advice or impossible
            routines. It&apos;s about partnering with you - listening,
            understanding, and guiding you toward better health with compassion,
            expertise, and care.
          </>
        }
        imageUrl="/images/home-image-2.jpg"
      />
      <ParallaxSection
        backgroundImage="/images/about-bg.jpg"
        title="Feeling Drained by Daily Life? You're Not Alone."
        subtitle="Late nights. Constant stress. Aches that linger and worries that won't quit.
When work, family responsibilities, and health demands collide, staying well- physically or
emotionally- can feel out of reach."
        buttonText="Begin Your Wellness Journey"
        buttonLink="/programs"
      />
    </>
  );
}