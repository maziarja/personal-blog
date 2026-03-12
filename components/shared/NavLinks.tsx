"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-6 md:flex">
      <Link
        href={"/"}
        className={`text-preset-8 outline-accent outline-offset-4 focus-visible:outline-3 ${pathname === "/" ? "text-foreground decoration-accent underline decoration-3 underline-offset-1" : "text-card-foreground"}`}
      >
        Home
      </Link>
      <Link
        href={"/blog"}
        className={`outline-accent text-preset-8 outline-offset-4 focus-visible:outline-3 ${pathname === "/blog" ? "text-foreground decoration-accent underline decoration-3 underline-offset-3" : "text-card-foreground"}`}
      >
        Blog
      </Link>
      <Link
        href={"/about"}
        className={`text-preset-8 outline-accent outline-offset-4 focus-visible:outline-3 ${pathname === "/about" ? "text-foreground decoration-accent underline decoration-3 underline-offset-1" : "text-card-foreground"}`}
      >
        About
      </Link>
      <Link
        href={"/newsletter"}
        className={`text-preset-8 outline-accent outline-offset-4 focus-visible:outline-3 ${pathname === "/newsletter" ? "text-foreground decoration-accent underline decoration-3 underline-offset-1" : "text-card-foreground"}`}
      >
        Newsletter
      </Link>
    </div>
  );
}

export default NavLinks;
