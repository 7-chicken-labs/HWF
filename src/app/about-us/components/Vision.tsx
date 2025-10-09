"use client"

import React from "react";
import { Target, Eye, Flag } from "lucide-react";

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
      "A healthier, happier India where every person enjoys physical vitality, mental peace, and social well-being through community-driven care.",
  },
  {
    icon: <Flag className="w-8 h-8" />,
    title: "Our Goals",
    description:
      "To foster holistic well-being in individuals and communities by promoting physical health, mental resilience, and social harmony through sustainable initiatives.",
  },
];

const Vision: React.FC<VisionProps> = ({ features = defaultFeatures }) => {

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-8 shadow-md transition-all duration-300 border-2 border-amber-400`}
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

export default Vision;
