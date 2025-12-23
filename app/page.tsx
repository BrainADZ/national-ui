import AboutSection from "@/sections/about";
import FaqSection from "@/sections/Accordian";
import BrandLogosCarousel from "@/sections/brands";
import CompetitiveAdvantageSection from "@/sections/CompetitiveAdvantageSection";
import StatsSection from "@/sections/counters";
// import HeroSlider from "@/sections/heroSlider";  
import HeroVideoSection from "@/sections/heroVideoSlider";
import HowWeWorkSection from "@/sections/HowWeWorkSection";
import IndustriesSection from "@/sections/IndustriesSection";
import MdDeskSection from "@/sections/MdDeskSection";
import ProductsSection from "@/sections/ProductsSection";
import TestimonialsSection from "@/sections/Testimonial";
export default function Home() {
  return (
      <main>
        {/* <HeroSlider/> */}
        <HeroVideoSection/>
        <BrandLogosCarousel/>
        <AboutSection/>
        <StatsSection/>
        <ProductsSection/>
        <IndustriesSection/>
        <MdDeskSection/>
        <CompetitiveAdvantageSection/>
        <HowWeWorkSection/>
        <TestimonialsSection/>
        <FaqSection/>

      </main>
  );
}
