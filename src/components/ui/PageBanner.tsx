import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  subtitle?: string;
  badge?: string;
  image: string;
  breadcrumbs: BreadcrumbItem[];
  actions?: React.ReactNode;
}

export function PageBanner({
  title,
  subtitle,
  badge,
  image,
  breadcrumbs,
  actions,
}: PageBannerProps) {
  return (
    <div className="relative w-full bg-[#001428] text-white min-h-[300px] sm:min-h-[340px] lg:min-h-[380px] flex items-center overflow-hidden border-b border-slate-800">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover object-center opacity-30 brightness-90 contrast-110"
          sizes="100vw"
        />
        {/* Multilayer gradient for crystal clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001026] via-[#00172e]/90 to-[#00172e]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001026] via-transparent to-transparent opacity-80" />
      </div>

      {/* Decorative Technical Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center gap-1.5 text-xs text-slate-300 mb-4 flex-wrap"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-slate-300 hover:text-pophen-cyan transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <div key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-slate-500" />
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="text-slate-300 hover:text-pophen-cyan transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-pophen-cyan font-semibold truncate max-w-[200px] sm:max-w-none">
                    {crumb.label}
                  </span>
                )}
              </div>
            );
          })}
        </nav>

        {/* Optional Eyebrow Badge */}
        {badge && (
          <div className="mb-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-pophen-cyan/20 text-pophen-cyan border border-pophen-cyan/30 backdrop-blur-sm">
              {badge}
            </span>
          </div>
        )}

        {/* Page Main Heading */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Action Button Slot */}
        {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </div>
  );
}
