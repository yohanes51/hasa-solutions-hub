import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

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

const WHATSAPP_NUMBER = "6287892882525";

export const Footer = () => {
  return (
    <footer className="bg-hasa-dark text-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
      
      <div className="container py-16 md:py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#beranda" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-extrabold text-xl">H</span>
              </div>
              <span className="font-extrabold text-2xl">HASA</span>
            </a>
            <p className="text-background/60 text-sm mb-8 leading-relaxed">
              Distributor kain polyester dan supplier batu bara terpercaya untuk industri tekstil di Indonesia. Melayani kebutuhan B2B sejak 2025.
            </p>
            <div className="space-y-4">
              <a href="tel:087892882525" className="flex items-center gap-3 text-sm text-background/60 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                087892882525
              </a>
              <a href="mailto:info@hasa.id" className="flex items-center gap-3 text-sm text-background/60 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                info@hasa.id
              </a>
              <div className="flex items-center gap-3 text-sm text-background/60">
                <div className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                Bandung, Jawa Barat
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Menu</h4>
            <ul className="space-y-4">
              {footerLinks.menu.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors inline-flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Produk</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors inline-flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Butuh Bantuan?</h4>
            <p className="text-sm text-background/60 mb-6 leading-relaxed">
              Hubungi tim kami via WhatsApp untuk konsultasi dan penawaran produk.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} HASA. Semua hak dilindungi.
          </p>
          <div className="flex gap-8">
            {footerLinks.legal.map((link, i) => (
              <a key={i} href={link.href} className="text-sm text-background/40 hover:text-background/60 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
