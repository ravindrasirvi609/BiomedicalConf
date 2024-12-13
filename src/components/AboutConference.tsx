import React from "react";
import { FaUsers, FaLightbulb, FaRegFileAlt } from "react-icons/fa";

const ConferenceDetails = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-gradient-to-r from-[#9C6FDE] to-[#FF6B9E] bg-clip-text">
          About the Conference
        </h1>

        <section className="mb-12" aria-labelledby="theme-areas">
          <h2
            id="theme-areas"
            className="text-4xl font-semibold mb-6 text-gray-800"
          >
            <FaLightbulb className="inline mr-2" /> Theme Areas
          </h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            <li>AI in Biomedical Drug Discovery</li>
            <li>Traditional to Modern Approaches in Biomedical Research</li>
            <li>
              Biostatistics and Computational Techniques: Role of advanced
              biostatistics and computational modeling in biomedical research
              and data interpretation.
            </li>
            <li>
              Clinical Trial Innovations: Enhancing trial designs, patient
              recruitment, and outcome predictions using AI tools.
            </li>
            <li>
              Big Data and Bioinformatics: Harnessing large datasets to uncover
              insights and drive decision-making in research and drug
              development.
            </li>
            <li>
              Regulatory Perspectives on AI in Drug Development: Navigating
              compliance and regulatory challenges in adopting AI-driven
              approaches.
            </li>
            <li>
              Ethics and Challenges in AI Applications: Addressing ethical
              considerations and overcoming challenges in implementing AI and ML
              in healthcare.
            </li>
            <li>
              Translational Medicine: Bridging the gap between laboratory
              discoveries and clinical applications through innovative
              technologies.
            </li>
            <li>
              Future Directions in Biomedical Research: Exploring emerging
              trends and the next wave of innovations in the field.
            </li>
          </ul>
        </section>

        <section className="mb-12" aria-labelledby="who-should-attend">
          <h2
            id="who-should-attend"
            className="text-4xl font-semibold mb-6 text-gray-800"
          >
            <FaUsers className="inline mr-2" /> Who Should Attend
          </h2>
          <p className="text-lg text-gray-700">
            This conference is ideal for clinicians, biomedical researchers,
            medical professionals, data scientists, and AI experts interested in
            the advancements at the intersection of technology in healthcare
            research. Participants will gain practical knowledge and access to
            pioneering research that can drive new ideas and advancements in the
            medical industry.
          </p>
        </section>

        <section aria-labelledby="learning-objectives">
          <h2
            id="learning-objectives"
            className="text-4xl font-semibold mb-6 text-gray-800"
          >
            <FaRegFileAlt className="inline mr-2" /> Learning Objectives
          </h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            <li>
              To equip biomedical professionals with insights into the latest AI
              innovations in (Clinical) drug discovery and development.
            </li>
            <li>
              To foster collaborative discussions on integrating AI into
              clinical and biomedical research for enhanced patient outcomes.
            </li>
            <li>
              To examine the ethical, regulatory, and practical considerations
              of adopting AI and ML technologies in the medical field.
            </li>
            <li>
              Bring together Academicians, Scientists, Industrialists, and
              experts from different parts of the country to exchange knowledge
              and ideas.
            </li>
            <li>
              Foster collaboration and limitations in implementing AI in the
              Biomedical Research.
            </li>
            <li>
              Provide a platform for networking and building partnerships among
              academia, industry, and technology providers.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ConferenceDetails;
