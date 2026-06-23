import { SERVICES } from "./constants";

export type Service = (typeof SERVICES)[number];

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const SERVICES_WITH_SLUGS = SERVICES.map((service) => ({
  ...service,
  slug: slugify(service.title),
}));

export function getServiceBySlug(slug: string) {
  return SERVICES_WITH_SLUGS.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_WITH_SLUGS.map((service) => service.slug);
}
