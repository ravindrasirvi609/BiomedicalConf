import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import KeyHighlights from "./KeyHighlights";
import ConferenceThemes from "./ConferenceThemes";
import CTA from "./CTA";
import CallForPapers from "./CallForPapers";
import SponsorsPartners from "./SponsorsPartners";
import VenueInformation from "./VenueInformation";
import ConferenceFooter from "./Footer";

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

      <CTA />

      <CallForPapers />

      <SponsorsPartners />

      {/* Footer */}
      <VenueInformation />

      <ConferenceFooter />
    </div>
  );
};

export default ConferenceHomepage;
