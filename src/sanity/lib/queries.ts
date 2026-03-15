import { defineQuery } from "next-sanity";

export const HOMEPAGE_QUERY = defineQuery(`
  *[_type == "homepage"][0]{
    _id,
    heroStatement,
    heroSubtext,
    heroAuditLabel,
    heroImage{
      asset->{_id, url, metadata{lqip, dimensions}},
      alt,
      hotspot,
      crop
    },
    heroBannerItems,
    photoHeroTitle,
    photoHeroSubtitle,
    photoHeroImage{
      asset->{_id, url, metadata{lqip, dimensions}},
      alt,
      hotspot,
      crop
    },
    aboutHeadingLines[]{
      _key,
      text,
      color
    },
    aboutBlockquote,
    aboutBodyIntro,
    aboutBody,
    aboutItems[]{
      _key,
      number,
      label,
      body
    },
    aboutMeSectionTitle,
    aboutMeImage{
      asset->{_id, url, metadata{lqip, dimensions}},
      alt,
      hotspot,
      crop
    },
    aboutMeBody,
    aboutMeCtaLabel,
    servicesSectionHeading,
    services[]{
      _key,
      title,
      tagline,
      description,
      ctaLabel,
      ctaUrl,
      image{
        asset->{_id, url, metadata{lqip, dimensions}},
        alt
      }
    },
    testimonialsSectionHeading,
    testimonialsTopQuote,
    testimonialsTopQuoteAuthor,
    testimonialsBottomQuote,
    testimonialsBottomQuoteAuthor,
    reviewImages[]{
      _key,
      asset->{_id, url, metadata{lqip, dimensions}},
      alt
    },
    testimonials[]{
      _key,
      type,
      author,
      handle,
      content,
      screenshot{
        asset->{_id, url, metadata{lqip, dimensions}},
        alt
      }
    },
    featuredQuotes[]{
      _key,
      quote,
      author
    },
    auditHeading,
    auditSubheading,
    auditBody,
    auditCtaLabel,
    auditCtaUrl,
    footerEmail,
    footerFacebook,
    footerInstagram,
    footerLinkedIn,
    footerYouTube
  }
`);
