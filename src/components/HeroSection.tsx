import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import warehouseBackground from "@/assets/warehouse-background.png";

const WHATSAPP_NUMBER = "6287892882525";
const WHATSAPP_MESSAGE = encodeURIComponent("Halo HASA, saya tertarik dengan produk Anda. Mohon informasi lebih lanjut.");

export const HeroSection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${warehouseBackground})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm border border-background/30 text-background text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Supplier Terpercaya Sejak 2025</span>
          </div>

          {/* Headline */}
          <h1 className="text-display text-background mb-6 animate-slide-up">
            Solusi <span className="text-primary">Bahan & Energi</span>
            <br />untuk Industri Tekstil
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-background/80 max-w-2xl mx-auto mb-12 animate-slide-up delay-100">
            Kain polyester roll berkualitas dan batu bara untuk finishing pabrik.
            <span className="block mt-2 text-background font-medium">Pengambilan langsung di Bandung.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
            <Button variant="hero" size="xl" asChild className="group">
              <a href="#produk">
                Lihat Katalog
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild className="text-background border-background/50 hover:bg-background/20">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Hubungi Kami
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-20 pt-12 border-t border-background/20 animate-slide-up delay-300">
            <div className="text-center group">
              <div className="text-3xl md:text-5xl font-extrabold text-background group-hover:text-primary transition-colors">
                50<span className="text-primary">+</span>
              </div>
              <div className="text-caption text-background/70 mt-2">Klien Pabrik</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-5xl font-extrabold text-background group-hover:text-primary transition-colors">
                1000<span className="text-primary">+</span>
              </div>
              <div className="text-caption text-background/70 mt-2">Roll Terjual</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-5xl font-extrabold text-background group-hover:text-primary transition-colors">
                24<span className="text-primary">/7</span>
              </div>
              <div className="text-caption text-background/70 mt-2">Layanan</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-background/70 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-background/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
