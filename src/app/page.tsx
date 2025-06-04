import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
