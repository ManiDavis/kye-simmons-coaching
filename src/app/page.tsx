export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries";
import { BLIND_SPOT_URL } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhotoHero from "@/components/PhotoHero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutMeSection from "@/components/AboutMeSection";
import AuditCTA from "@/components/AuditCTA";
import Footer from "@/components/Footer";

export default async function HomePage() {
  const { data } = await sanityFetch({ query: HOMEPAGE_QUERY });

  return (
    <>
      <Navbar />

      <HeroSection
        heroStatement={data?.heroStatement ?? "YOUR IDENTITY IS THE STRATEGY."}
        heroSubtext={data?.heroSubtext ?? "Revenue ceilings are rarely structural — they're perceptual. When identity expands, strategy finally works."}
        heroAuditLabel={data?.heroAuditLabel ?? "★ FREE AUDIT — UNCOVER YOUR INVISIBLE FRICTION"}
        heroImage={data?.heroImage as never}
        heroBannerItems={data?.heroBannerItems ?? ["ELITE SPORT → BUSINESS", "PURPOSE-DRIVEN LEADERS", "IDENTITY-LED GROWTH"]}
        auditCtaUrl={data?.auditCtaUrl ?? BLIND_SPOT_URL}
      />

      <PhotoHero
        title={data?.photoHeroTitle}
        subtitle={data?.photoHeroSubtitle}
        image={data?.photoHeroImage as never}
      />

      <AboutSection
        headingLines={data?.aboutHeadingLines as never}
        blockquote={data?.aboutBlockquote}
        bodyIntro={data?.aboutBodyIntro}
        body={data?.aboutBody as never}
        items={data?.aboutItems as never}
        auditCtaUrl={data?.auditCtaUrl ?? BLIND_SPOT_URL}
      />

      <TestimonialsSection
        sectionHeading={data?.testimonialsSectionHeading}
        topQuote={data?.testimonialsTopQuote}
        topQuoteAuthor={data?.testimonialsTopQuoteAuthor}
        bottomQuote={data?.testimonialsBottomQuote}
        bottomQuoteAuthor={data?.testimonialsBottomQuoteAuthor}
        reviewImages={data?.reviewImages as never}
        testimonials={data?.testimonials as never}
        featuredQuotes={data?.featuredQuotes as never}
      />

      <ServicesSection
        services={data?.services as never}
        sectionHeading={data?.servicesSectionHeading}
      />

      <AboutMeSection
        sectionTitle={data?.aboutMeSectionTitle}
        image={data?.aboutMeImage as never}
        body={data?.aboutMeBody as never}
        ctaLabel={data?.aboutMeCtaLabel}
        ctaUrl={data?.auditCtaUrl ?? BLIND_SPOT_URL}
      />

      <AuditCTA
        heading={data?.auditHeading}
        subheading={data?.auditSubheading}
        body={data?.auditBody}
        ctaLabel={data?.auditCtaLabel}
        ctaUrl={data?.auditCtaUrl}
      />

      <Footer
        email={data?.footerEmail}
        facebook={data?.footerFacebook}
        instagram={data?.footerInstagram}
        linkedIn={data?.footerLinkedIn}
        youTube={data?.footerYouTube}
      />
    </>
  );
}
