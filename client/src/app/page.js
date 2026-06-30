// app/page.js
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import CompletedProjects from "@/components/home/CompletedProjects";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import InteriorMarquee from "@/components/home/InteriorMarquee";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <CompletedProjects />
      <FeaturedProperties />
      <InteriorMarquee />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}
