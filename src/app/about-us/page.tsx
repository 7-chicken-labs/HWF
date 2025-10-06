import HeroSection from "@/components/HeroSection";

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
    </>
  );
}