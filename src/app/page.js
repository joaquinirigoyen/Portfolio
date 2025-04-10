import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import Technologies from "../components/Technologies/Thechnologies";
import Projects from "../components/Projects/Projects";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer ";
import WppButton from "../components/WppButton/WppButton";
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <WppButton />
      <HeroSection />
      <AboutSection />
      <Technologies />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
