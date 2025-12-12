import { Factory, Truck, Shield, Target, Handshake, Zap, CheckCircle2, Smartphone, Clock, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Order Digital via WhatsApp",
    description: "Proses pemesanan modern melalui WhatsApp. Cukup kirim pesan, terima penawaran, dan konfirmasi order.",
  },
  {
    icon: Clock,
    title: "Respon Cepat < 24 Jam",
    description: "Tim kami siap merespon setiap inquiry dalam waktu kurang dari 24 jam kerja.",
  },
  {
    icon: BarChart3,
    title: "Tracking Transparan",
    description: "Pantau status pesanan dan ketersediaan stok secara real-time melalui komunikasi langsung.",
  },
  {
    icon: Factory,
    title: "Pasokan Langsung Pabrik",
    description: "Hubungan langsung dengan produsen menjamin ketersediaan stok dan harga kompetitif.",
  },
];

const values = [
  { icon: Target, label: "Sistem Digital" },
  { icon: Handshake, label: "Proses Transparan" },
  { icon: Zap, label: "Respon Cepat" },
];

export const AboutSection = () => {
  return (
    <section id="tentang" className="section-padding bg-hasa-light relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="badge-professional mb-6">
              Tentang HASA
            </div>
            <h2 className="text-headline text-foreground mb-8">
              Distribusi Modern dengan <span className="text-primary">Sistem Digital</span>
            </h2>
            
            <div className="space-y-5 mb-10">
              <p className="text-body-lg text-muted-foreground">
                <strong className="text-foreground font-semibold">HASA</strong> menghadirkan cara baru dalam distribusi bahan baku industri. Dengan <strong className="text-foreground font-semibold">sistem order digital</strong>, Anda dapat memesan kain polyester dan batu bara dengan mudah via WhatsApp.
              </p>
              <p className="text-body text-muted-foreground">
                Berlokasi di <strong className="text-foreground font-semibold">Bandung</strong>, kami mengkombinasikan <strong className="text-foreground font-semibold">kemudahan teknologi</strong> dengan layanan personal untuk mitra industri skala kecil hingga menengah.
              </p>
              <p className="text-body text-muted-foreground">
                Proses pemesanan transparan, tracking real-time via chat, dan konfirmasi instan. <strong className="text-foreground font-semibold">Tidak perlu telepon berulang kali</strong> — cukup satu chat untuk semua kebutuhan.
              </p>
            </div>
            
            {/* Values */}
            <div className="flex flex-wrap gap-3">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 px-4 py-3 bg-background rounded-xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-sm">{value.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="space-y-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card-professional p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-cta flex items-center justify-center shadow-md">
                    <benefit.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-caption text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 mt-4 border-t border-border/50">
              {[
                "Harga Kompetitif",
                "Stok Tersedia",
                "Layanan Cepat"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-caption text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
