"use client";

import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  name?: string;
  subtitle?: string;
  description?: string | React.ReactNode;
  image?: string; // profile image
  backgroundColor?: string; // background for the card (optional)
  bubbleColor?: string; // background for the description
  textColor?: string;
  className?: string;
  children?: React.ReactNode;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  subtitle,
  description,
  image,
  bubbleColor = "#f8f8f5",
  children,
}) => {
  return (
    <div className="rounded-3xl py-6 md:p-4 text-black">
      {/* Speech Bubble */}
      {description && (
        <div
          className="relative mb-6 bg-[color:var(--bubble)] rounded-2xl p-5 shadow-xl border border-amber-400"
          style={{ backgroundColor: bubbleColor }}
        >
          <p className="text-sm text-left leading-relaxed text-gray-700">
            {description}
          </p>

          {/* Inner triangle: sits on top and matches bubble color */}
          {/* <div
            className="absolute left-8 -bottom-3 w-0 h-0
               border-t-[12px] border-l-[12px] border-r-[12px]
               border-l-transparent border-r-transparent z-10"
            style={{ borderTopColor: bubbleColor }}
            aria-hidden="true"
          /> */}
        </div>
      )}

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        {image && (
          <Image
            width={40}
            height={40}
            src={image}
            alt={name || "Profile image"}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          {name && <h3 className="text-lg text-left font-semibold">{name}</h3>}
          {subtitle && (
            <p className="text-sm text-left text-gray-500">{subtitle}</p>
          )}
        </div>
      </div>

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default TestimonialCard;