import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    company: "PT. Maju Jaya Konveksi",
    role: "Direktur",
    content: "HASA adalah partner terpercaya untuk pasokan kain kami. Kualitas konsisten, harga kompetitif, dan layanan yang responsif. Sangat direkomendasikan!",
    rating: 5,
  },
  {
    name: "Siti Rahayu",
    company: "CV. Tekstil Sejahtera",
    role: "Purchasing Manager",
    content: "Sudah hampir 1 tahun bekerja sama dengan HASA. Stok selalu tersedia dan proses pengambilan sangat mudah. Tim mereka sangat helpful.",
    rating: 5,
  },
  {
    name: "Ahmad Fauzi",
    company: "PT. Pabrik Finishing Indo",
    role: "Operations Manager",
    content: "Batu bara dari HASA kualitasnya bagus dan sesuai spek. Pengiriman tepat waktu, sangat membantu operasional pabrik kami.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge-professional mb-6">
            Testimoni
          </div>
          <h2 className="text-headline text-foreground mb-5">
            Dipercaya oleh Pelaku Industri
          </h2>
          <p className="text-body text-muted-foreground">
            Apa kata klien kami tentang layanan dan produk HASA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="relative card-professional p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary/40" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-body text-muted-foreground mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="w-14 h-14 rounded-2xl bg-gradient-cta flex items-center justify-center shadow-md">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-caption text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-caption text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
