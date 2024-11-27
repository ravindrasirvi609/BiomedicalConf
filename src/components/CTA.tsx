"use client";
import React, { useState } from "react";
import { ArrowRight, CheckCircle, Globe, Users } from "lucide-react";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic email validation
    if (email && email.includes("@")) {
      setIsSubmitted(true);
      // In a real application, you would handle the email submission here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9C6FDE] to-[#7A50B3] py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 space-y-6">
            <h2 className="text-5xl font-extrabold text-white leading-tight">
              Join Us in Shaping the Future of Medicine
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Converge at the intersection of medical expertise and
              technological innovation. This groundbreaking conference brings
              together global thought leaders to redefine healthcare through
              artificial intelligence and advanced research.
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 max-w-2xl mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your professional email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-6 py-4 rounded-full bg-white/90 text-gray-800 
                      placeholder-gray-500 focus:outline-none focus:ring-2 
                      focus:ring-[#9C6FDE] transition duration-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <Globe className="text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9C6FDE] text-white px-10 py-4 rounded-full 
                    text-lg font-semibold hover:bg-[#7A50B3] transition duration-300 
                    flex items-center justify-center space-x-3 group"
                >
                  <span>Register for the Conference</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition" />
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <div className="flex justify-center mb-4">
                  <CheckCircle
                    className="w-16 h-16 text-green-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Thank You for Your Interest!
                </h3>
                <p className="text-white/90 max-w-md mx-auto">
                  We&apos;ve received your registration of interest. Our team
                  will review your details and send further information shortly.
                </p>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <div className="flex justify-center items-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6" />
                <span>2,500+ Attendees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-6 h-6" />
                <span>35+ Countries Represented</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
