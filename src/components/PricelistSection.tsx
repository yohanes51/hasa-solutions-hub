import { Button } from "@/components/ui/button";
import { MessageCircle, Download, Info, CheckCircle2 } from "lucide-react";

const pricelistItems = [
  {
    category: "Kain Polyester",
    icon: "🧵",
    items: [
      { name: "LM80 Premium White", spec: "±60 yard × 150cm", price: "Rp 16.500/yard", moq: "2.400 yard" },
      { name: "LM76 Premium White", spec: "±60 yard × 150cm", price: "Rp 14.500/yard", moq: "2.400 yard" },
      { name: "Bsy 4200 White", spec: "±60 yard × 120cm", price: "Rp 10.600/yard", moq: "±2000 roll" },
    ],
  },
  {
    category: "Batu Bara",
    icon: "⚡",
    items: [
      { name: "Lumpy", spec: "High calorie 0-50", price: "Rp 1.310 + PPN/kg", moq: "±30 ton" },
      { name: "Asalan 5800", spec: "Kalori 5.800+ kcal/kg", price: "Rp 1.120 + PPN/kg", moq: "2 ton" },
    ],
  },
];

const WHATSAPP_NUMBER = "6287892882525";

export const PricelistSection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo HASA, saya ingin konfirmasi harga terbaru.")}`;

  return (
    <section id="pricelist" className="section-padding bg-hasa-light relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />

      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-professional mb-6">
            Daftar Harga
          </div>
          <h2 className="text-headline text-foreground mb-5">
            Pricelist Produk HASA
          </h2>
          <p className="text-body text-muted-foreground">
            Harga transparan dan kompetitif untuk semua produk kami. Dapatkan penawaran khusus untuk pembelian dalam jumlah besar.
          </p>
        </div>

        {/* Pricelist Tables */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {pricelistItems.map((category, idx) => (
            <div 
              key={idx} 
              className="card-professional overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="bg-gradient-to-r from-primary/5 to-transparent px-8 py-5 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-bold text-xl text-foreground">{category.category}</h3>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50 text-left">
                      <th className="px-8 py-4 text-sm font-semibold text-muted-foreground">Produk</th>
                      <th className="px-8 py-4 text-sm font-semibold text-muted-foreground hidden sm:table-cell">Spesifikasi</th>
                      <th className="px-8 py-4 text-sm font-semibold text-muted-foreground">Harga</th>
                      <th className="px-8 py-4 text-sm font-semibold text-muted-foreground hidden md:table-cell">MOQ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, i) => (
                      <tr key={i} className="border-b border-border/30 last:border-b-0 hover:bg-muted/30 transition-colors group">
                        <td className="px-8 py-5">
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</div>
                          <div className="text-xs text-muted-foreground sm:hidden mt-1">{item.spec}</div>
                        </td>
                        <td className="px-8 py-5 text-sm text-muted-foreground hidden sm:table-cell">{item.spec}</td>
                        <td className="px-8 py-5">
                          <div className="font-bold text-lg text-primary">{item.price}</div>
                        </td>
                        <td className="px-8 py-5 text-sm text-muted-foreground hidden md:table-cell">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted rounded-full text-xs font-medium">
                            {item.moq}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex items-start gap-4 p-5 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground font-semibold">Catatan:</strong> Harga dapat berubah sewaktu-waktu. Hubungi kami untuk konfirmasi harga terbaru dan negosiasi pembelian dalam jumlah besar.
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button variant="hero" size="xl" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Konfirmasi Harga
            </a>
          </Button>
          <Button variant="outline" size="xl">
            <Download className="w-5 h-5" />
            Download Pricelist PDF
          </Button>
        </div>
      </div>
    </section>
  );
};
