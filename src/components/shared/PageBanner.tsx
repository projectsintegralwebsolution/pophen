import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  bgImage?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageBanner({
  title,
  subtitle,
  description,
  badge = "POPHEN Cleanroom Systems",
  bgImage = "/images/about-cleanroom-hero-CfcjiI0h.webp",
  breadcrumbs = [{ label: "Home", href: "/" }],
}: PageBannerProps) {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-pophen-navy-950 text-white overflow-hidden">
      {/* Background Image with Authentic Cleanroom Overlay */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover object-center opacity-30 scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pophen-navy-950 via-pophen-navy-950/90 to-pophen-navy-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-300">
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>

            {breadcrumbs
              .filter((b) => b.label !== "Home")
              .map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-pophen-cyan font-medium">{crumb.label}</span>
                  )}
                </div>
              ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pophen-blue/20 text-pophen-cyan text-xs font-semibold tracking-wide border border-pophen-cyan/20">
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-base sm:text-lg font-medium text-pophen-blue-light max-w-2xl">
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed pt-1">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
