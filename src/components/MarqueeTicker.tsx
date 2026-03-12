interface MarqueeTickerProps {
  items: string[];
}

export default function MarqueeTicker({ items }: MarqueeTickerProps) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden border-t border-b py-3"
      style={{ borderColor: "rgba(0,0,0,0.12)", backgroundColor: "var(--cream)" }}
    >
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="font-display text-xs tracking-[0.2em] uppercase font-semibold mx-8 shrink-0"
            style={{ color: "var(--black)" }}
          >
            • {item}
          </span>
        ))}
      </div>
    </div>
  );
}
