
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <PricingSection />
      <ContactForm />
    </div>
  );
};

export default Index;
