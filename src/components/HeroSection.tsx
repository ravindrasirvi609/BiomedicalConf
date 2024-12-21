"use client";
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Brain,
  Microscope,
  Calendar,
  MapPin,
} from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#f4f4f4] to-[#f0f0f0] overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[size:40px_40px] bg-[linear-gradient(to_right,rgba(156,111,222,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(156,111,222,0.1)_1px,transparent_1px)]"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 opacity-20">
        <Brain className="w-32 h-32 text-[#9C6FDE]" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <Microscope className="w-32 h-32 text-[#FF6B9E]" />
      </div>

      {/* Hero Content */}
      <div
        className={`
        container mx-auto px-6 z-10 text-center 
        transform transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title with Gradient and Animated Reveal */}
          <h1
            className="
              text-6xl font-extrabold mb-6 
              bg-gradient-to-r from-[#9C6FDE] to-[#FF6B9E] 
              text-transparent bg-clip-text 
              animate-gradient-x
            "
          >
            Advancing Biomedical Research
          </h1>

          {/* Subheadline with Modern Typography */}
          <p
            className="
            text-2xl max-w-3xl mx-auto mb-10 
            text-gray-700 leading-relaxed 
            tracking-tight font-medium
          "
          >
            Pioneering the Convergence of Artificial Intelligence, Machine
            Learning, and Cutting-Edge Medical Innovation
          </p>

          {/* Conference Details Highlight */}
          <div
            className="
            flex flex-wrap justify-center 
            items-center gap-4 mb-10 
            text-gray-600
          "
          >
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-[#9C6FDE]" />
              <span>March 7-8, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-[#FF6B9E]" />
              <span>Ooty, Tamil Nadu</span>
            </div>
          </div>

          <div>
            <p className="text-[#FF6B9E]">
              <strong>
                Selected Research articles will be published in Scopus Indexed
                Journal Malaysian Journal of Medicine and Health Sciences
                (MJMHS)
              </strong>
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center space-x-4">
            <a
              href="#details"
              className="
                bg-gradient-to-r from-[#FF6B9E] to-[#9C6FDE] 
                text-white px-8 py-4 rounded-full 
                flex items-center 
                hover:shadow-xl hover:scale-105 
                transition-all duration-300 
                group
              "
            >
              Conference Details
              <ChevronRight
                className="
                  ml-2 
                  group-hover:translate-x-1 
                  transition-transform
                "
              />
            </a>
            <a
              href="#Abstract"
              className="
                border-2 border-[#9C6FDE] 
                text-[#9C6FDE] 
                px-8 py-4 rounded-full 
                flex items-center 
                hover:bg-[#9C6FDE]/10 
                transition-all duration-300 
                group
              "
            >
              Abstract submission
              <ArrowRight
                className="
                  ml-2 
                  group-hover:translate-x-1 
                  transition-transform
                "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
