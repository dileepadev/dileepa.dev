"use client";

import Link from "next/link";
import { scrollToSection } from "@/utils/scroll";

export default function CTAButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="buttonColor borderColor buttonTransition md:text-lg text-base py-2 px-4 rounded-md"
      onClick={(e) => scrollToSection(e, "connect")}
    >
      {children}
    </Link>
  );
}
