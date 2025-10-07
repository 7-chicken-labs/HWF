"use client";

import Image from "next/image";
import React from "react";

const HomeCareHero: React.FC = () => {
  return (
    <section className="py-16 text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl">
          {/* Background Image Overlay */}
          <div className="absolute inset-0">
            <Image
            width={1000}
            height={600}
              src={"/images/about-bg.jpg"}
              alt="Home care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 grid md:grid-cols-1 gap-8 p-8 md:p-12 lg:p-16 min-h-[500px] text-white">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center space-y-6 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
              <h2 className="brand-text audiowide text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Our Approach
              </h2>

              <ul className="text-lg leading-relaxed space-y-3 list-disc list-inside pl-3 [text-indent:-1em]">
                <li>
                  Integrative wellness: fitness, mental health, nutrition &
                  preventive care
                </li>
                <li>
                  Personalized coaching powered by tech-enabled assessments
                </li>
                <li>Community outreach & certified wellness partnerships</li>
                <li>Sustainable, inclusive, and locally rooted solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareHero;