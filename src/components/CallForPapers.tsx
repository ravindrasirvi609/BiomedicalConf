"use client";
import React, { useState } from "react";
import {
  FileText,
  Upload,
  Calendar,
  Paperclip,
  CheckCircle,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const CallForPapers = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [paperDetails, setPaperDetails] = useState<{
    title: string;
    author: string;
    email: string;
    abstract: string;
    file: File | null;
  }>({
    title: "",
    author: "",
    email: "",
    abstract: "",
    file: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPaperDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setPaperDetails((prev) => ({
      ...prev,
      file: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle file submission here
    setIsSubmitted(true);
  };

  const importantDates = [
    { date: "August 15, 2024", event: "Paper Submission Deadline" },
    { date: "September 30, 2024", event: "Notification of Acceptance" },
    { date: "October 15, 2024", event: "Camera-Ready Submissions" },
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
                    Paper Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={paperDetails.title}
                    onChange={handleInputChange}
                    placeholder="Enter your paper title"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Author(s)
                  </label>
                  <input
                    type="text"
                    name="author"
                    required
                    value={paperDetails.author}
                    onChange={handleInputChange}
                    placeholder="List all authors"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={paperDetails.email}
                    onChange={handleInputChange}
                    placeholder="Contact email address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9C6FDE]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-semibold">
                    Abstract
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
                  <label className=" mb-2 text-gray-700 font-semibold flex items-center">
                    <Paperclip className="mr-2 text-[#9C6FDE]" />
                    Upload Paper
                  </label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 file:mr-4 file:rounded-full file:border-0 file:bg-[#9C6FDE]/10 file:px-4 file:py-2 file:text-[#9C6FDE] hover:file:bg-[#9C6FDE]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9C6FDE] text-white py-4 rounded-xl hover:bg-[#7A50B3] transition duration-300 flex items-center justify-center"
                >
                  <Upload className="mr-3" />
                  Submit Paper
                </button>
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
