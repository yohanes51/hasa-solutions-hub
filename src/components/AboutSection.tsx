import { Factory, Truck, Shield, Target, Handshake, Zap, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Factory,
    title: "Pasokan Langsung dari Pabrik",
    description: "Hubungan langsung dengan produsen menjamin ketersediaan stok, harga kompetitif, dan kualitas yang konsisten.",
  },
  {
    icon: Shield,
    title: "Kualitas Terjamin",
    description: "Setiap produk melalui quality control ketat untuk memastikan standar industri terpenuhi.",
  },
  {
    icon: Truck,
    title: "Distribusi Terstandarisasi",
    description: "Proses distribusi yang transparan dan efisien untuk mendukung operasional mitra kami.",
  },
];

const values = [
  { icon: Target, label: "Kualitas Konsisten" },
  { icon: Handshake, label: "Layanan Responsif" },
  { icon: Zap, label: "Operasional Efisien" },
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
              Distributor Bahan Baku Industri Tekstil Terpercaya
            </h2>
            
            <div className="space-y-5 mb-10">
              <p className="text-body-lg text-muted-foreground">
                <strong className="text-foreground font-semibold">HASA</strong> adalah perusahaan distribusi bahan baku industri yang berfokus pada penyediaan <strong className="text-foreground font-semibold">kain polyester</strong> dan <strong className="text-foreground font-semibold">batu bara</strong> untuk kebutuhan pabrik tekstil.
              </p>
              <p className="text-body text-muted-foreground">
                Berlokasi di <strong className="text-foreground font-semibold">Bandung</strong>, HASA berkomitmen untuk memberikan pasokan material berkualitas, layanan yang responsif, serta operasional yang efisien bagi mitra industri skala kecil hingga menengah.
              </p>
              <p className="text-body text-muted-foreground">
                Didukung oleh hubungan langsung dengan pabrik, HASA memastikan kualitas produk yang konsisten serta proses distribusi yang transparan dan terstandarisasi.
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
