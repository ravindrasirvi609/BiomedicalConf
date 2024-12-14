import React from "react";
import { FaUsers, FaLightbulb, FaRegFileAlt } from "react-icons/fa";

const ConferenceDetails = () => {
  return (
    <div
      className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-16 lg:px-24 font-inter "
      id="details"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Theme Areas */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
            <div className="bg-gradient-to-r from-[#9C6FDE] to-[#FF6B9E] py-4 px-6 text-white">
              <div className="flex items-center">
                <FaLightbulb className="text-2xl mr-3" />
                <h2 className="text-xl font-semibold">Theme Areas</h2>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-gray-700 text-base">
                <li>AI in Biomedical Drug Discovery</li>
                <li>Traditional to Modern Approaches in Biomedical Research</li>
                <li>Biostatistics and Computational Techniques</li>
                <li>
                  Clinical Trial Innovations: Enhancing trial designs, patient
                  recruitment, and outcome predictions using AI tools.
                </li>
                <li>
                  Big Data and Bioinformatics: Harnessing large datasets to
                  uncover insights and drive decision-making.
                </li>
                <li>Regulatory Perspectives on AI in Drug Development</li>
                <li>Ethics and Challenges in AI Applications</li>
                <li>
                  Translational Medicine: Bridging the gap between laboratory
                  discoveries and clinical applications.
                </li>
                <li>Future Directions in Biomedical Research</li>
              </ul>
            </div>
          </div>

          {/* Who Should Attend */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
            <div className="bg-gradient-to-r from-[#FF6B9E] to-[#5482F3] py-4 px-6 text-white">
              <div className="flex items-center">
                <FaUsers className="text-2xl mr-3" />
                <h2 className="text-xl font-semibold">Who Should Attend</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-base">
                This conference is tailored for clinicians, biomedical
                researchers, medical professionals, data scientists, and AI
                experts interested in the convergence of technology and
                healthcare research. Participants will gain practical knowledge
                and access to pioneering research.
              </p>
            </div>
          </div>

          {/* Learning Objectives */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
            <div className="bg-gradient-to-r from-[#5482F3] to-[#9C6FDE] py-4 px-6 text-white">
              <div className="flex items-center">
                <FaRegFileAlt className="text-2xl mr-3" />
                <h2 className="text-xl font-semibold">Learning Objectives</h2>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-gray-700 text-base">
                <li>
                  Gain insights into AI innovations in drug discovery and
                  development.
                </li>
                <li>
                  Foster collaborative discussions on integrating AI into
                  clinical and biomedical research.
                </li>
                <li>
                  Examine the ethical, regulatory, and practical considerations
                  of adopting AI and ML.
                </li>
                <li>
                  Bring together Academicians, Scientists, Industrialists, and
                  experts to exchange knowledge.
                </li>
                <li>
                  Foster collaboration and address limitations in implementing
                  AI in Biomedical Research.
                </li>
                <li>
                  Provide a platform for networking and building partnerships.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceDetails;
