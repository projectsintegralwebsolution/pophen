import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BROCHURE_PRODUCTS } from "@/data/brochureData";
import { ProductDetailView } from "@/components/product/ProductDetailView";

interface PageProps {
  params: {
    slug: string;
  };
}

const PRODUCT_ALIASES: Record<string, string> = {
  "cleanroom-walls": "r-series",
  "ceilings": "ck2000-walkable",
  "doors": "doors-windows",
  "cleanroom-windows": "doors-windows",
  "modular-partitions": "ss2000",
  "air-units": "ck2000-ffu",
};

export function generateStaticParams() {
  const directSlugs = BROCHURE_PRODUCTS.map((product) => ({
    slug: product.id,
  }));
  const aliasSlugs = Object.keys(PRODUCT_ALIASES).map((slug) => ({
    slug,
  }));
  return [...directSlugs, ...aliasSlugs];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const resolvedId = PRODUCT_ALIASES[params.slug] || params.slug;
  const product = BROCHURE_PRODUCTS.find((p) => p.id === resolvedId);
  if (!product) {
    return { title: "Product Not Found | POPHEN" };
  }

  return {
    title: `${product.name} – Technical Specifications & System Details | POPHEN`,
    description: `${product.tagline}. View full engineering drawings, cross-sections, and FM4882 / TÜV certified technical specifications.`,
    openGraph: {
      title: `${product.name} | POPHEN Cleanroom Systems`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedId = PRODUCT_ALIASES[params.slug] || params.slug;
  const product = BROCHURE_PRODUCTS.find((p) => p.id === resolvedId);

  if (!product) {
    notFound();
  }

  const relatedProducts = BROCHURE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <ProductDetailView product={product} relatedProducts={relatedProducts} />
  );
}
