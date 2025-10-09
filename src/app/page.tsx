import HeroSection from "@/components/HeroSection";
import ParallaxSection from "@/components/ParallaxSection";
import TestimonialSection, {
  Testimonial,
} from "@/components/TestimonialSection";
import TwoColumnSection from "@/components/TwoColumnSection";
import WhyChooseHWF from "./WhyChooseHWF";

export default function Home() {
  const testimonials: Testimonial[] = [
    {
      name: "Mia Thompson",
      subtitle: "63% improvement",
      description:
        "Mia personalized her wellness journey with our guidance, gradually boosting her energy, focus, and overall balance. Today, she feels empowered and more in control of her life.",
      image: "/images/home-bg.jpg",
    },
    {
      name: "James Rivera",
      subtitle: "Energy restored",
      description:
        "James overcame chronic fatigue by following our holistic wellness program. With structured routines and mindful practices, he regained his energy and enthusiasm for life.",
      image: "/images/home-bg.jpg",
    },
    {
      name: "Sophie Lee",
      subtitle: "Better sleep & focus",
      description:
        "Sophie improved her sleep, focus, and calmness through our personalized coaching. Small daily changes helped her regain control of her health and wellbeing.",
      image: "/images/home-bg.jpg",
    },
  ];

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

      <TwoColumnSection
        title={<>You Deserve More Than Survival. You Deserve to Thrive</>}
        description={
          <>
            We believe everyone deserves to feel vibrant, grounded, and
            supported. At HWF, we&apos;re not here to “fix” you. We&apos;re here
            to walk with you - toward a life that feels lighter, healthier, and
            more joyful.
            <br />
            <br />
            But here&apos;s the good news: you don&apos;t have to power through
            alone. At HWF, we understand the challenges of modern urban living,
            and we&apos;re here to support you with real solutions for real life.
          </>
        }
        imageUrl="/images/home-image-1.jpg"
        imagePosition="left"
      />

      <TwoColumnSection
        label="About HWF"
        imagePosition="right"
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

      <WhyChooseHWF />

      <ParallaxSection
        backgroundImage="/images/home-bg.jpg"
        title="Feeling Drained by Daily Life? You&apos;re Not Alone."
        subtitle="Late nights. Constant stress. Aches that linger and worries that won&apos;t quit.
When work, family responsibilities, and health demands collide, staying well- physically or
emotionally- can feel out of reach."
        buttonText="Begin Your Wellness Journey"
        buttonLink="/programs"
      />

      <TestimonialSection testimonials={testimonials} />
    </>
  );
}