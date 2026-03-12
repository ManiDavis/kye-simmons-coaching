import type { Metadata } from "next";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Kye Simmons | Identity + Expansion Strategist",
  description:
    "Revenue ceilings are rarely structural — they're perceptual. When identity expands, strategy finally works. Work with Kye Simmons.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
