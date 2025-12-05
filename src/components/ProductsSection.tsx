import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layers, Flame, MessageCircle } from "lucide-react";
import { ContactModal } from "./ContactModal";

type ProductCategory = "all" | "polyester" | "batubara";

interface Product {
  id: string;
  name: string;
  category: "polyester" | "batubara";
  description: string;
  specs: string[];
  price: string;
  moq: string;
  readyTime: string;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: "poly-a",
    name: "Polyester Roll A",
    category: "polyester",
    description: "Kain polyester berkualitas tinggi untuk konveksi massal dengan daya tahan optimal.",
    specs: ["Roll 30 meter", "Ketebalan 150 gsm", "Lebar 150 cm"],
    price: "Rp 450.000",
    moq: "5 roll",
    readyTime: "1-2 hari kerja",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop",
    badge: "Best Seller",
  },
  {
    id: "poly-b",
    name: "Polyester Roll B - Premium",
    category: "polyester",
    description: "Varian premium dengan tekstur lebih halus, cocok untuk produk fashion.",
    specs: ["Roll 25 meter", "Ketebalan 180 gsm", "Lebar 150 cm"],
    price: "Rp 575.000",
    moq: "3 roll",
    readyTime: "1-2 hari kerja",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop",
  },
  {
    id: "poly-c",
    name: "Polyester Roll C - Economy",
    category: "polyester",
    description: "Pilihan ekonomis untuk produksi skala besar dengan harga terjangkau.",
    specs: ["Roll 40 meter", "Ketebalan 120 gsm", "Lebar 140 cm"],
    price: "Rp 380.000",
    moq: "10 roll",
    readyTime: "3-5 hari kerja",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop",
    badge: "Hemat",
  },
  {
    id: "coal-a",
    name: "Batu Bara Grade A",
    category: "batubara",
    description: "Batu bara kalori tinggi untuk boiler pabrik finishing dengan efisiensi maksimal.",
    specs: ["Kalori 6.200+ kcal/kg", "Moisture < 10%", "Ash content < 8%"],
    price: "Rp 2.100.000",
    moq: "1 ton",
    readyTime: "2-3 hari kerja",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop",
    badge: "Premium",
  },
  {
    id: "coal-b",
    name: "Batu Bara Grade B",
    category: "batubara",
    description: "Pilihan standar untuk kebutuhan finishing dengan harga kompetitif.",
    specs: ["Kalori 5.500+ kcal/kg", "Moisture < 12%", "Ash content < 12%"],
    price: "Rp 1.750.000",
    moq: "2 ton",
    readyTime: "2-3 hari kerja",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=300&fit=crop",
  },
  {
    id: "coal-c",
    name: "Batu Bara Grade C - Industrial",
    category: "batubara",
    description: "Cocok untuk kebutuhan industri dengan volume besar.",
    specs: ["Kalori 4.800+ kcal/kg", "Moisture < 15%", "Tersedia dalam jumlah besar"],
    price: "Rp 1.400.000",
    moq: "5 ton",
    readyTime: "3-5 hari kerja",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=300&fit=crop",
  },
];

const categories = [
  { id: "all" as const, label: "Semua Produk", icon: null },
  { id: "polyester" as const, label: "Kain Polyester", icon: Layers },
  { id: "batubara" as const, label: "Batu Bara", icon: Flame },
];

export const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>("");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleRequestQuote = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  return (
    <section id="produk" className="py-20 md:py-28">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Katalog Produk
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Produk Berkualitas untuk Industri Anda
          </h2>
          <p className="text-muted-foreground">
            Kami menyediakan berbagai pilihan kain polyester dan batu bara dengan kualitas terbaik untuk memenuhi kebutuhan produksi Anda.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.icon && <cat.icon className="w-4 h-4" />}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {product.category === "polyester" ? (
                    <Layers className="w-4 h-4 text-primary" />
                  ) : (
                    <Flame className="w-4 h-4 text-primary" />
                  )}
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {product.category === "polyester" ? "Kain Polyester" : "Batu Bara"}
                  </span>
                </div>

                <h3 className="font-semibold text-lg text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                {/* Specs */}
                <div className="space-y-1 mb-4">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {spec}
                    </div>
                  ))}
                </div>

                {/* Price & MOQ */}
                <div className="flex items-end justify-between mb-4 pt-4 border-t border-border/50">
                  <div>
                    <div className="text-2xl font-bold text-foreground">{product.price}</div>
                    <div className="text-xs text-muted-foreground">
                      / {product.category === "polyester" ? "roll" : "ton"}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">MOQ: {product.moq}</div>
                    <div className="text-xs text-muted-foreground">Siap: {product.readyTime}</div>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleRequestQuote(product.name)}
                >
                  <MessageCircle className="w-4 h-4" />
                  Minta Penawaran
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        selectedProduct={selectedProduct}
      />
    </section>
  );
};
