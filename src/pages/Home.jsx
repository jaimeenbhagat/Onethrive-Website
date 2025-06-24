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
    <section className="w-full text-white bg-black font-interphase">
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <WhyChooseUs />
      <MomentsThatMatter />
      <ClientLogos />
      <Testimonials />
      <FAQs />
    </section>
  );
};

export default Home;