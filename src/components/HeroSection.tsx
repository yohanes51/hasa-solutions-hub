import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const WHATSAPP_NUMBER = "6287892882525";
const WHATSAPP_MESSAGE = encodeURIComponent("Halo HASA, saya tertarik dengan produk Anda. Mohon informasi lebih lanjut.");

export const HeroSection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/30" />

      <div className="container relative z-10">
        <div className="max-w-2xl">

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Solusi Bahan & Energi untuk
            <br />Industri Tekstil
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-black/80 mb-8 leading-relaxed">
            Kain roll berkualitas — Batu bara untuk finishing — Pengambilan langsung,
            <br />layanan bisnis terpercaya.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button 
              size="lg" 
              asChild 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold rounded-md shadow-lg group"
            >
              <a href="#produk">
                Lihat Katalog
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="bg-white border-2 border-black/20 text-black hover:bg-white/90 px-8 py-6 text-base font-semibold rounded-md"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Hubungi Kami
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
