"use client";
import React, { useEffect, useRef, useState } from "react";
import { Globe, Users, Microscope, Cpu, Zap } from "lucide-react";

const keyHighlights = [
  {
    icon: Cpu,
    title: "Advanced AI Integration",
    description:
      "Cutting-edge artificial intelligence techniques revolutionizing diagnostic accuracy and research methodologies.",
    color: "#9C6FDE",
    details: [
      "Machine Learning algorithms",
      "Predictive analytics",
      "Automated research insights",
    ],
  },
  {
    icon: Users,
    title: "Interdisciplinary Networking",
    description:
      "Unprecedented opportunity to connect with global leaders in biomedical research and technological innovation.",
    color: "#FF6B9E",
    details: [
      "Expert panel discussions",
      "Collaborative workshops",
      "Cross-domain knowledge exchange",
    ],
  },
  {
    icon: Globe,
    title: "Global Research Perspectives",
    description:
      "Comprehensive insights into international trends and breakthrough medical research across continents.",
    color: "#4ECDC4",
    details: [
      "International case studies",
      "Emerging global health technologies",
      "Cross-cultural research approaches",
    ],
  },
  {
    icon: Microscope,
    title: "Innovative Research Methodologies",
    description:
      "Exploring groundbreaking approaches that are transforming biomedical research and medical diagnostics.",
    color: "#FF6947",
    details: [
      "Advanced data analysis techniques",
      "Computational biology",
      "Next-generation research tools",
    ],
  },
];

const KeyHighlights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-6 py-16 bg-gray-50"
    >
      <div className="text-center mb-12">
        <h2
          className="
            text-4xl font-extrabold mb-4
            bg-gradient-to-r from-[#9C6FDE] to-[#FF6B9E]
            text-transparent bg-clip-text
          "
        >
          Conference Key Highlights
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the transformative power of interdisciplinary research and
          cutting-edge technologies shaping the future of biomedicine.
        </p>
      </div>

      <div
        className={`
          grid md:grid-cols-2 lg:grid-cols-4 gap-8 
          transition-all duration-1000 ease-out
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
        `}
      >
        {keyHighlights.map((highlight, index) => (
          <div
            key={index}
            className="
              bg-white p-6 rounded-3xl 
              shadow-lg group overflow-hidden
              relative border border-gray-100
              transform transition-all duration-300 
              hover:-translate-y-3 hover:shadow-xl
              flex flex-col
            "
          >
            {/* Animated Background Gradient */}
            <div
              className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
              style={{
                background: `linear-gradient(135deg, ${highlight.color}20, transparent 70%)`,
              }}
            />

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div
                className="
                  w-20 h-20 rounded-full 
                  flex items-center justify-center
                  shadow-md transform transition-transform group-hover:scale-110
                "
                style={{
                  background: `linear-gradient(135deg, ${highlight.color}20, ${highlight.color}50)`,
                  boxShadow: `0 4px 15px ${highlight.color}30`,
                }}
              >
                <highlight.icon
                  className="w-10 h-10"
                  style={{ color: highlight.color }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center flex-grow">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {highlight.title}
              </h3>
              <p className="text-gray-600 mb-4">{highlight.description}</p>

              {/* Detailed Points */}
              <div className="space-y-2 text-sm text-gray-500">
                {highlight.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center space-x-2"
                  >
                    <Zap
                      className="w-4 h-4 opacity-50"
                      style={{ color: highlight.color }}
                    />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyHighlights;
