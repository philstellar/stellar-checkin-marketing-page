
/**
 * TypeScript type definitions for Schema.org structured data
 */

// Common types
interface Thing {
  '@type': string;
  name?: string;
  description?: string;
  url?: string;
  image?: string | ImageObject;
  sameAs?: string[];
}

interface ImageObject {
  '@type': 'ImageObject';
  url: string;
  width?: number;
  height?: number;
  caption?: string;
}

interface PostalAddress {
  '@type': 'PostalAddress';
  streetAddress: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode: string;
  addressCountry: string;
}

interface GeoCoordinates {
  '@type': 'GeoCoordinates';
  latitude: string;
  longitude: string;
}

interface ContactPoint {
  '@type': 'ContactPoint';
  telephone: string;
  contactType: string;
  email?: string;
  areaServed?: string | string[];
  availableLanguage?: string | string[];
}

// Organization schema
interface OrganizationSchema extends Thing {
  '@type': 'Organization';
  legalName?: string;
  logo?: string | ImageObject;
  address?: PostalAddress;
  contactPoint?: ContactPoint | ContactPoint[];
  email?: string;
  telephone?: string;
  founder?: PersonSchema;
  foundingDate?: string;
}

// Person schema
interface PersonSchema extends Thing {
  '@type': 'Person';
  givenName?: string;
  familyName?: string;
  jobTitle?: string;
  email?: string;
  telephone?: string;
  address?: PostalAddress;
}

// Local Business schema
interface LocalBusinessSchema extends OrganizationSchema {
  '@type': 'LocalBusiness' | string;
  openingHours?: string | string[];
  priceRange?: string;
  geo?: GeoCoordinates;
  servesCuisine?: string | string[];
}

// Product schema
interface ProductSchema extends Thing {
  '@type': 'Product';
  brand?: OrganizationSchema;
  offers?: OfferSchema | AggregateOfferSchema;
  review?: ReviewSchema | ReviewSchema[];
  aggregateRating?: AggregateRatingSchema;
}

// Service schema
interface ServiceSchema extends Thing {
  '@type': 'Service';
  serviceType?: string;
  provider?: OrganizationSchema;
  areaServed?: string | string[] | GeoCoordinates;
  offers?: OfferSchema | AggregateOfferSchema;
  termsOfService?: string;
}

// Offer schema
interface OfferSchema extends Thing {
  '@type': 'Offer';
  price?: string | number;
  priceCurrency?: string;
  availability?: string;
  validFrom?: string;
  validThrough?: string;
  itemOffered?: ProductSchema | ServiceSchema;
}

// AggregateOffer schema
interface AggregateOfferSchema {
  '@type': 'AggregateOffer';
  priceCurrency: string;
  lowPrice: string | number;
  highPrice: string | number;
  offerCount?: number;
}

// Review schema
interface ReviewSchema extends Thing {
  '@type': 'Review';
  author?: PersonSchema;
  reviewBody?: string;
  reviewRating?: RatingSchema;
  datePublished?: string;
  itemReviewed?: Thing;
}

// Rating schema
interface RatingSchema {
  '@type': 'Rating';
  ratingValue: number | string;
  bestRating?: number | string;
  worstRating?: number | string;
}

// AggregateRating schema
interface AggregateRatingSchema {
  '@type': 'AggregateRating';
  ratingValue: number | string;
  reviewCount: number;
  bestRating?: number | string;
  worstRating?: number | string;
}

// Website schema
interface WebSiteSchema extends Thing {
  '@type': 'WebSite';
  potentialAction?: SearchActionSchema;
  inLanguage?: string | string[];
}

// SearchAction schema
interface SearchActionSchema {
  '@type': 'SearchAction';
  target: string;
  'query-input': string;
}

// Breadcrumb schema
interface BreadcrumbListSchema {
  '@type': 'BreadcrumbList';
  itemListElement: ListItemSchema[];
}

// ListItem schema
interface ListItemSchema {
  '@type': 'ListItem';
  position: number;
  name: string;
  item: string;
}

// FAQ schema
interface FAQPageSchema {
  '@type': 'FAQPage';
  mainEntity: QuestionAnswerSchema[];
}

// Question and Answer schema
interface QuestionAnswerSchema {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  }
}

// Article schema
interface ArticleSchema extends Thing {
  '@type': 'Article' | 'BlogPosting' | 'NewsArticle';
  headline: string;
  author: PersonSchema | OrganizationSchema;
  publisher: OrganizationSchema;
  datePublished: string;
  dateModified?: string;
  articleBody?: string;
  articleSection?: string;
  wordCount?: number;
}
