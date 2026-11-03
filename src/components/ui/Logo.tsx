import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "white" | "dark" | "navy" | "badge" | "original";
  height?: number;
}

export function Logo({ className = "", height = 52 }: LogoProps) {
  // Official Pophen India Logo: 1024 x 500 (aspect ratio: 2.048)
  const width = Math.round(height * (1024 / 500));

  return (
    <Link
      href="/"
      className={`inline-flex items-center group ${className}`}
      aria-label="POPHEN - Advanced Cleanroom Architecture"
    >
      <div className="relative flex items-center">
        <Image
          src="/images/pophen-logo.png"
          alt="POPHEN - Advanced Cleanroom Architecture"
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

