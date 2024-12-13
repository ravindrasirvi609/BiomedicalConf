import React from "react";
import HeroSection from "./HeroSection";
import KeyHighlights from "./KeyHighlights";
import ConferenceThemes from "./ConferenceThemes";
import CTA from "./CTA";
import CallForPapers from "./CallForPapers";
import SponsorsPartners from "./SponsorsPartners";
import VenueInformation from "./VenueInformation";
import AboutConference from "./AboutConference";

const ConferenceHomepage: React.FC = () => {
  return (
    <div>
      {/* Navigation */}

      {/* Hero Section */}
      <HeroSection />

      <AboutConference />

      {/* Key Highlights */}
      <KeyHighlights />

      {/* Conference Overview */}
      <ConferenceThemes />

      <CTA />

      <CallForPapers />

      <SponsorsPartners />

      {/* Footer */}
      <VenueInformation />
    </div>
  );
};

export default ConferenceHomepage;
