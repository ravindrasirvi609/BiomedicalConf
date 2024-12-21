"use client";

import Image from "next/image";
import React, { useEffect } from "react";

interface Member {
  name: string;
  position: string;
  organization?: string;
  image: string;
  degisnation?: string;
}

const Organizingcommittee: React.FC = () => {
  const chiefPatron: Member = {
    name: "Dr. Sneha Ambwani",
    position: "President, Operant Biomedical Research Federation",
    organization:
      "Professor & Head, Department of Pharmacology, All India Institute of Medical Sciences, Jodhpur",
    image: "/sneha.png",
  };

  const patrons: Member[] = [
    {
      name: "Dr J. S. Bhawalkar",
      position:
        "Vice President, OBRF, Registrar, Dr. D. Y.Patil Vidyapeeth, Pune.",
      image: "/bhawalkar.png",
    },
    {
      name: "Sri Manjunath SP",
      position: "Secretary-I, JSS Mahavidyapeetha, Mysuru",
      image: "/Manjunath.jpg",
    },
    {
      name: "Dr Suresh B",
      position: "Pro Chancellor, JSS AHER, Mysuru",
      image: "/chancellor.jpg",
    },
    {
      name: "Dr H. Basavanagowdappa",
      position: "Vice Chancellor, JSS AHER, Mysuru",
      image: "/drbasavanagowdappa.webp",
    },
    {
      name: "Dr Manhunatha B",
      position: "Registrar, JSS AHER, Mysuru",
      image: "/Manhunatha.jpg",
    },
    {
      name: "Dr Vikram Choudhary",
      position: "Secretary, Operant Biomedical Research Federation",
      image: "/097A3252.jpg",
    },
  ];

  const locChair: Member = {
    name: "Dr Gopal Natesan",
    position: "Director, International Affairs, OBRF",
    image: "/gopal.jpeg",
  };

  const convener: Member = {
    name: "Dr Dhanabal SP",
    position: "Principal, JSS CP, Ooty",
    image: "/Dhanabal.png",
  };

  const organisingSecretary: Member = {
    name: "Dr R. Kalirajan",
    position: "Head, JSSCP, Ooty",
    image: "/Kalirajan.jpg",
  };

  const organisingCommittee: Member[] = [
    {
      name: "Dr Priyanka Kumawat",
      position: "Joint Secretary",
      image: "/priyanka.webp",
      degisnation:
        "Associate Professor and Head, Department of Pharmacology, Government Medical College, Pali",
    },
    {
      name: "Dr Srikanth Jupudi",
      position: "Accommodation / Transport Committee",
      image: "/Shrikant.webp",
    },
    {
      name: "Dr Wu Yuan Seng",
      position: "Sunway University, Malaysia",
      organization: "Scientific Committee – International Member",
      image: "/Wu.jpg",
    },
    {
      name: "Dr Sunil Vishnoi",
      position: "Joint Secretary",
      image: "/sunil.jpeg",
    },
    {
      name: "Dr Rimjhim Arora",
      position: "Treasurer",
      image: "/Rimjhim.png",
    },
    {
      name: "Sri Ravindra Sirvi",
      position: "Technical & IT Committee",
      organization: "8107199052",
      image: "/ravi night.jpg",
    },
    {
      name: "Dr Ankita Sharma",
      position: "Scientific Committee Coordinator",
      image: "/Ankita.jpeg",
    },
    {
      name: "Dr. Arup Kumar Mishra",
      position: "Scientific Committee Member",
      image: "/ankit.jpeg",
    },
    {
      name: "Dr Vijay A. Jagtap",
      position: "Organising Committee Member",
      organization: "Principal, YBCoP, Sawantwadi",
      image: "/Vijay.jpeg",
    },
  ];

  useEffect(() => {
    document.title = "Office Bearers - OBRF";
  }, []);

  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-black mb-8 text-center text-[#ff3b7f]">
          LOCAL ORGANISING COMMITTEE
        </h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="bg-[#9C6FDE] text-white py-4 px-6">
            <h2 className="text-3xl font-bold text-center">CHIEF PATRON</h2>
          </div>
          <div className="p-6 flex flex-col items-center">
            <Image
              src={chiefPatron.image}
              alt={chiefPatron.name}
              className="w-32 h-32 rounded-full mb-4 border-4 border-[#FF6B9E]"
              width={150}
              height={150}
            />
            <h3 className="text-2xl font-bold text-center text-[#FF6B9E]">
              {chiefPatron.name}
            </h3>
            <p className="text-gray-600 text-center">{chiefPatron.position}</p>
            {chiefPatron.organization && (
              <p className="text-gray-600 text-center">
                {chiefPatron.organization}
              </p>
            )}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="bg-[#9C6FDE] text-white py-4 px-6">
            <h2 className="text-3xl font-bold text-center">PATRONS</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patrons.map((patron, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105"
              >
                <Image
                  src={patron.image}
                  alt={patron.name}
                  className="w-32 h-32 rounded-full mb-4 border-4 border-[#FF6B9E]"
                  width={150}
                  height={150}
                />
                <h3 className="text-xl font-bold text-center text-[#FF6B9E]">
                  {patron.name}
                </h3>
                <p className="text-gray-600 text-center">{patron.position}</p>
                {patron.organization && (
                  <p className="text-gray-600 text-center">
                    {patron.organization}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="bg-[#9C6FDE] text-white py-4 px-6">
            <h2 className="text-3xl font-bold text-center">LOC CHAIR</h2>
          </div>
          <div className="p-6 flex flex-col items-center">
            <Image
              src={locChair.image}
              alt={locChair.name}
              className="w-32 h-32 rounded-full mb-4 border-4 border-[#FF6B9E]"
              width={150}
              height={150}
            />
            <h3 className="text-2xl font-bold text-center text-[#FF6B9E]">
              {locChair.name}
            </h3>
            <p className="text-gray-600 text-center">{locChair.position}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="bg-[#9C6FDE] text-white py-4 px-6">
            <h2 className="text-3xl font-bold text-center">CONVENER</h2>
          </div>
          <div className="p-6 flex flex-col items-center">
            <Image
              src={convener.image}
              alt={convener.name}
              className="w-32 h-32 rounded-full mb-4 border-4 border-[#FF6B9E]"
              width={150}
              height={150}
            />
            <h3 className="text-2xl font-bold text-center text-[#FF6B9E]">
              {convener.name}
            </h3>
            <p className="text-gray-600 text-center">{convener.position}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="bg-[#9C6FDE] text-white py-4 px-6">
            <h2 className="text-3xl font-bold text-center">
              ORGANISING SECRETARY
            </h2>
          </div>
          <div className="p-6 flex flex-col items-center">
            <Image
              src={organisingSecretary.image}
              alt={organisingSecretary.name}
              className="w-32 h-32 rounded-full mb-4 border-4 border-[#FF6B9E]"
              width={150}
              height={150}
            />
            <h3 className="text-2xl font-bold text-center text-[#FF6B9E]">
              {organisingSecretary.name}
            </h3>
            <p className="text-gray-600 text-center">
              {organisingSecretary.position}
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="bg-[#9C6FDE] text-white py-4 px-6">
            <h2 className="text-3xl font-bold text-center">
              ORGANISING COMMITTEE
            </h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organisingCommittee.map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-4 border-4 border-[#FF6B9E]"
                  width={150}
                  height={150}
                />
                <h3 className="text-xl font-bold text-center text-[#FF6B9E]">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-center">{member.position}</p>
                {member.organization && (
                  <p className="text-gray-600 text-center">
                    {member.organization}
                  </p>
                )}
                {member.degisnation && (
                  <p className="text-gray-400 text-center">
                    {member.degisnation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizingcommittee;
