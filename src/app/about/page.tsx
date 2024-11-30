import React from "react";
import { BookOpen, Globe, Users, Award } from "lucide-react";
import Image from "next/image";

const AboutOBRF = () => {
  const keyFeatures = [
    {
      icon: <BookOpen className="text-indigo-600" size={48} />,
      title: "Advanced Research",
      description: "Pioneering innovative research in BioMedical sciences",
    },
    {
      icon: <Globe className="text-teal-500" size={48} />,
      title: "Global Impact",
      description: "Driving international biomedical research collaboration",
    },
    {
      icon: <Users className="text-emerald-600" size={48} />,
      title: "Scientific Community",
      description:
        "Fostering interdisciplinary networking and knowledge exchange",
    },
    {
      icon: <Award className="text-violet-600" size={48} />,
      title: "Research Excellence",
      description:
        "Empowering breakthrough discoveries and scientific innovation",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-teal-50 py-16 mt-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
            Operant BioMedical Research Federation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transformative organization driving innovation in biomedical
            research, education, and global health solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-indigo-600">Our Vision</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                OBRF is dedicated to advancing biomedical research through
                cutting-edge scientific exploration, interdisciplinary
                collaboration, and transformative educational initiatives.
              </p>
              <p>
                We are committed to creating a global platform that accelerates
                scientific discovery, supports emerging researchers, and
                addresses critical healthcare challenges.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/opf.png"
              alt="OBRF Mission"
              className="rounded-3xl shadow-2xl object-cover w-full h-96 transition-transform hover:scale-105"
              width={500}
              height={400}
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-2xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
            Strategic Focus Areas
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4 group-hover:transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-teal-600">Our Commitment</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                At OBRF, we are focused on driving meaningful progress in
                biomedical research through innovative approaches, ethical
                practices, and collaborative partnerships.
              </p>
              <p>
                We provide comprehensive support for researchers, including
                advanced research resources, global publication platforms, and
                strategic editorial assistance.
              </p>
              <p>
                Our mission is to cultivate a vibrant ecosystem that empowers
                researchers, students, and professionals to push the boundaries
                of scientific knowledge.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/opf.png"
              alt="OBRF Commitment"
              className="rounded-3xl shadow-2xl object-cover w-full h-96 transition-transform hover:scale-105"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOBRF;
