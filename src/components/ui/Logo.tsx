import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "white" | "dark" | "navy" | "badge" | "original";
  height?: number;
}

export function Logo({ className = "", variant = "white", height = 58 }: LogoProps) {
  // If explicitly requested as badge or original, use the exact uploaded rectangular file
  const isBadge = variant === "badge" || variant === "original";

  const src = isBadge
    ? "/images/pophen-logo.png"
    : variant === "white"
    ? "/images/pophen-logo-white-tight.png"
    : "/images/pophen-logo-navy-tight.png";

  const width = isBadge
    ? Math.round(height * (144 / 100))
    : Math.round(height * (124 / 65));

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 group ${className}`}
      aria-label="POPHEN Home"
    >
      <div className="relative flex items-center">
        <Image
          src={src}
          alt="POPHEN - Waterproof and Fireproof Cleanroom Systems"
          width={width}
          height={height}
          priority
          unoptimized
          className="h-auto w-auto transition-transform duration-300 group-hover:scale-105"
          style={{ maxHeight: `${height}px` }}
        />
      </div>
    </Link>
  );
}
