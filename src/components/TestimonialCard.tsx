"use client";

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
    <div
      className="rounded-3xl p-4 text-black"
    >
      {/* Speech Bubble */}
      {description && (
        <div className="relative mb-6 bg-[color:var(--bubble)] rounded-2xl p-5"
          style={{ backgroundColor: bubbleColor }}
        >
          <p className="text-sm text-left leading-relaxed text-gray-700">{description}</p>

          {/* Speech bubble tail */}
          <div
            className="absolute left-8 -bottom-3 w-0 h-0 border-t-[12px] border-t-[color:var(--bubble)] border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent"
            style={{
              borderTopColor: bubbleColor,
            }}
          />
        </div>
      )}

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        {image && (
          <img
            src={image}
            alt={name || "Profile image"}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          {name && <h3 className="text-lg text-left font-semibold">{name}</h3>}
          {subtitle && <p className="text-sm text-left text-gray-500">{subtitle}</p>}
        </div>
      </div>

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default TestimonialCard;
