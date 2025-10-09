"use client"

import React from "react";
import { MessageCircle, Target, Users, Sprout } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyChooseHWFProps {
  features?: Feature[];
  className?: string;
}

const defaultFeatures: Feature[] = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Relief That Fits Your Routine",
    description:
      "Whether it's chronic pain, fatigue, anxiety, or habits that hold you back, our wellness coaches meet you where you are with guidance that works for your schedule and lifestyle.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Your Goals, Your Way",
    description:
      "Better sleep. More energy. A calmer mind. Time for your loved ones. Whatever your goals, we help you make steady progress through simple, effective steps—not judgment or generic advice.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Support That Sticks With You",
    description:
      "Change can be hard. That's why we're with you every step of the way. Our coaches check in regularly, offer motivation, and celebrate your wins—even the small ones.",
  },
  {
    icon: <Sprout className="w-8 h-8" />,
    title: "Rediscover Joy and Confidence",
    description:
      "Wellness isn't just about fixing problems—it's about feeling good again. We help you rebuild self-belief, reduce negativity, and reconnect with what truly matters.",
  },
];

const WhyChooseHWF: React.FC<WhyChooseHWFProps> = ({
  features = defaultFeatures,
  className = "",
}) => {
  // const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className={`py-16 px-4 max-w-6xl mx-auto ${className} text-black`}>
      <h2 className="brand-text audiowide text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight md:text-center mb-8">
        Why Choose HWF?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-8 shadow-md transition-all duration-300 border-2 border-amber-400`}
            // onMouseEnter={() => setHoveredFeature(index)}
            // onMouseLeave={() => setHoveredFeature(null)}
          >
            <div
              className={`inline-flex p-3 rounded-xl mb-4 transition-all duration-300 bg-amber-100 text-amber-600`}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseHWF;