import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Testimonial {
  _key: string;
  type: "chat" | "facebook";
  author?: string;
  handle?: string;
  content?: string;
  screenshot?: { asset: SanityImageSource & { url: string; metadata?: { lqip?: string } }; alt?: string };
}

interface FeaturedQuote {
  _key: string;
  quote: string;
  author: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    _key: "t1",
    type: "chat",
    author: "Claire",
    content: "OMG Kye. Its happeningggg 🤪 It bloody worked. Got my first paying client this weekend and have 8 calls booked for this week. Bloody love ya work sister. Mwah",
  },
  {
    _key: "t2",
    type: "chat",
    author: "Sarah",
    content: "Sooo grateful Kye. You put my mind at ease. I stopped hustling and worrying and got so freaking clear and boom.. first client.",
  },
  {
    _key: "t3",
    type: "chat",
    author: "Client",
    content: "A clear repeatable system. So clear. So easy. Now I can concentrate on those high impact actions. Grateful Kye.",
  },
  {
    _key: "t4",
    type: "facebook",
    author: "Kevin Justice",
    handle: "12 Aug",
    content: "Great content delivered in a friendly manner to grow/relaunch your business, including content creation and most importantly belief in yourself.",
  },
  {
    _key: "t5",
    type: "facebook",
    author: "Claire Simmons",
    handle: "12 Aug",
    content: "Kye is awesome! I love her immense passion, enthusiasm and commitment to assisting you along the way to succeed in your business. She has created a programme that's realistic, achievable provides great support, honest feedback, no BS, straight talking and provides everything you need....so long as you do the work, you'll reap the rewards! I highly recommend working with you, it's also fun, uplifting and invigorating — your energy is contagious 🤩",
  },
  {
    _key: "t6",
    type: "facebook",
    author: "Megan Clarke",
    handle: "18 July",
    content: "So Many Ideas, so much guessing...... 🥴🥴🥴 I needed to cut the noise - big time! In 5 minutes flat, she sliced through the noise in my head, mirrored back my magic, and got me pointing in the right direction like the boss energy strategist she is 🔥 Kye doesn't just talk strategy, she feels it. Lives it. Breathes it.",
  },
];

const defaultQuotes: FeaturedQuote[] = [
  { _key: "q1", quote: "I didn't even know what I needed — Kye did", author: "Kate Lesslie" },
  { _key: "q2", quote: "I got my first client within a week", author: "Sarah" },
];

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  featuredQuotes?: FeaturedQuote[];
}

function ChatBubble({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="rounded-2xl p-5 shadow-sm"
      style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.08)" }}
    >
      <p className="text-sm leading-relaxed mb-3" style={{ color: "#1a1a1a" }}>
        {testimonial.content}
      </p>
      {testimonial.author && (
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
            style={{ backgroundColor: "var(--pink)", color: "#fff" }}
          >
            {testimonial.author[0]}
          </div>
          <span className="text-xs font-semibold" style={{ color: "#555" }}>
            {testimonial.author}
          </span>
        </div>
      )}
    </div>
  );
}

function FacebookCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="rounded-xl p-5 shadow-sm"
      style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.1)" }}
    >
      {testimonial.screenshot?.asset ? (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={urlFor(testimonial.screenshot.asset).width(600).height(400).url()}
            alt={testimonial.screenshot.alt || testimonial.author || "Testimonial"}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
              style={{ backgroundColor: "#e0d4c8", color: "var(--dark-grey)" }}
            >
              {testimonial.author?.[0] || "?"}
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>
                {testimonial.author}{" "}
                <span className="font-normal text-xs" style={{ color: "#888" }}>
                  recommends <strong>Kye Simmons Coaching</strong>
                </span>
              </p>
              <p className="text-xs" style={{ color: "#aaa" }}>
                {testimonial.handle}
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#333" }}>
            {testimonial.content}
          </p>
        </>
      )}
    </div>
  );
}

export default function TestimonialsSection({
  testimonials = defaultTestimonials,
  featuredQuotes = defaultQuotes,
}: TestimonialsSectionProps) {
  const chatBubbles = testimonials.filter((t) => t.type === "chat");
  const facebookCards = testimonials.filter((t) => t.type === "facebook");

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

        {/* First featured quote */}
        {featuredQuotes[0] && (
          <p className="text-center text-lg font-semibold mb-12" style={{ color: "#fff" }}>
            &ldquo;{featuredQuotes[0].quote}&rdquo;{" "}
            <em style={{ color: "var(--gold)" }}>— {featuredQuotes[0].author}</em>
          </p>
        )}

        {/* Two-column grid: chat left, facebook right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {chatBubbles.map((t) => (
              <ChatBubble key={t._key} testimonial={t} />
            ))}
          </div>
          <div className="space-y-4">
            {facebookCards.map((t) => (
              <FacebookCard key={t._key} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Second featured quote */}
        {featuredQuotes[1] && (
          <p className="text-center text-lg font-semibold mt-12" style={{ color: "#fff" }}>
            &ldquo;{featuredQuotes[1].quote}&rdquo;{" "}
            <em style={{ color: "var(--gold)" }}>— {featuredQuotes[1].author}</em>
          </p>
        )}
      </div>
    </section>
  );
}
