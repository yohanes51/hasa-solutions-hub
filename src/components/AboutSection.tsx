import { CheckCircle, Factory, Truck, Shield } from "lucide-react";

const benefits = [
  {
    icon: Factory,
    title: "Pasokan Langsung dari Pabrik",
    description: "Kami bekerja sama langsung dengan pabrik produsen untuk menjamin ketersediaan stok dan harga kompetitif.",
  },
  {
    icon: Shield,
    title: "Kualitas Terjaga",
    description: "Setiap produk melalui quality control ketat untuk memastikan standar industri terpenuhi.",
  },
  {
    icon: Truck,
    title: "Layanan B2B & Pengambilan Langsung",
    description: "Fleksibilitas pengambilan langsung di lokasi atau pengiriman sesuai kebutuhan bisnis Anda.",
  },
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
              Partner Terpercaya untuk Kebutuhan Industri Tekstil Anda
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Didirikan pada tahun 2025, HASA hadir sebagai distributor kain polyester berkualitas tinggi untuk industri konveksi dan manufaktur tekstil. Kami juga menyediakan pasokan batu bara untuk mendukung proses finishing di pabrik-pabrik tekstil di Indonesia.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Misi kami adalah menjadi mitra bisnis yang dapat diandalkan dengan menyediakan bahan baku berkualitas, harga bersaing, dan layanan yang responsif untuk mendukung pertumbuhan industri tekstil nasional.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Harga Kompetitif</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Stok Tersedia</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Layanan Cepat</span>
              </div>
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
