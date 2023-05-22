import ContactUsSection from "./components/ContactUsSection";
import FooterSection from "./components/FooterSection";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import ServiceSection from "./components/ServiceSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <ProjectSection />
      <TestimonialsSection />
      <ContactUsSection />
      <FooterSection />
    </>
  );
}
