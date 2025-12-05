import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const footerLinks = {
  menu: [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Produk", href: "#produk" },
    { label: "Pricelist", href: "#pricelist" },
    { label: "Cara Order", href: "#cara-order" },
    { label: "Kontak", href: "#kontak" },
  ],
  products: [
    { label: "Kain Polyester Roll A", href: "#produk" },
    { label: "Kain Polyester Roll B", href: "#produk" },
    { label: "Batu Bara Grade A", href: "#produk" },
    { label: "Batu Bara Grade B", href: "#produk" },
  ],
  legal: [
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
  ],
};

const WHATSAPP_NUMBER = "6287812345678";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#beranda" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-xl">HASA</span>
            </a>
            <p className="text-background/70 text-sm mb-6 leading-relaxed">
              Distributor kain polyester dan supplier batu bara terpercaya untuk industri tekstil di Indonesia. Melayani kebutuhan B2B sejak 2025.
            </p>
            <div className="space-y-3">
              <a href="tel:087812345678" className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                087812345678
              </a>
              <a href="mailto:info@hasa.id" className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@hasa.id
              </a>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4" />
                Bandung, Jawa Barat
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Menu</h4>
            <ul className="space-y-3">
              {footerLinks.menu.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Produk</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Butuh Bantuan?</h4>
            <p className="text-sm text-background/70 mb-4">
              Hubungi tim kami via WhatsApp untuk konsultasi dan penawaran produk.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#128C7E] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} HASA. Semua hak dilindungi.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link, i) => (
              <a key={i} href={link.href} className="text-sm text-background/50 hover:text-background/70 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
