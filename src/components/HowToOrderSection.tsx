import { Button } from "@/components/ui/button";
import { Search, MessageCircle, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Pilih Produk",
    description: "Jelajahi katalog kami dan pilih produk yang sesuai dengan kebutuhan bisnis Anda.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Hubungi Kami",
    description: "Kirim permintaan via WhatsApp, telepon, atau isi form kontak untuk negosiasi harga.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Ambil atau Kirim",
    description: "Jadwalkan pengambilan langsung di lokasi kami atau atur pengiriman ke tempat Anda.",
  },
];

const WHATSAPP_NUMBER = "6287812345678";

export const HowToOrderSection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo HASA, saya ingin memesan produk.")}`;

  return (
    <section id="cara-order" className="py-20 md:py-28">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Cara Order
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pemesanan Mudah dalam 3 Langkah
          </h2>
          <p className="text-muted-foreground">
            Proses order yang simpel dan cepat. Kami siap membantu kebutuhan bahan baku industri Anda.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-border">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              )}
              
              <div className="relative bg-card rounded-xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-semibold text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Siap untuk memesan? Hubungi tim kami sekarang!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="whatsapp" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#kontak">
                Isi Form Kontak
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
