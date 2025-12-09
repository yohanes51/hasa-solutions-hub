import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, ChevronDown, Sparkles } from "lucide-react";
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
      <div className="absolute inset-0 bg-white/40" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Headline */}
          <h1 className="text-display text-black mb-6 animate-slide-up">
            Solusi <span className="text-black font-extrabold">Bahan & Energi</span>
            <br />untuk Industri Tekstil
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-black/80 max-w-2xl mx-auto mb-12 animate-slide-up delay-100">
            Kain roll berkualitas — Batu bara untuk finishing — Pengambilan langsung,
            <span className="block mt-2 text-black font-medium">layanan bisnis terpercaya.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
            <Button variant="hero" size="xl" asChild className="group">
              <a href="#produk">
                Lihat Katalog
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Hubungi Kami
              </a>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};
