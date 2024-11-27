import React from "react";
import { Award, Brain, Microscope, CloudCog, Stethoscope } from "lucide-react";

type ThemeCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
};

const ThemeCard: React.FC<ThemeCardProps> = ({
  icon: Icon,
  title,
  description,
  bgColor,
  textColor,
}) => (
  <div
    className={`${bgColor} p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}
  >
    <div className={`mb-6 flex items-center justify-between`}>
      <Icon
        className={`${textColor} w-12 h-12 group-hover:scale-110 transition-transform`}
        strokeWidth={1.5}
      />
      <div className="bg-white/20 rounded-full p-2">
        <Award className={`${textColor} w-6 h-6`} strokeWidth={1.5} />
      </div>
    </div>
    <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors">
      <span>Learn More</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  </div>
);

const ConferenceThemes = () => {
  const themes = [
    {
      icon: CloudCog,
      title: "AI in Drug Discovery",
      description:
        "Explore cutting-edge AI and machine learning technologies revolutionizing pharmaceutical research, accelerating drug development, and reducing clinical trial timelines through advanced predictive modeling and data analytics.",
      bgColor: "bg-[#F0E6F8]",
      textColor: "text-[#9C6FDE]",
    },
    {
      icon: Brain,
      title: "Precision Medicine",
      description:
        "Dive into the forefront of personalized healthcare, leveraging artificial intelligence and genomic data to develop tailored treatment strategies, optimize patient outcomes, and transform medical interventions.",
      bgColor: "bg-[#FFE5F0]",
      textColor: "text-[#FF6B9E]",
    },
    {
      icon: Microscope,
      title: "Biomedical Innovations",
      description:
        "Uncover groundbreaking research at the intersection of technology and medical science, highlighting novel diagnostic tools, advanced computational methods, and transformative healthcare technologies.",
      bgColor: "bg-[#E6F8F0]",
      textColor: "text-[#2ECC71]",
    },
    {
      icon: Stethoscope,
      title: "Clinical AI Applications",
      description:
        "Examine practical implementations of artificial intelligence in clinical settings, including diagnostic support systems, predictive health monitoring, and intelligent patient management platforms.",
      bgColor: "bg-[#E6F2F8]",
      textColor: "text-[#3498DB]",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
            Conference Themes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring the Frontiers of Medical Technology and Artificial
            Intelligence
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme, index) => (
            <ThemeCard key={index} {...theme} />
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join leading experts, researchers, and innovators as we push the
            boundaries of medical technology and artificial intelligence to
            transform healthcare delivery and patient outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConferenceThemes;
