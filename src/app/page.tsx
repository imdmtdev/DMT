import Hero from "@/sections/Hero";
import StatsCounter from "@/components/StatsCounter";
import Services from "@/sections/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/sections/Process";
import TechStack from "@/components/TechStack";
import CaseStudy from "@/sections/CaseStudy";
import Clients from "@/sections/Clients";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import NewsletterSection from "@/components/NewsletterSection";
import ContactForm from "@/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <Services />
      <WhyChooseUs />
      <Process />
      <TechStack />
      <CaseStudy />
      <Clients />
      <Testimonials />
      <FAQ />
      <NewsletterSection />
      <ContactForm />
    </>
  );
}
