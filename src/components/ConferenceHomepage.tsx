import React from "react";
import { ChevronRight, Calendar, Users, Globe, ArrowRight } from "lucide-react";

const ConferenceHomepage: React.FC = () => {
  const keyHighlights = [
    {
      icon: <Calendar className="w-12 h-12 text-[#9C6FDE] mb-4" />,
      title: "Cutting-Edge Insights",
      description:
        "Explore the latest advancements in AI and ML for biomedical research",
    },
    {
      icon: <Users className="w-12 h-12 text-[#FF6B9E] mb-4" />,
      title: "Interdisciplinary Networking",
      description:
        "Connect with leading experts across medical and technological domains",
    },
    {
      icon: <Globe className="w-12 h-12 text-[#4ECDC4] mb-4" />,
      title: "Global Perspectives",
      description: "Gain insights into global trends in biomedical innovation",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F9FC] to-[#EDF2F7] font-sans text-gray-800">
      {/* Navigation */}
      <nav className="px-6 py-4 bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#9C6FDE]">
            AI in Biomedical Research Conference
          </h1>
          <div className="space-x-4">
            <a
              href="#about"
              className="text-gray-600 hover:text-[#FF6B9E] font-medium transition"
            >
              About
            </a>
            <a
              href="#speakers"
              className="text-gray-600 hover:text-[#FF6B9E] font-medium transition"
            >
              Speakers
            </a>
            <a
              href="#register"
              className="bg-[#FF6B9E] text-white px-4 py-2 rounded-full hover:bg-[#9C6FDE] transition shadow-md"
            >
              Register Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 text-[#9C6FDE] leading-tight">
            Advancement in Biomedical Research
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-600 leading-relaxed">
            Exploring the Intersection of AI, Machine Learning, and Cutting-Edge
            Medical Research
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#details"
              className="bg-[#FF6B9E] text-white px-6 py-3 rounded-full flex items-center hover:bg-[#9C6FDE] transition shadow-md group"
            >
              Conference Details
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#register"
              className="border-2 border-[#4ECDC4] text-[#4ECDC4] px-6 py-3 rounded-full hover:bg-[#4ECDC4]/10 transition flex items-center group"
            >
              Become a Participant
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>
      </header>

      {/* Key Highlights */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {keyHighlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-3 transition-all duration-300 hover:shadow-xl text-center"
            >
              <div className="flex justify-center">{highlight.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-[#333] mt-4">
                {highlight.title}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conference Overview */}
      <section className="bg-white py-16 shadow-inner">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#9C6FDE]">
            Conference Themes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F0E6F8] p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#9C6FDE]">
                AI in Drug Discovery
              </h3>
              <p className="text-gray-700">
                Dive into revolutionary approaches using AI and ML to accelerate
                drug development, reduce clinical trial times, and enhance
                precision in medical research.
              </p>
            </div>
            <div className="bg-[#FFE5F0] p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#FF6B9E]">
                Precision Medicine
              </h3>
              <p className="text-gray-700">
                Explore how artificial intelligence enables personalized
                treatment strategies, transforming patient care through
                data-driven insights and predictive analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#9C6FDE] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 leading-tight">
            Join Us in Shaping the Future of Medicine
          </h3>
          <p className="max-w-2xl mx-auto mb-10 text-gray-100 text-lg leading-relaxed">
            Be part of a transformative conference that bridges the gap between
            traditional medical research and cutting-edge technological
            innovations.
          </p>
          <a
            href="#register"
            className="bg-white text-[#9C6FDE] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#4ECDC4] hover:text-white transition shadow-lg"
          >
            Register for the Conference
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ConferenceHomepage;
