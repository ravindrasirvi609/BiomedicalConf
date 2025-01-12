import React from "react";
import {
  LucideStethoscope,
  LucideHospital,
  LucideShieldCheck,
  LucideHeartPulse,
} from "lucide-react";
import Image from "next/image";

const SponsorsPartners = () => {
  const sponsors = [
    {
      name: "Educational Partners",
      logo: "/jss.png",
      tier: "Platinum",
      description: "Leading medical education institution",
      icon: <LucideStethoscope color="#9C6FDE" size={48} />,
    },
    {
      name: "HealthCare Dynamics",
      logo: "/jss.png",
      tier: "Gold",
      description: "Revolutionizing patient care platforms",
      icon: <LucideHospital color="#FF6B9E" size={48} />,
    },
    {
      name: "Global Medical Research",
      logo: "/jss.png",
      tier: "Silver",
      description: "Advancing medical research worldwide",
      icon: <LucideShieldCheck color="#9C6FDE" size={48} />,
    },
    {
      name: "Precision Healthcare",
      logo: "/jss.png",
      tier: "Bronze",
      description: "Innovative medical solutions",
      icon: <LucideHeartPulse color="#FF6B9E" size={48} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9C6FDE]/10 to-[#FF6B9E]/10 flex flex-col justify-center items-center p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#9C6FDE] to-[#FF6B9E]">
          Our Esteemed Sponsors & Partners
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="bg-white shadow-xl rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                {sponsor.icon}
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  {sponsor.name}
                </h3>
              </div>
              <div className="h-32 flex items-center justify-center mb-4">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  width={200}
                  height={100}
                />
              </div>
              <div className="text-center">
                <span
                  className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  ${
                    sponsor.tier === "Platinum"
                      ? "bg-[#9C6FDE]/20 text-[#9C6FDE]"
                      : sponsor.tier === "Gold"
                      ? "bg-yellow-100 text-yellow-800"
                      : sponsor.tier === "Silver"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-[#FF6B9E]/20 text-[#FF6B9E]"
                  }
                `}
                >
                  {sponsor.tier} Sponsor
                </span>
                <p className="mt-4 text-gray-600 text-sm">
                  {sponsor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Interested in Sponsorship Opportunities?
          </p>
          <button
            className="
            px-8 py-3 
            bg-gradient-to-r from-[#9C6FDE] to-[#FF6B9E] 
            text-white 
            rounded-full 
            font-semibold 
            hover:opacity-90 
            transition-all 
            duration-300 
            shadow-lg 
            hover:shadow-xl
          "
          >
            Become a Sponsor
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPartners;
