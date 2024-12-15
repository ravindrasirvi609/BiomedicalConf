"use client";
import React, { useState } from "react";
import {
  FileText,
  Upload,
  Calendar,
  CheckCircle,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { storage } from "@/lib/firebase";

const CallForPapers = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paperDetails, setPaperDetails] = useState<{
    presentingAuthor: string;
    designation: string;
    affiliation: string;
    email: string;
    whatsappNo: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    abstract: string;
    file: File | null;
    coAuthor?: string;
    presentationType?: string;
    presentationSubject?: string;
    articleType?: string;
    abstractTitle?: string;
    keywords: string;
  }>({
    presentingAuthor: "",
    designation: "",
    affiliation: "",
    email: "",
    whatsappNo: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    abstract: "",
    file: null,
    coAuthor: "",
    presentationType: "",
    presentationSubject: "",
    articleType: "",
    abstractTitle: "",
    keywords: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setPaperDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    // Validate file type and size
    if (file) {
      const allowedTypes = [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxSize = 5 * 1024 * 1024; // 5 MB

      if (!allowedTypes.includes(file.type)) {
        setError("Only .doc and .docx files are allowed");
        return;
      }

      if (file.size > maxSize) {
        setError("File size must be less than 5 MB");
        return;
      }

      setError(null);
      setPaperDetails((prev) => ({
        ...prev,
        file: file,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate all fields
    if (!paperDetails.file) {
      setError("Please upload a file");
      setIsLoading(false);
      return;
    }

    try {
      // Upload file to Firebase Storage
      const storageRef = ref(
        storage,
        `abstracts/${Date.now()}_${paperDetails.file.name}`
      );
      const snapshot = await uploadBytes(storageRef, paperDetails.file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Prepare form data
      const formData = {
        ...paperDetails,
        fileUrl: downloadURL,
      };

      // Send to server endpoint
      const response = await axios.post("/api/abstractSubmit", formData);
      console.log(response.data);

      // Handle successful submission
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      setError("Failed to submit paper. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const importantDates = [
    { date: "February 1, 2025", event: "Paper Submission Deadline" },
    { date: "February 15, 2025", event: "Notification of Acceptance" },
    { date: "February 28, 2025", event: "Camera-Ready Submissions" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9C6FDE]/10 to-[#9C6FDE]/20 py-16 flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Information Section */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <FileText className="w-10 h-10 text-[#9C6FDE] mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Call for Papers
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                We invite groundbreaking research papers at the intersection of
                artificial intelligence and medical science. Submit your
                innovative work that pushes the boundaries of healthcare
                technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Lightbulb className="w-5 h-5 mr-3 text-[#9C6FDE]" />
                  <span>Interdisciplinary Research Welcome</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <BookOpen className="w-5 h-5 mr-3 text-[#9C6FDE]" />
                  <span>Peer-Reviewed Publication</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-[#9C6FDE]" />
                Important Dates
              </h3>
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-700">{item.event}</span>
                    <span className="font-semibold text-[#9C6FDE]">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Submission Form */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Presenting Author Full Name*
                  </label>
                  <input
                    type="text"
                    name="presentingAuthor"
                    required
                    value={paperDetails.presentingAuthor}
                    onChange={handleInputChange}
                    placeholder="Enter presenting author's full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Designation*
                  </label>
                  <input
                    type="text"
                    name="designation"
                    required
                    value={paperDetails.designation}
                    onChange={handleInputChange}
                    placeholder="Enter designation"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Affiliation*
                  </label>
                  <input
                    type="text"
                    name="affiliation"
                    required
                    value={paperDetails.affiliation}
                    onChange={handleInputChange}
                    placeholder="Enter affiliation"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={paperDetails.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Whatsapp No.*
                  </label>
                  <input
                    type="text"
                    name="whatsappNo"
                    required
                    value={paperDetails.whatsappNo}
                    onChange={handleInputChange}
                    placeholder="Enter Whatsapp number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Address*
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={paperDetails.address}
                    onChange={handleInputChange}
                    placeholder="Enter address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    City*
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={paperDetails.city}
                    onChange={handleInputChange}
                    placeholder="Enter city"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    State or Region*
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={paperDetails.state}
                    onChange={handleInputChange}
                    placeholder="Enter state or region"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Country*
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={paperDetails.country}
                    onChange={handleInputChange}
                    placeholder="Enter country"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Zip / Pin*
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={paperDetails.pincode}
                    onChange={handleInputChange}
                    placeholder="Enter zip or pin code"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Abstract to be submitted for*
                  </label>
                  <select
                    name="presentationType"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  >
                    <option value="">Select type</option>
                    <option value="Oral Presentation">Oral Presentation</option>
                    <option value="Poster Presentation">
                      Poster Presentation
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Select Presentation Subject*
                  </label>
                  <input
                    type="text"
                    name="presentationSubject"
                    required
                    value={paperDetails.presentationSubject}
                    onChange={handleInputChange}
                    placeholder="Enter presentation subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Article Type*
                  </label>
                  <select
                    name="articleType"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  >
                    <option value="">Select article type</option>
                    <option value="Original Research">Original Research</option>
                    <option value="Review Article">Review Article</option>
                    <option value="Case Study">Case Study</option>
                    <option value="Short Communications/Brief Reports">
                      Short Communications/Brief Reports
                    </option>
                    <option value="Technical Notes">Technical Notes</option>
                    <option value="Hypothesis Articles">
                      Hypothesis Articles
                    </option>
                    <option value="Data Papers">Data Papers</option>
                    <option value="Protocols">Protocols</option>
                    <option value="Systematic Reviews and Meta-Analyses">
                      Systematic Reviews and Meta-Analyses
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Co-authors (If Any) –
                  </label>
                  <input
                    type="text"
                    name="coAuthor"
                    value={paperDetails.coAuthor}
                    onChange={handleInputChange}
                    placeholder="Enter co-authors"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Title of Abstract*
                  </label>
                  <input
                    type="text"
                    name="abstractTitle"
                    required
                    value={paperDetails.abstractTitle}
                    onChange={handleInputChange}
                    placeholder="Enter the title of your abstract"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Abstract*
                  </label>
                  <textarea
                    name="abstract"
                    required
                    value={paperDetails.abstract}
                    onChange={handleInputChange}
                    placeholder="Provide a brief abstract of your paper"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Keywords*
                  </label>
                  <input
                    type="text"
                    name="keywords"
                    required
                    value={paperDetails.keywords}
                    onChange={handleInputChange}
                    placeholder="Enter keywords"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Abstract File upload*
                  </label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 file:mr-4 file:rounded-full file:border-0 file:bg-[#9C6FDE]/10 file:px-4 file:py-2 file:text-[#9C6FDE] hover:file:bg-[#9C6FDE]/20"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9C6FDE] text-white py-4 rounded-xl hover:bg-[#7A50B3] transition duration-300 flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loader"></span>
                  ) : (
                    <Upload className="mr-3" />
                  )}
                  {isLoading ? "Submitting..." : "Submit Paper"}
                </button>

                {error && (
                  <div className="mt-4 text-red-500 text-center">{error}</div>
                )}
              </form>
            ) : (
              <div className="text-center space-y-6">
                <CheckCircle
                  className="w-20 h-20 text-green-500 mx-auto"
                  strokeWidth={1.5}
                />
                <h3 className="text-3xl font-bold text-gray-800">
                  Paper Submitted Successfully
                </h3>
                <p className="text-gray-600">
                  Your research paper has been received. Our review committee
                  will evaluate your submission and provide feedback.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mx-auto block bg-[#9C6FDE] text-white px-8 py-3 rounded-xl hover:bg-[#7A50B3] transition"
                >
                  Submit Another Paper
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
