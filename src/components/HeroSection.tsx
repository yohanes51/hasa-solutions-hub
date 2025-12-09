import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, ChevronDown, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "6287892882525";
const WHATSAPP_MESSAGE = encodeURIComponent("Halo HASA, saya tertarik dengan produk Anda. Mohon informasi lebih lanjut.");

export const HeroSection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] bg-primary/3 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
      
      {/* Floating Elements */}
      <div className="absolute top-1/3 right-[15%] w-24 h-24 border-2 border-primary/10 rounded-2xl rotate-12 animate-float hidden lg:block" />
      <div className="absolute bottom-1/3 left-[10%] w-16 h-16 bg-primary/5 rounded-xl rotate-45 animate-float hidden lg:block" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-[20%] w-8 h-8 bg-primary/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="badge-professional mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Supplier Terpercaya Sejak 2025</span>
          </div>

          {/* Headline */}
          <h1 className="text-display text-foreground mb-6 animate-slide-up">
            Solusi <span className="text-gradient">Bahan & Energi</span>
            <br />untuk Industri Tekstil
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up delay-100">
            Kain polyester roll berkualitas dan batu bara untuk finishing pabrik.
            <span className="block mt-2 text-foreground/80 font-medium">Pengambilan langsung di Bandung.</span>
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-20 pt-12 border-t border-border/30 animate-slide-up delay-300">
            <div className="text-center group">
              <div className="text-3xl md:text-5xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                50<span className="text-primary">+</span>
              </div>
              <div className="text-caption text-muted-foreground mt-2">Klien Pabrik</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-5xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                1000<span className="text-primary">+</span>
              </div>
              <div className="text-caption text-muted-foreground mt-2">Roll Terjual</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-5xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                24<span className="text-primary">/7</span>
              </div>
              <div className="text-caption text-muted-foreground mt-2">Layanan</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
