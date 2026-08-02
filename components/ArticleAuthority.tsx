import Link from "next/link";
import {
  defaultArticleAuthority,
  formatAuthorityDate,
  publisher,
} from "@/lib/authority";

type ArticleAuthorityProps = {
  publishedAt?: string;
  updatedAt?: string;
};

export function ArticleAuthority({
  publishedAt,
  updatedAt,
}: ArticleAuthorityProps) {
  const { author } = defaultArticleAuthority;

  return (
    <aside
      aria-label="Article authority and review information"
      className="mt-10 rounded-[1.75rem] border border-earth-100/20 bg-white/10 p-6"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth-200">
        Publication record
      </p>

      <dl className="mt-5 grid gap-5 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-bold text-earth-50">Written by</dt>
          <dd className="mt-1 leading-6 text-earth-100">
            <Link
              href={author.profilePath ?? "/about"}
              className="underline underline-offset-4"
            >
              {author.name}
            </Link>
            <br />
            {author.role}
          </dd>
        </div>

        <div>
          <dt className="font-bold text-earth-50">Published by</dt>
          <dd className="mt-1 leading-6 text-earth-100">
            {publisher.name}
          </dd>
        </div>

        <div>
          <dt className="font-bold text-earth-50">Review scope</dt>
          <dd className="mt-1 leading-6 text-earth-100">
            Editorial and legal/public-responsibility review. Veterinary review
            is not implied unless expressly named.
          </dd>
        </div>

        <div>
          <dt className="font-bold text-earth-50">Publication status</dt>
          <dd className="mt-1 leading-6 text-earth-100">
            Published: {formatAuthorityDate(publishedAt)}
            <br />
            Updated: {formatAuthorityDate(updatedAt)}
          </dd>
        </div>
      </dl>

      <p className="mt-5 text-xs leading-6 text-earth-200">
        This material is educational and does not replace veterinary diagnosis,
        behavioural assessment, emergency care, or advice tailored to a
        particular dog.
      </p>
    </aside>
  );
}
