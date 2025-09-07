import HeroSection from "../components/Home/HeroSection";
import FAQs from "../components/Home/FAQs";
import AboutUs from "../components/Home/AboutUs";
import ServicesSection from "../components/Home/ServicesSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ClientLogos from "../components/Home/ClientLogos";
import Testimonials from "../components/Home/Testimonials";
import MomentsThatMatter from "../components/Home/MomentsThatMatter";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-black font-interphase">
      <HeroSection />
      <div className="w-full text-white bg-black">
        <AboutUs />
        <ServicesSection />
        <WhyChooseUs />
        <MomentsThatMatter />
        <ClientLogos />
        <Testimonials />
        <FAQs />
      </div>
    </div>
  );
};

export default Home;