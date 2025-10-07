import React from "react";
import {Target, Eye, Flag } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface VisionProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Our Mission",
    description:
      "To empower individuals and communities with holistic wellness solutions making balanced, healthy living accessible to all urban residents.",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Our Vision",
    description:
      "A healthier, happier India where every person enjoys physical vitality, mental peace, and social well-being through community driven care.",
  },
  {
    icon: <Flag className="w-8 h-8" />,
    title: "Our Goals",
    description:
      "To foster holistic well-being in individuals and communities by promoting physical health, mental resilience, and social harmony through sustainable and inclusive wellness initiatives.",
  },
];

const Vision: React.FC<VisionProps> = ({ features = defaultFeatures }) => {
  return (
    <section className={`py-16 px-4 max-w-6xl mx-auto text-black`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#f8f8f5] rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0  mt-1">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-3 ">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;