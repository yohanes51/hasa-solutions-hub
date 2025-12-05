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
    <section className="py-20 md:py-28">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Testimoni
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dipercaya oleh Pelaku Industri
          </h2>
          <p className="text-muted-foreground">
            Apa kata klien kami tentang layanan dan produk HASA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="relative bg-card rounded-xl p-6 border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
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
