import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/SiteLayout";
import { BlogArticle, getBlogMetadata } from "@/components/BlogArticle";
import { buildMetadata } from "@/lib/seo";
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const meta = getBlogMetadata(post);
  return buildMetadata(meta);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <SiteLayout>
      <BlogArticle post={post} />
    </SiteLayout>
  );
}
