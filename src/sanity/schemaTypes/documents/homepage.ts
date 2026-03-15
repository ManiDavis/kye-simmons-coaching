import { defineType, defineField, defineArrayMember } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,
  fields: [
    // ── HERO ──────────────────────────────────────────────
    defineField({
      name: "heroStatement",
      title: "Hero Statement",
      type: "string",
      description: 'Main giant headline, e.g. "YOUR IDENTITY IS THE STRATEGY."',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroSubtext",
      title: "Hero Subtext",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "heroAuditLabel",
      title: "Hero Audit Label",
      type: "string",
      description: 'Gold star label text e.g. "★ FREE AUDIT — UNCOVER YOUR INVISIBLE FRICTION"',
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image (Kye Photo)",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", type: "string", title: "Alt Text" }),
      ],
    }),
    defineField({
      name: "heroBannerItems",
      title: "Marquee Ticker Items",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: 'e.g. ["ELITE SPORT → BUSINESS", "PURPOSE-DRIVEN LEADERS", "IDENTITY-LED GROWTH"]',
    }),

    // ── PHOTO HERO (Section 2) ─────────────────────────────
    defineField({
      name: "photoHeroTitle",
      title: "Photo Hero Title Line 1",
      type: "string",
      description: "Bold upright text, e.g. IDENTITY & BUSINESS EXPANSION STRATEGIST.",
    }),
    defineField({
      name: "photoHeroSubtitle",
      title: "Photo Hero Subtitle",
      type: "string",
      description: "Italic text, e.g. for Coaches, Creators & CEOs",
    }),
    defineField({
      name: "photoHeroImage",
      title: "Photo Hero Background Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", type: "string", title: "Alt Text" }),
      ],
    }),

    // ── ABOUT ─────────────────────────────────────────────
    defineField({
      name: "aboutHeadingLines",
      title: "About Heading Lines",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "headingLine",
          fields: [
            defineField({ name: "text", type: "string", title: "Text" }),
            defineField({
              name: "color",
              type: "string",
              title: "Color",
              options: {
                list: [
                  { title: "White", value: "white" },
                  { title: "Hot Pink", value: "pink" },
                  { title: "Gold", value: "gold" },
                ],
                layout: "radio",
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "aboutBlockquote",
      title: "About Blockquote",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "aboutBodyIntro",
      title: "About Body Intro (bold paragraph)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "aboutBody",
      title: "About Body Paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "text" })],
    }),
    defineField({
      name: "aboutItems",
      title: "About Numbered Items (01, 02, 03)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "aboutItem",
          fields: [
            defineField({ name: "number", type: "string", title: "Number", description: "e.g. 01" }),
            defineField({ name: "label", type: "string", title: "Label" }),
            defineField({ name: "body", type: "text", title: "Body" }),
          ],
        }),
      ],
    }),

    // ── ABOUT ME (I'm Kye section) ────────────────────────
    defineField({
      name: "aboutMeSectionTitle",
      title: "About Me Section Title",
      type: "string",
      description: 'e.g. "I\'m Kye"',
    }),
    defineField({
      name: "aboutMeImage",
      title: "About Me Photo (circular)",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", type: "string", title: "Alt Text" }),
      ],
    }),
    defineField({
      name: "aboutMeBody",
      title: "About Me Body Paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "text" })],
      description: "Each item is a paragraph. Use italic style marker in the text if needed.",
    }),
    defineField({
      name: "aboutMeCtaLabel",
      title: "About Me CTA Label",
      type: "string",
      description: 'e.g. "Take the Free Blind Spot Audit"',
    }),

    // ── SERVICES ──────────────────────────────────────────
    defineField({
      name: "servicesSectionHeading",
      title: "Services Section Heading",
      type: "string",
      description: 'e.g. "Work With Kye"',
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "service",
          fields: [
            defineField({ name: "title", type: "string", title: "Title", validation: (r) => r.required() }),
            defineField({ name: "tagline", type: "string", title: "Tagline" }),
            defineField({ name: "description", type: "text", title: "Description", rows: 3 }),
            defineField({ name: "ctaLabel", type: "string", title: "CTA Label" }),
            defineField({ name: "ctaUrl", type: "url", title: "CTA URL" }),
            defineField({
              name: "image",
              type: "image",
              title: "Image",
              options: { hotspot: true },
              fields: [defineField({ name: "alt", type: "string", title: "Alt Text" })],
            }),
          ],
        }),
      ],
    }),

    // ── TESTIMONIALS ──────────────────────────────────────
    defineField({
      name: "testimonialsSectionHeading",
      title: "Testimonials Section Heading",
      type: "string",
      description: 'e.g. "What Our Clients Say"',
    }),
    defineField({
      name: "testimonialsTopQuote",
      title: "Testimonials Top Pull Quote",
      type: "string",
      description: 'e.g. "I didn\'t even know what I needed — Kye did"',
    }),
    defineField({
      name: "testimonialsTopQuoteAuthor",
      title: "Testimonials Top Quote Author",
      type: "string",
      description: 'e.g. "Kate Lesslie"',
    }),
    defineField({
      name: "testimonialsBottomQuote",
      title: "Testimonials Bottom Pull Quote",
      type: "string",
    }),
    defineField({
      name: "testimonialsBottomQuoteAuthor",
      title: "Testimonials Bottom Quote Author",
      type: "string",
    }),
    defineField({
      name: "reviewImages",
      title: "Review Screenshot Images",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: false },
          fields: [
            defineField({ name: "alt", type: "string", title: "Alt Text / Description" }),
          ],
        }),
      ],
      description: "Screenshot images shown in the masonry grid. Upload new client review screenshots here.",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "testimonial",
          fields: [
            defineField({
              name: "type",
              type: "string",
              title: "Display Type",
              options: {
                list: [
                  { title: "Chat Bubble", value: "chat" },
                  { title: "Facebook Recommendation", value: "facebook" },
                ],
                layout: "radio",
              },
            }),
            defineField({ name: "author", type: "string", title: "Author Name" }),
            defineField({ name: "handle", type: "string", title: "Handle / Date (optional)" }),
            defineField({ name: "content", type: "text", title: "Content", rows: 4 }),
            defineField({
              name: "screenshot",
              type: "image",
              title: "Screenshot (optional)",
              options: { hotspot: true },
              fields: [defineField({ name: "alt", type: "string", title: "Alt Text" })],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "featuredQuotes",
      title: "Featured Pull Quotes",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "featuredQuote",
          fields: [
            defineField({ name: "quote", type: "string", title: "Quote" }),
            defineField({ name: "author", type: "string", title: "Author" }),
          ],
        }),
      ],
    }),

    // ── AUDIT CTA ─────────────────────────────────────────
    defineField({ name: "auditHeading", title: "Audit Section Heading", type: "string" }),
    defineField({ name: "auditSubheading", title: "Audit Subheading (gold)", type: "string" }),
    defineField({ name: "auditBody", title: "Audit Body Copy", type: "text", rows: 4 }),
    defineField({ name: "auditCtaLabel", title: "Audit CTA Label", type: "string" }),
    defineField({ name: "auditCtaUrl", title: "Audit CTA URL", type: "url" }),

    // ── FOOTER ────────────────────────────────────────────
    defineField({ name: "footerEmail", title: "Footer Email", type: "string" }),
    defineField({ name: "footerFacebook", title: "Facebook URL", type: "url" }),
    defineField({ name: "footerInstagram", title: "Instagram URL", type: "url" }),
    defineField({ name: "footerLinkedIn", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "footerYouTube", title: "YouTube URL", type: "url" }),
  ],
  preview: {
    prepare: () => ({ title: "Homepage" }),
  },
});
