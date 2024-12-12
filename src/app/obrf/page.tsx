import React from "react";

const AboutOBRF = () => {
  return (
    <div className="px-16 py-24 bg-gradient-to-r from-[#f8f3b4] to-[#ffb8e685] ">
      <h1 className="text-5xl font-black text-[#184D8D] text-center mb-6">
        About OBRF
      </h1>

      <section className="mb-8">
        <h2 className="text-4xl font-semibold mb-4 text-[#8DC43E]">Mission</h2>
        <p className="text-gray-700 mb-4 text-lg">
          Operant Biomedical Research Federation is a leading organization in
          the field, uniting a diverse community of Academicians, Researchers,
          Scientists, Clinicians, and Industry Professionals. Together, we
          collaborate on biomedical research to push the boundaries of knowledge
          and technology in healthcare.
        </p>
        <p className="text-gray-700 mb-4 text-lg">
          Join us in our journey to shape the future of biomedicine. Together,
          we can unlock new frontiers, transform healthcare, and make a
          meaningful impact on human health and well-being.
        </p>
        <p className="text-gray-700 mb-4 text-lg">
          Operant Biomedical Research Federation: Where collaboration drives
          innovation, and discovery beyond boundaries.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-4xl font-semibold mb-4 text-[#8DC43E] ">Vision</h2>
        <p className="text-gray-700 mb-4 text-lg">
          At Operant Biomedical Research Federation, we envision a future where
          groundbreaking biomedical research and collaboration lead to
          transformative advances in healthcare, improve patient outcomes, and
          shape the future of medicine.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-4xl font-semibold mb-4 text-[#8DC43E]">
          Objectives
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 text-lg">
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

      <footer className="text-center mt-8 text-3xl">
        <p className="text-gray-900">
          Visit us at:{" "}
          <a
            href="http://www.obrf.org.in"
            className="text-blue-500 hover:underline"
          >
            www.obrf.org.in
          </a>
        </p>
      </footer>
    </div>
  );
};

export default AboutOBRF;
