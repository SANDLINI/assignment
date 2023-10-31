import React from "react";
import Header from "../components/Header/Header";
import Companies from "../components/Comapanies/Companies";
import LowerSection from "../components/LowerSection/LowerSection";
import MobileHeader from "../components/Header/MobileHeader";

const LandingPage = () => {
  return (
    <div>
      <MobileHeader />
      <Header />
      <Companies />
      <LowerSection />
    </div>
  );
};

export default LandingPage;
