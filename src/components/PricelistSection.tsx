import { Button } from "@/components/ui/button";
import { MessageCircle, Download, Info } from "lucide-react";

const pricelistItems = [
  {
    category: "Kain Polyester",
    items: [
      { name: "Polyester Roll A", spec: "30m × 150cm × 150gsm", price: "Rp 450.000/roll", moq: "5 roll" },
      { name: "Polyester Roll B Premium", spec: "25m × 150cm × 180gsm", price: "Rp 575.000/roll", moq: "3 roll" },
      { name: "Polyester Roll C Economy", spec: "40m × 140cm × 120gsm", price: "Rp 380.000/roll", moq: "10 roll" },
    ],
  },
  {
    category: "Batu Bara",
    items: [
      { name: "Grade A (Premium)", spec: "6.200+ kcal/kg", price: "Rp 2.100.000/ton", moq: "1 ton" },
      { name: "Grade B (Standard)", spec: "5.500+ kcal/kg", price: "Rp 1.750.000/ton", moq: "2 ton" },
      { name: "Grade C (Industrial)", spec: "4.800+ kcal/kg", price: "Rp 1.400.000/ton", moq: "5 ton" },
    ],
  },
];

const WHATSAPP_NUMBER = "6287892882525";

export const PricelistSection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo HASA, saya ingin konfirmasi harga terbaru.")}`;

  return (
    <section id="pricelist" className="py-20 md:py-28 bg-hasa-light">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Daftar Harga
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pricelist Produk HASA
          </h2>
          <p className="text-muted-foreground">
            Harga transparan dan kompetitif untuk semua produk kami. Dapatkan penawaran khusus untuk pembelian dalam jumlah besar.
          </p>
        </div>

        {/* Pricelist Tables */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {pricelistItems.map((category, idx) => (
            <div key={idx} className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-sm">
              <div className="bg-primary/5 px-6 py-4 border-b border-border/50">
                <h3 className="font-semibold text-lg text-foreground">{category.category}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50 text-left">
                      <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Produk</th>
                      <th className="px-6 py-4 text-sm font-medium text-muted-foreground hidden sm:table-cell">Spesifikasi</th>
                      <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Harga</th>
                      <th className="px-6 py-4 text-sm font-medium text-muted-foreground hidden md:table-cell">MOQ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-b-0 hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-foreground">{item.name}</div>
                          <div className="text-xs text-muted-foreground sm:hidden mt-1">{item.spec}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground hidden sm:table-cell">{item.spec}</td>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-primary">{item.price}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground hidden md:table-cell">{item.moq}</td>
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
          <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">Catatan:</strong> Harga dapat berubah sewaktu-waktu. Hubungi kami untuk konfirmasi harga terbaru dan negosiasi pembelian dalam jumlah besar.
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button variant="hero" size="lg" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Konfirmasi Harga
            </a>
          </Button>
          <Button variant="outline" size="lg">
            <Download className="w-5 h-5" />
            Download Pricelist PDF
          </Button>
        </div>
      </div>
    </section>
  );
};
