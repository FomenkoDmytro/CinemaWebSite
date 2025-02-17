import AdventagesSection from "./AdventagesSection";
import HeroSection from "./HeroSection";
import OurCimenasSection from "./OurCinemasSection";
import SubscribeSection from "./SubscribeSection";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AdventagesSection />
      <OurCimenasSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default Home;
