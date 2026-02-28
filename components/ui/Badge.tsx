import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "outline" | "ghost";
  className?: string;
}

export function Badge({ children, variant = "gold", className }: BadgeProps) {
  const variants = {
    gold: "bg-gold/10 text-gold border border-gold/30",
    outline: "border border-parchment/20 text-parchment/60",
    ghost: "text-parchment/40",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-body text-[10px] tracking-[0.2em] uppercase px-3 py-1",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
