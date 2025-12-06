import { Button } from "@/components/ui/button";
import { Search, MessageCircle, Truck, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Pilih Produk",
    description: "Jelajahi katalog kami dan pilih produk yang sesuai dengan kebutuhan bisnis Anda.",
    highlights: ["Berbagai pilihan", "Spesifikasi jelas"],
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Hubungi Kami",
    description: "Kirim permintaan via WhatsApp, telepon, atau isi form kontak untuk negosiasi harga.",
    highlights: ["Respon cepat", "Harga kompetitif"],
  },
  {
    number: "03",
    icon: Truck,
    title: "Ambil atau Kirim",
    description: "Jadwalkan pengambilan langsung di lokasi kami atau atur pengiriman ke tempat Anda.",
    highlights: ["Fleksibel", "Tepat waktu"],
  },
];

const WHATSAPP_NUMBER = "6287892882525";

export const HowToOrderSection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo HASA, saya ingin memesan produk.")}`;

  return (
    <section id="cara-order" className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />

      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-primary/20 text-primary border border-primary/20">
            Cara Order
          </div>
          <h2 className="text-headline mb-5">
            Pemesanan Mudah dalam 3 Langkah
          </h2>
          <p className="text-body text-background/70">
            Proses order yang simpel dan cepat. Kami siap membantu kebutuhan bahan baku industri Anda.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-[2px] bg-background/10">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-background/30" />
                </div>
              )}
              
              <div className="relative bg-background/5 backdrop-blur-sm rounded-2xl p-8 border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-500 h-full group-hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-background/70 mb-6">{step.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {step.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-background/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-background/70 mb-8 text-lg">
            Siap untuk memesan? Hubungi tim kami sekarang!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="whatsapp" size="xl" asChild className="shadow-lg">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              asChild
              className="border-background/20 text-background hover:bg-background/10"
            >
              <a href="#kontak">
                Isi Form Kontak
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
