import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
