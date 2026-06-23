import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { buildMetadata } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Insights on AI automation, VAPI voice agents, SaaS development, and workflow automation from the Zeplion team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <SiteLayout>
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Zeplion <span className="text-[#00A3FF]">Blog</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Insights on AI automation, voice agents, and software development.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-[#00A3FF]/40"
            >
              <div className="mb-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold group-hover:text-[#00A3FF]">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-[#00A3FF]">
                Read more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
