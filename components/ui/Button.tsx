import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "ghost" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants = {
  primary:
    "bg-gold text-obsidian hover:bg-gold-light focus-visible:bg-gold-light",
  ghost: "bg-transparent text-parchment hover:text-gold border-transparent",
  outline:
    "border border-parchment/30 text-parchment hover:border-gold hover:text-gold",
  gold: "border border-gold text-gold hover:bg-gold hover:text-obsidian focus-visible:bg-gold focus-visible:text-obsidian",
};

const sizes = {
  sm: "px-4 py-2 text-xs tracking-[0.15em]",
  md: "px-6 py-3 text-sm tracking-widest",
  lg: "px-8 py-4 text-sm tracking-[0.2em]",
};

export function Button({
  variant = "gold",
  size = "md",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const cls = cn(
    "inline-flex items-center gap-2 font-body uppercase transition-all duration-300",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cls}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
