"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  User,
  Phone,
} from "lucide-react";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const tempErrors = { name: "", mobile: "", email: "" };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Mobile validation
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!formData.mobile.trim()) {
      tempErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!mobileRegex.test(formData.mobile)) {
      tempErrors.mobile = "Please enter a valid 10-digit mobile number";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Mobile number formatting (only allow digits)
    if (name === "mobile") {
      const formattedValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (validateForm()) {
      // In a real application, you would integrate with Razorpay here
      // This is a placeholder for Razorpay integration
      const handleRazorpayPayment = () => {
        // Razorpay integration logic would go here
        // This is where you'd typically:
        // 1. Create an order on your backend
        // 2. Initialize Razorpay checkout
        // 3. Handle payment success/failure
        console.log("Initiating Razorpay Payment", formData);

        // Placeholder: Simulating successful submission
        setIsSubmitted(true);
      };

      handleRazorpayPayment();
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9C6FDE] to-[#7A50B3] py-16"
      id="register"
    >
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
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-6 py-4 rounded-full bg-white/90 text-gray-800 
                      placeholder-gray-500 focus:outline-none focus:ring-2 
                      ${
                        errors.name
                          ? "ring-2 ring-red-500"
                          : "focus:ring-[#9C6FDE]"
                      } 
                      transition duration-300`}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <User className="text-gray-400 w-5 h-5" />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 text-left">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Mobile Input */}
                <div className="relative">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className={`w-full px-6 py-4 rounded-full bg-white/90 text-gray-800 
                      placeholder-gray-500 focus:outline-none focus:ring-2 
                      ${
                        errors.mobile
                          ? "ring-2 ring-red-500"
                          : "focus:ring-[#9C6FDE]"
                      } 
                      transition duration-300`}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <Phone className="text-gray-400 w-5 h-5" />
                  </div>
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1 text-left">
                      {errors.mobile}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Professional Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-6 py-4 rounded-full bg-white/90 text-gray-800 
                      placeholder-gray-500 focus:outline-none focus:ring-2 
                      ${
                        errors.email
                          ? "ring-2 ring-red-500"
                          : "focus:ring-[#9C6FDE]"
                      } 
                      transition duration-300`}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <Globe className="text-gray-400 w-5 h-5" />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 text-left">
                      {errors.email}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9C6FDE] text-white px-10 py-4 rounded-full 
                    text-lg font-semibold hover:bg-[#7A50B3] transition duration-300 
                    flex items-center justify-center space-x-3 group"
                >
                  <span>Proceed to Payment</span>
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
                  We&apos;ve received your registration. Redirecting to
                  payment...
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
