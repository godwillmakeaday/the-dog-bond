import { publisher } from "@/lib/authority";
import { site } from "@/lib/site";

type AuthorJsonLdProps = {
  name: string;
  profilePath: string;
  jobTitle: string;
  description: string;
};

export function AuthorJsonLd({
  name,
  profilePath,
  jobTitle,
  description,
}: AuthorJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url: `${site.url}${profilePath}`,
    jobTitle,
    description,
    worksFor: {
      "@type": "Organization",
      name: publisher.legalPublisher,
      url: site.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
