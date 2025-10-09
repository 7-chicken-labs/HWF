import HeroSection from "@/components/HeroSection";
import ParallaxSection from "@/components/ParallaxSection";
import ContactUsPage from "./components/ContactUsPage";

export default function Home() {
  return (
    <>
      <HeroSection
        title={
          <>
            <span className="">
              We&apos;d Love to 
              <br />
               Hear From You
            </span>
          </>
        }
        subtitle="Reach out with any questions or thoughts real conversations are where every journey begins."
        backgroundImage="/images/contact-bg.jpg"
      />
      <ContactUsPage />
      <ParallaxSection
        backgroundImage="/images/contact-bg.jpg"
        title="You Deserve to Feel Like Yourself Again."
        subtitle="Your path to lasting well-being starts here - guided by certified coaches who understand your pace, your goals, and your life."
        buttonText="Join a Program"
        buttonLink="/programs"
      />
    </>
  );
}