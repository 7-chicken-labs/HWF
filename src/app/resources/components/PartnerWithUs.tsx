"use client"

import React from "react";
import { MessageCircle, Handshake, Building, Lightbulb } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PartnerWithUsProps {
  features?: Feature[];
  className?: string;
}

const defaultFeatures: Feature[] = [
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Coaching & Event Partnerships",
    description:
      "Collaborate with us to design meaningful coaching experiences and wellness events that drive real engagement and positive change.",
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Corporate Wellness Integration",
    description:
      "Bring holistic wellness into your workplace with customized programs that support mental health, productivity, and employee happiness.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Technology & Innovation Support",
    description:
      "Leverage data-driven insights, AI tools, and digital platforms to deliver smarter, scalable wellness solutions for individuals and organizations.",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Real Stories from Partners",
    description:
      "See how our current partners are creating meaningful impact through collaboration, innovation, and a shared vision for well-being.",
  },
];


const PartnerWithUs: React.FC<PartnerWithUsProps> = ({
  features = defaultFeatures,
  className = "",
}) => {
  // const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className={`py-16 px-4 max-w-6xl mx-auto ${className} text-black`}>
      <h2 className="brand-text audiowide text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight md:text-center mb-4">
        Partner With Us
      </h2>

      <p className="text-md leading-relaxed text-center mb-8">Let’s build a healthier India-together!
Whether you&apos;re a coach, company, NGO, or tech innovator, we invite you to co-create impact.</p>

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

export default PartnerWithUs;