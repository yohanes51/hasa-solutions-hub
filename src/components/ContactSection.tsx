import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2 } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telepon",
    value: "087812345678",
    href: "tel:087812345678",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "087812345678",
    href: "https://wa.me/6287812345678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@hasa.id",
    href: "mailto:info@hasa.id",
  },
  {
    icon: MapPin,
    label: "Alamat",
    value: "Bandung, Jawa Barat",
    href: null,
  },
];

const businessHours = [
  { day: "Senin - Jumat", hours: "08:00 - 17:00 WIB" },
  { day: "Sabtu", hours: "08:00 - 14:00 WIB" },
  { day: "Minggu", hours: "Tutup" },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Pesan Terkirim!",
      description: "Tim kami akan segera menghubungi Anda dalam 1x24 jam.",
    });

    setIsSubmitting(false);
    setFormData({
      companyName: "",
      contactName: "",
      phone: "",
      product: "",
      quantity: "",
      message: "",
    });
  };

  return (
    <section id="kontak" className="py-20 md:py-28 bg-hasa-light">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Hubungi Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Siap Melayani Kebutuhan Anda
          </h2>
          <p className="text-muted-foreground">
            Tim kami siap membantu Anda. Hubungi kami atau isi form di bawah untuk mendapatkan penawaran terbaik.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="font-medium text-foreground">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-card rounded-xl border border-border/50 p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Jam Operasional</h3>
              </div>
              <div className="space-y-2">
                {businessHours.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="font-medium text-foreground">{item.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * Pengambilan barang dapat dijadwalkan di luar jam operasional dengan konfirmasi sebelumnya.
              </p>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border/50 h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65294824746!2d107.41457988671875!3d-6.903444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1703145600000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi HASA"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl border border-border/50 p-6 md:p-8">
            <h3 className="font-semibold text-xl text-foreground mb-2">Kirim Pesan</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Isi form di bawah dan tim kami akan menghubungi Anda segera.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-companyName">Nama Perusahaan *</Label>
                  <Input
                    id="contact-companyName"
                    name="companyName"
                    placeholder="PT. Contoh"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-contactName">Nama Kontak *</Label>
                  <Input
                    id="contact-contactName"
                    name="contactName"
                    placeholder="John Doe"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-phone">Telepon / WhatsApp *</Label>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-product">Produk yang Diminati</Label>
                  <Input
                    id="contact-product"
                    name="product"
                    placeholder="Polyester Roll A"
                    value={formData.product}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-quantity">Estimasi Jumlah</Label>
                  <Input
                    id="contact-quantity"
                    name="quantity"
                    placeholder="10 roll"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Pesan *</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tuliskan kebutuhan atau pertanyaan Anda..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Kirim Pesan
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
