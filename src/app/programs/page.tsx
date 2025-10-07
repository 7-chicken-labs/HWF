import HeroSection from "@/components/HeroSection";
import ParallaxSection from "@/components/ParallaxSection";
import WellnessSection from "./components/WellnessSection";

export default function Home() {
  return (
    <>
      <HeroSection
        title={
          <>
            <span className="">
              Coaching Programs
              <br />
               That Transform Lives
            </span>
          </>
        }
        subtitle="Our programs help you build real coaching skills and create lasting impact."
        backgroundImage="/images/program-bg.jpg"
      />
      <WellnessSection />
      <ParallaxSection
        backgroundImage="/images/program-bg.jpg"
        title="You Deserve to Feel Like Yourself Again."
        subtitle="Your path to lasting well-being starts here - guided by certified coaches who understand your pace, your goals, and your life."
        buttonText="Join a Program"
        buttonLink="/programs"
      />
    </>
  );
}