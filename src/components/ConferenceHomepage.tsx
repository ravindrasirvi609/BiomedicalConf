import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import KeyHighlights from "./KeyHighlights";
import ConferenceThemes from "./ConferenceThemes";
import CTA from "./CTA";

const ConferenceHomepage: React.FC = () => {
  return (
    <div>
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Key Highlights */}
      <KeyHighlights />

      {/* Conference Overview */}
      <ConferenceThemes />

      {/* Footer */}
      <CTA />
    </div>
  );
};

export default ConferenceHomepage;
