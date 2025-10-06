"use client";

import Image from "next/image";
import React, { useRef } from "react";

interface TwoColumnSectionProps {
  label?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  imageUrl: string; // just pass the URL
  imageAlt?: string;
  bgColor?: string;
  imagePosition?: "left" | "right"; // default right
}

const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({
  label,
  title,
  description,
  imageUrl,
  imageAlt = "Image",
  imagePosition = "right",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 lg:py-24 text-black" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Content (text) */}
          <div
            ref={leftContentRef}
            className={
              imagePosition === "left"
                ? "order-2 lg:order-2"
                : "order-1 lg:order-1"
            }
          >
            {label && (
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-black/40 mb-6">
                <span className="text-sm font-medium uppercase tracking-wide">
                  {label}
                </span>
              </div>
            )}
            <div className="lg:sticky lg:top-8">
              <h2 className="brand-text audiowide text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                {title}
              </h2>
              <p className="text-md leading-relaxed max-w-lg">{description}</p>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div
            ref={rightContentRef}
            className={`space-y-8 lg:space-y-12 ${
              imagePosition === "left"
                ? "order-2 lg:order-1"
                : "order-1 lg:order-2"
            }`}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={1000}
              height={600}
              className="w-full rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;