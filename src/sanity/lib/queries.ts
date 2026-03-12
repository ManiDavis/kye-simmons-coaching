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
