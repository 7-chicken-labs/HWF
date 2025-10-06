import HeroSection from "@/components/HeroSection";

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
    </>
  );
}