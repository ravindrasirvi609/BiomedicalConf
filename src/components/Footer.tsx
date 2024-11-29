import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const ConferenceFooter = () => {
  const socialLinks = [
    { icon: <Facebook color="#9C6FDE" size={24} />, href: "#" },
    { icon: <Twitter color="#FF6B9E" size={24} />, href: "#" },
    { icon: <Linkedin color="#9C6FDE" size={24} />, href: "#" },
    { icon: <Instagram color="#FF6B9E" size={24} />, href: "#" },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Schedule", href: "#" },
    { name: "Speakers", href: "#" },
    { name: "Registration", href: "#" },
    { name: "Venue", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#9C6FDE]/10 to-[#FF6B9E]/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9C6FDE] to-[#FF6B9E]">
              Medical Conference 2024
            </h3>
            <p className="text-gray-700 mb-4">
              Advancing Medical Knowledge and Innovation
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:scale-110 transition-transform"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#9C6FDE]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-[#FF6B9E] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#FF6B9E]">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <Mail className="mr-3 text-[#9C6FDE]" size={20} />
                info@medicalconference.com
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="mr-3 text-[#FF6B9E]" size={20} />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="mr-3 text-[#9C6FDE]" size={20} />
                Medical District, City, Country
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#9C6FDE]">
              Stay Updated
            </h4>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B9E]"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 bg-gradient-to-r from-[#9C6FDE] to-[#FF6B9E] text-white rounded-full hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2024 Medical Conference. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ConferenceFooter;
