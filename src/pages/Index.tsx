import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSection } from "@/components/ProductsSection";
import { PricelistSection } from "@/components/PricelistSection";
import { HowToOrderSection } from "@/components/HowToOrderSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <PricelistSection />
      <HowToOrderSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
