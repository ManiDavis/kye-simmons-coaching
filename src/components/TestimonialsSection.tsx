import Image from "next/image";

const reviews = [
  {
    src: "/images/reviews/review-omg-kye.png",
    alt: "Client message: OMG Kye. Its happeningggg. It bloody worked. Got my first paying client this weekend and have 8 calls booked for this week.",
  },
  {
    src: "/images/reviews/review-kevin-justice.png",
    alt: "Kevin Justice recommends Kye Simmons Coaching: Great content delivered in a friendly manner to grow/relaunch your business, including content creation and most importantly belief in yourself.",
  },
  {
    src: "/images/reviews/review-sooo-grateful.png",
    alt: "Client message: Sooo grateful Kye. You put my mind at ease. I stopped hustling and worrying and got so freaking clear and boom.. first client.",
  },
  {
    src: "/images/reviews/review-claire-simmons.png",
    alt: "Claire Simmons recommends Kye Simmons Coaching: Kye is awesome! I love her immense passion, enthusiasm and commitment to assisting you along the way to succeed in your business.",
  },
  {
    src: "/images/reviews/review-clear-repeatable.png",
    alt: "Client message: A clear repeatable system. So clear. So easy. Now I can concentrate on those high impact actions. Grateful Kye.",
  },
  {
    src: "/images/reviews/review-russell-gilbert.png",
    alt: "Russell Gilbert recommends Kye Simmons Coaching: Kye is amazing at what she does! Her strategies are easy to implement and get great results!",
  },
  {
    src: "/images/reviews/review-launchpad.png",
    alt: "Client message: Hey kye wanted to let your know that after Launchpad I lost total motivation, but went back to the lessons. And can gladly report I've signed 2 clients this week. Proof in concept baby!",
  },
  {
    src: "/images/reviews/review-megan-clarke.png",
    alt: "Megan Clarke: So Many Ideas, so much guessing. I needed to cut the noise - big time! In 5 minutes flat, she sliced through the noise in my head.",
  },
  {
    src: "/images/reviews/review-florence-pierce.png",
    alt: "Florence Pierce recommends Kye Simmons Coaching: So inspiring: Kye helped me work out what I want, how to achieve it, and stop my life-long habit of spreading myself too thin.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--black)" }}
    >
      {/* Subtle dark texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <p
          className="font-display text-xs tracking-[0.3em] uppercase text-center mb-3"
          style={{ color: "var(--gold)" }}
        >
          Testimonials
        </p>
        <h2
          className="font-display font-black text-center uppercase mb-4"
          style={{ color: "var(--pink)", fontSize: "clamp(2rem,5vw,3.5rem)" }}
        >
          What Our Clients Say
        </h2>
        <p className="text-center text-lg font-semibold mb-12" style={{ color: "#fff" }}>
          &ldquo;I didn&apos;t even know what I needed — Kye did&rdquo;{" "}
          <em style={{ color: "var(--gold)" }}>— Kate Lesslie</em>
        </p>

        {/* Masonry grid of screenshot images */}
        <div
          style={{
            columns: "3 300px",
            columnGap: "1.25rem",
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.src}
              style={{ breakInside: "avoid", marginBottom: "1.25rem" }}
            >
              <Image
                src={review.src}
                alt={review.alt}
                width={0}
                height={0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ width: "100%", height: "auto", borderRadius: "12px" }}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-lg font-semibold mt-12" style={{ color: "#fff" }}>
          &ldquo;I got my first client within a week&rdquo;{" "}
          <em style={{ color: "var(--gold)" }}>— Sarah</em>
        </p>
      </div>
    </section>
  );
}
