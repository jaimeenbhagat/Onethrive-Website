import { Title, Meta, Link } from "react-head";
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
      {/* ✅ SEO Meta Tags for Home Page */}
      <Title>OneThrive - Employee Engagement & Team Building</Title>
      <Meta
        name="description"
        content="OneThrive brings workplaces to life through employee engagement, team-building experiences, and corporate wellness programs that uplift morale and fuel innovation."
      />
      <Meta
        name="keywords"
        content="OneThrive, employee engagement, team building, workplace culture, retreats, corporate wellness, HR events, leadership training, mindfulness workshops"
      />
      <Meta name="author" content="OneThrive Team" />
      <Meta
        property="og:title"
        content="OneThrive - Employee Engagement & Team Building"
      />
      <Meta
        property="og:description"
        content="Transform your workplace culture with OneThrive's engaging programs. From offsite retreats to wellness events, we craft meaningful experiences that drive collaboration and well-being."
      />
      <Meta
        property="og:image"
        content="https://onethrive.in/Onethrive%20tab%20logo.png"
      />
      <Meta property="og:url" content="https://onethrive.in/" />
      <Meta property="og:type" content="website" />
      <Link rel="canonical" href="https://onethrive.in/" />

      {/* ✅ Page Components */}
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
