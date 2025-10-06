"use client";

import React from "react";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
import Button from "./Button";

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/30 before:to-transparent"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 
          text-white bg-clip-text brand-text"
        >
          {title}
        </h1>

        {subtitle && (
          <p className="text-white text-lg md:text-xl mb-4">{subtitle}</p>
        )}

        {buttonText && buttonLink && (
          // <div>
          //   <Link
          //     href={buttonLink}
          //     className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          //   >
          //     <span>{buttonText}</span>
          //     <div className="bg-black text-white rounded-full p-2">
          //       <ArrowRight size={16} />
          //     </div>
          //   </Link>
          // </div>
          <Button
            label={buttonText}
            borderColor="white"
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;