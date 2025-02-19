import AdventagesSection from "./AdventagesSection";
import HeroSection from "./HeroSection";
import OurCimenasSection from "./OurCinemasSection";
import LocationSection from "./LocationSection";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AdventagesSection />
      <OurCimenasSection />
      <LocationSection />
      <Footer />
    </div>
  );
}

export default About;
