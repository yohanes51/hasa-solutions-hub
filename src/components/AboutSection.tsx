import { CheckCircle, Factory, Truck, Shield, Target, Handshake } from "lucide-react";

const benefits = [
  {
    icon: Factory,
    title: "Pasokan Langsung dari Pabrik",
    description: "Hubungan langsung dengan produsen menjamin ketersediaan stok, harga kompetitif, dan kualitas yang konsisten.",
  },
  {
    icon: Shield,
    title: "Kualitas Terjamin",
    description: "Setiap produk melalui quality control ketat untuk memastikan standar industri terpenuhi sebelum sampai ke tangan Anda.",
  },
  {
    icon: Truck,
    title: "Distribusi Terstandarisasi",
    description: "Proses distribusi yang transparan dan terstandarisasi untuk memastikan efisiensi operasional mitra kami.",
  },
];

const values = [
  { icon: Target, label: "Kualitas Konsisten" },
  { icon: Handshake, label: "Layanan Responsif" },
  { icon: Factory, label: "Operasional Efisien" },
];

export const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-hasa-light">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Tentang HASA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Distributor Bahan Baku Industri Tekstil Terpercaya
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <strong className="text-foreground">HASA</strong> adalah perusahaan distribusi bahan baku industri yang berfokus pada penyediaan <strong className="text-foreground">kain polyester</strong> dan <strong className="text-foreground">batu bara</strong> untuk kebutuhan pabrik tekstil.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Berlokasi di <strong className="text-foreground">Bandung</strong>, HASA berkomitmen untuk memberikan pasokan material berkualitas, layanan yang responsif, serta operasional yang efisien bagi mitra industri skala kecil hingga menengah.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Didukung oleh hubungan langsung dengan pabrik, HASA memastikan kualitas produk yang konsisten serta proses distribusi yang transparan dan terstandarisasi.
            </p>
            
            {/* Values */}
            <div className="flex flex-wrap gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{value.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 bg-card rounded-xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};