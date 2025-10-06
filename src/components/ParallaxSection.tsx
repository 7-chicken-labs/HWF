"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";

interface ParallaxSectionProps {
  backgroundImage: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
  overlayGradient?: string; // optional for customization
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink,
}) => {
  return (
    <section
      className="relative w-full flex items-center justify-center bg-scroll md:bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 md:text-center text-white max-w-6xl px-4 space-y-6 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] py-40">
        <h2 className="text-3xl md:text-4xl brand-text">{title}</h2>

        {subtitle && <p className="text-md leading-relaxed max-w-3xl">{subtitle}</p>}

        {buttonText && buttonLink && (
          <Link
            href={buttonLink}
          >
            <Button label={buttonText} borderColor="white" />
          </Link>
        )}
      </div>
    </section>
  );
};

export default ParallaxSection;