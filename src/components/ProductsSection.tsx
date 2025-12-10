import productCoalTR5800 from "@/assets/product-coal-tr5800.jpg";
import productLM76 from "@/assets/product-lm76.jpg";
import productLM80 from "@/assets/product-lm80.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Flame, Layers, MessageCircle } from "lucide-react";
import { useState } from "react";
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
    id: "poly-lm80",
    name: "LM80 Premium White",
    category: "polyester",
    description: "Kain polyester LM80 berkualitas tinggi untuk konveksi massal dengan daya tahan optimal.",
    specs: ["Roll ±60 Yard(±90cm)*", "Berat 13,15 kg", "Lebar 150 cm", "*Panjang tidak selalu 60 yard"],
    price: "Rp 16.500",
    moq: "2.400 yard",
    readyTime: "1-14 hari kerja",
    image: productLM80,
    badge: "Best Seller",
  },
  {
    id: "poly-lm76",
    name: "LM76 Premium White",
    category: "polyester",
    description: "Kain polyester LM76 dengan tekstur halus, cocok untuk produk fashion.",
    specs: ["Roll ±60 Yard(±90cm)*", "Berat 9,60 kg", "Lebar 150 cm", "*Panjang tidak selalu 60 yard"],
    price: "Rp 14.500",
    moq: "2.400 yard",
    readyTime: "1-14 hari kerja",
    image: productLM76,
  },
  {
    id: "poly-c",
    name: "Polyester Roll C - Economy",
    category: "polyester",
    description: "Pilihan ekonomis untuk produksi skala besar dengan harga terjangkau.",
    specs: ["Roll 40 meter", "Ketebalan 120 gsm", "Lebar 140 cm"],
    price: "Rp 380.000",
    moq: "10 roll",
    readyTime: "1-14 hari kerja",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop",
    badge: "Hemat",
  },
  {
    id: "coal-a",
    name: "TR Kal 5800",
    category: "batubara",
    description: "Batu bara kalori tinggi untuk kebutuhan finishing dan steam boiler industri tekstil.",
    specs: ["Kalori 5.800 GAR", "Kualitas Premium"],
    price: "Rp 1.130 + PPN /kg",
    moq: "±30 ton",
    readyTime: "7-14 hari kerja",
    image: productCoalTR5800,
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
    <section id="produk" className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge-professional mb-6">
            Katalog Produk
          </div>
          <h2 className="text-headline text-foreground mb-5">
            Produk Berkualitas untuk Industri Anda
          </h2>
          <p className="text-body text-muted-foreground">
            Kami menyediakan berbagai pilihan kain polyester dan batu bara dengan kualitas terbaik untuk memenuhi kebutuhan produksi Anda.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-foreground text-background shadow-lg"
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
          {filteredProducts.map((product, index) => (
            <article
              key={product.id}
              className="group card-professional overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-semibold shadow-lg">
                    {product.badge}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    product.category === "polyester" ? "bg-blue-500/10" : "bg-orange-500/10"
                  }`}>
                    {product.category === "polyester" ? (
                      <Layers className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Flame className="w-4 h-4 text-orange-600" />
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    {product.category === "polyester" ? "Kain Polyester" : "Batu Bara"}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-caption text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

                {/* Specs */}
                <div className="space-y-1.5 mb-5">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>

                {/* Price & MOQ */}
                <div className="flex items-end justify-between mb-5 pt-5 border-t border-border/50">
                  <div>
                    <div className="text-2xl font-extrabold text-foreground">{product.price}</div>
                    <div className="text-xs text-muted-foreground">
                      / {product.category === "polyester" ? "yard" : "kg"}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">MOQ: <span className="font-semibold text-foreground">{product.moq}</span></div>
                    <div className="text-xs text-muted-foreground">Siap: {product.readyTime}</div>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full group/btn" 
                  variant="outline"
                  onClick={() => handleRequestQuote(product.name)}
                >
                  <MessageCircle className="w-4 h-4" />
                  Minta Penawaran
                  <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
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
