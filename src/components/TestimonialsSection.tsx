import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface ReviewImage {
  _key: string;
  asset: SanityImageSource & { url: string; metadata?: { lqip?: string } };
  alt?: string;
}

interface Testimonial {
  _key: string;
  type?: "chat" | "facebook";
  author?: string;
  handle?: string;
  content?: string;
  screenshot?: { asset: SanityImageSource; alt?: string };
}

interface FeaturedQuote {
  _key: string;
  quote?: string;
  author?: string;
}

interface TestimonialsSectionProps {
  sectionHeading?: string;
  topQuote?: string;
  topQuoteAuthor?: string;
  bottomQuote?: string;
  bottomQuoteAuthor?: string;
  reviewImages?: ReviewImage[];
  testimonials?: Testimonial[];
  featuredQuotes?: FeaturedQuote[];
}

const staticReviews = [
  { src: "/images/reviews/review-omg-kye.png", alt: "Client message: OMG Kye. Its happeningggg. It bloody worked. Got my first paying client this weekend and have 8 calls booked for this week." },
  { src: "/images/reviews/review-kevin-justice.png", alt: "Kevin Justice recommends Kye Simmons Coaching: Great content delivered in a friendly manner to grow/relaunch your business, including content creation and most importantly belief in yourself." },
  { src: "/images/reviews/review-sooo-grateful.png", alt: "Client message: Sooo grateful Kye. You put my mind at ease. I stopped hustling and worrying and got so freaking clear and boom.. first client." },
  { src: "/images/reviews/review-claire-simmons.png", alt: "Claire Simmons recommends Kye Simmons Coaching: Kye is awesome! I love her immense passion, enthusiasm and commitment to assisting you along the way to succeed in your business." },
  { src: "/images/reviews/review-clear-repeatable.png", alt: "Client message: A clear repeatable system. So clear. So easy. Now I can concentrate on those high impact actions. Grateful Kye." },
  { src: "/images/reviews/review-russell-gilbert.png", alt: "Russell Gilbert recommends Kye Simmons Coaching: Kye is amazing at what she does! Her strategies are easy to implement and get great results!" },
  { src: "/images/reviews/review-launchpad.png", alt: "Client message: Hey kye wanted to let your know that after Launchpad I lost total motivation, but went back to the lessons. And can gladly report I've signed 2 clients this week. Proof in concept baby!" },
  { src: "/images/reviews/review-megan-clarke.png", alt: "Megan Clarke: So Many Ideas, so much guessing. I needed to cut the noise - big time! In 5 minutes flat, she sliced through the noise in my head." },
  { src: "/images/reviews/review-florence-pierce.png", alt: "Florence Pierce recommends Kye Simmons Coaching: So inspiring: Kye helped me work out what I want, how to achieve it, and stop my life-long habit of spreading myself too thin." },
  { src: "/images/reviews/review-on-the-fence.png", alt: "Survey responses to 'What would you say to someone on the fence about working with me?'" },
];

export default function TestimonialsSection({
  sectionHeading = "What Our Clients Say",
  topQuote = "I didn't even know what I needed — Kye did",
  topQuoteAuthor = "Kate Lesslie",
  bottomQuote = "I got my first client within a week",
  bottomQuoteAuthor = "Sarah",
  reviewImages,
}: TestimonialsSectionProps) {
  const hasReviewImages = reviewImages && reviewImages.length > 0;

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Gold decorative rule */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span style={{ display: "block", width: "40px", height: "2px", backgroundColor: "var(--gold)" }} />
          <p
            className="font-display text-xs tracking-[0.3em] uppercase text-center"
            style={{ color: "var(--dark-grey)" }}
          >
            Testimonials
          </p>
          <span style={{ display: "block", width: "40px", height: "2px", backgroundColor: "var(--gold)" }} />
        </div>
        <h2
          className="font-display font-black text-center uppercase mb-4"
          style={{ color: "var(--pink)", fontSize: "clamp(2rem,5vw,3.5rem)" }}
        >
          {sectionHeading}
        </h2>
        <p className="text-center text-lg font-semibold mb-12" style={{ color: "var(--dark-grey)" }}>
          &ldquo;{topQuote}&rdquo;{" "}
          <em style={{ color: "#8a6000" }}>— {topQuoteAuthor}</em>
        </p>

        {/* Masonry grid */}
        <div style={{ columns: "3 300px", columnGap: "1.25rem" }}>
          {hasReviewImages
            ? reviewImages.map((review) => {
                const src = review.asset
                  ? urlFor(review.asset).width(800).url()
                  : null;
                if (!src) return null;
                return (
                  <div key={review._key} style={{ breakInside: "avoid", marginBottom: "1.25rem" }}>
                    <Image
                      src={src}
                      alt={review.alt || "Client review"}
                      width={0}
                      height={0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                      placeholder={review.asset?.metadata?.lqip ? "blur" : "empty"}
                      blurDataURL={review.asset?.metadata?.lqip}
                    />
                  </div>
                );
              })
            : staticReviews.map((review) => (
                <div key={review.src} style={{ breakInside: "avoid", marginBottom: "1.25rem" }}>
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

        <p className="text-center text-lg font-semibold mt-12" style={{ color: "var(--dark-grey)" }}>
          &ldquo;{bottomQuote}&rdquo;{" "}
          <em style={{ color: "#8a6000" }}>— {bottomQuoteAuthor}</em>
        </p>
      </div>
    </section>
  );
}
