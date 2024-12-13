import Image from "next/image";
import React from "react";

// Office bearers data
const officeBearers = [
  {
    name: "Dr. Sneha Ambwani",
    position: "President",
    image: "/api/placeholder/150/150",
  },
  {
    name: "Dr. J. S. Bhawalkar",
    position: "Vice President",
    image: "/api/placeholder/150/150",
  },
  {
    name: "Dr. Vikram Choudhary",
    position: "Secretary",
    image: "/api/placeholder/150/150",
  },
  {
    name: "Dr. Gopal Natesan",
    position: "Director, International Affairs",
    image: "/api/placeholder/150/150",
  },
  {
    name: "Dr. Rimjhim Arora",
    position: "Treasurer",
    image: "/api/placeholder/150/150",
  },
  {
    name: "Dr. R. Kalirajan",
    position: "CEC Member",
    image: "/api/placeholder/150/150",
  },
  {
    name: "Dr. Anjali Sable",
    position: "CEC Member",
    image: "/api/placeholder/150/150",
  },
];

const AboutOBRF = () => {
  return (
    <div className="px-8 md:px-16 py-24 bg-gradient-to-r from-[#fbd0df] to-[#ddcafb] text-black">
      <h1 className="text-5xl font-extrabold text-center mb-12">About OBRF</h1>

      <div className="max-w-5xl mx-auto space-y-12">
        <section>
          <h2 className="text-4xl font-semibold mb-6 border-b-4 border-white pb-2">
            Mission
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Operant Biomedical Research Federation is a leading organization in
            the field, uniting a diverse community of Academicians, Researchers,
            Scientists, Clinicians, and Industry Professionals. Together, we
            collaborate on biomedical research to push the boundaries of
            knowledge and technology in healthcare.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Join us in our journey to shape the future of biomedicine. Together,
            we can unlock new frontiers, transform healthcare, and make a
            meaningful impact on human health and well-being.
          </p>
          <p className="text-lg italic">
            Operant Biomedical Research Federation: Where collaboration drives
            innovation, and discovery beyond boundaries.
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-semibold mb-6 border-b-4 border-white pb-2">
            Vision
          </h2>
          <p className="text-lg leading-relaxed">
            At Operant Biomedical Research Federation, we envision a future
            where groundbreaking biomedical research and collaboration lead to
            transformative advances in healthcare, improve patient outcomes, and
            shape the future of medicine.
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-semibold mb-6 border-b-4 border-white pb-2">
            Objectives
          </h2>
          <ul className="list-disc list-inside text-lg space-y-3">
            <li>
              Create an inclusive environment that celebrates diversity and
              promotes equitable participation in biomedical research.
            </li>
            <li>
              Bridge the gap between basic science discoveries and clinical
              applications through targeted translational research initiatives.
            </li>
            <li>
              Provide resources and support to enhance the quality,
              reproducibility, and impact of biomedical research.
            </li>
            <li>
              Facilitate cross-disciplinary partnerships to leverage diverse
              expertise and perspectives in addressing complex biomedical
              challenges.
            </li>
            <li>
              Offer mentorship, training, and educational programs to cultivate
              the next generation of biomedical leaders.
            </li>
            <li>
              Uphold ethical standards and transparency in biomedical research,
              considering societal and regulatory implications.
            </li>
            <li>
              Foster international collaboration to address global health issues
              and promote health equity.
            </li>
            <li>
              Utilize advanced data analytics and artificial intelligence to
              extract meaningful insights from complex biomedical datasets.
            </li>
            <li>
              Engage with the public and stakeholders to increase awareness and
              understanding of biomedical research.
            </li>
            <li>
              Advocate for evidence-based policies and funding initiatives to
              support biomedical innovation and healthcare improvement.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-4xl font-semibold mb-8 border-b-4 border-white pb-2">
            OBRF Office Bearers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeBearers.map((bearer, index) => (
              <div
                key={index}
                className="bg-white/20 rounded-lg p-6 text-center transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={bearer.image}
                  alt={bearer.name}
                  width={150}
                  height={150}
                  className="mx-auto rounded-full mb-4 border-4 border-white"
                />
                <h3 className="text-xl font-semibold mb-2">{bearer.name}</h3>
                <p className="text-black">{bearer.position}</p>
                <p className="text-black/80">
                  Operant Biomedical Research Federation
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="text-center mt-16">
        <p className="text-2xl">
          Visit us at:{" "}
          <a
            href="http://www.obrf.org.in"
            className="text-black underline hover:text-black/80 transition-colors"
          >
            www.obrf.org.in
          </a>
        </p>
      </footer>
    </div>
  );
};

export default AboutOBRF;
