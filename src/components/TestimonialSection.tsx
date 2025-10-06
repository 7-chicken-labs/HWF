"use client";

import React from "react";
import TestimonialCard from "./TestimonialCard";

export interface Testimonial {
  name: string;
  subtitle?: string;
  description: string | React.ReactNode;
  image?: string;
}

interface TestimonialSectionProps {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  testimonials: Testimonial[];
  className?: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  title = "What Our Clients Are Saying",
  subtitle = "Testimonials",
  testimonials,
}) => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:text-center text-black">
        {subtitle && (
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-black/40 mb-6">
            <span className="text-sm font-medium uppercase tracking-wide">
              {subtitle}
            </span>
          </div>
        )}
        <div className="lg:top-8">
          <h2 className="brand-text audiowide text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              name={t.name}
              subtitle={t.subtitle}
              description={t.description}
              image={t.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;