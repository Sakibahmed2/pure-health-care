import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import HowItWorks from "@/components/ui/HomePage/HowItWorks/HowItWorks";
import Specialist from "@/components/ui/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/ui/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/ui/HomePage/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
      <HowItWorks />
    </>
  );
};

export default HomePage;
