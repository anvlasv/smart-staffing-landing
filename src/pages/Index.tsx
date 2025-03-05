
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <TooltipProvider>
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <BenefitsSection />
          <PricingSection />
          <div id="faq">
            <FAQSection />
          </div>
          <ContactForm />
        </main>
        <Footer />
      </TooltipProvider>
    </div>
  );
};

export default Index;
