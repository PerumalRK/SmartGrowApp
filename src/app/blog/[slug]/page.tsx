import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import { POSTS, formatDate, getPost } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.description, url: `/blog/${post.slug}`, publishedTime: post.date },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` } },
  };

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-royal/40 blur-3xl" aria-hidden />
        <div className="container-x relative max-w-4xl py-14 sm:py-20">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan hover:underline"><ArrowLeft size={14} aria-hidden /> All articles</Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-cyan">{post.category}</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-5 flex items-center gap-2 text-sm text-slate-300">
            <Clock size={14} aria-hidden /> {post.readMinutes} min read · <time dateTime={post.date}>{formatDate(post.date)}</time> · SmartGrowApp Team
          </p>
        </div>
      </section>

      <article className="container-x max-w-3xl py-14 sm:py-20">
        {post.body.map((b, i) => {
          if (b.type === "h2") return <h2 key={i} className="mt-10 font-display text-2xl font-bold text-navy">{b.text}</h2>;
          if (b.type === "ul")
            return (
              <ul key={i} className="mt-4 space-y-2.5">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3 text-lg leading-relaxed text-slate-700"><Check size={20} className="mt-1.5 shrink-0 text-cyan" aria-hidden />{it}</li>
                ))}
              </ul>
            );
          return <p key={i} className="mt-4 text-lg leading-relaxed text-slate-700">{b.text}</p>;
        })}

        <div className="mt-14 rounded-3xl bg-gradient-to-br from-navy to-royal p-8 text-white">
          <h2 className="font-display text-2xl font-extrabold">Planning a project?</h2>
          <p className="mt-2 text-slate-200">Tell us your requirements and we will help you find the right approach.</p>
          <Link href="/contact" className="btn-light mt-5">Let&apos;s Discuss Your Project <ArrowRight size={18} aria-hidden /></Link>
        </div>
      </article>

      <section className="bg-mist py-14">
        <div className="container-x max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-navy">Keep reading</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card block">
                <span className="text-xs font-semibold uppercase tracking-wider text-royal">{p.category}</span>
                <h3 className="mt-2 font-bold text-navy">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
