import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog";

function renderBlock(block: string, index: number) {
  if (block.startsWith("## ")) {
    return (
      <h2 key={index} className="pt-4 text-2xl font-semibold text-foreground">
        {block.replace("## ", "")}
      </h2>
    );
  }
  if (block.startsWith("### ")) {
    return (
      <h3 key={index} className="pt-2 text-lg font-semibold text-foreground">
        {block.replace("### ", "")}
      </h3>
    );
  }
  if (block.split("\n").every((line) => line.startsWith("- "))) {
    return (
      <ul key={index} className="list-disc space-y-2 pl-6 text-muted-foreground">
        {block.split("\n").map((line) => (
          <li key={line}>{line.replace("- ", "")}</li>
        ))}
      </ul>
    );
  }
  return (
    <p key={index} className="leading-relaxed text-muted-foreground">
      {block}
    </p>
  );
}

export function BlogArticle({ post }: { post: BlogPost }) {
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-[#00A3FF]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <div
          className="mb-8 flex h-48 items-center justify-center rounded-2xl border border-[#00A3FF]/20 bg-gradient-to-br from-[#00A3FF]/10 to-[#060D1A] sm:h-64"
          role="img"
          aria-label={`Hero image for ${post.title}`}
        >
          <span className="text-sm font-medium text-[#00A3FF]/60">
            Zeplion · {post.keywords[0]}
          </span>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {post.author} · {post.authorRole}
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-10 space-y-5">
          {post.content.split("\n\n").map((block, i) => renderBlock(block, i))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#00A3FF]/30 bg-[#00A3FF]/10 p-8 text-center">
          <h2 className="text-2xl font-bold">Ready to reclaim your time?</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Zeplion helps UK and UAE businesses automate operations with AI
            systems that deliver measurable ROI. Start with a no-obligation
            conversation.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-[#00A3FF] text-white hover:bg-[#00A3FF]/90"
          >
            <Link href="/contact" data-track="cta-blog">
              Book a Free Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {related.length > 0 && (
          <section className="mt-14 border-t border-border pt-10">
            <h2 className="mb-6 text-xl font-semibold">Related Articles</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group rounded-xl border border-border bg-card/50 p-5 transition-all hover:border-[#00A3FF]/40"
                >
                  <p className="text-xs text-muted-foreground">{item.readTime}</p>
                  <h3 className="mt-2 font-semibold group-hover:text-[#00A3FF]">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {item.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

export function getBlogMetadata(post: BlogPost) {
  return {
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}` as const,
    ogType: "article" as const,
    keywords: post.keywords,
  };
}
