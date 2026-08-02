import { defaultArticleAuthority, publisher } from "@/lib/authority";
import { site } from "@/lib/site";

type ArticleJsonLdProps = {
  title: string;
  description: string;
  pathname: string;
  publishedAt?: string;
  updatedAt?: string;
};

export function ArticleJsonLd({
  title,
  description,
  pathname,
  publishedAt,
  updatedAt,
}: ArticleJsonLdProps) {
  const url = new URL(pathname, site.url).toString();
  const { author } = defaultArticleAuthority;

  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: url,
    url,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      url: new URL(author.profilePath ?? "/about", site.url).toString(),
      knowsAbout: author.expertise,
    },
    publisher: {
      "@type": "Organization",
      name: publisher.name,
      url: site.url,
    },
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    isAccessibleForFree: true,
    educationalUse: "Responsible dog ownership education",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
