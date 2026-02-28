import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  size?: "default" | "narrow" | "wide";
}

const sizes = {
  default: "max-w-8xl",
  narrow: "max-w-3xl",
  wide: "max-w-9xl",
};

export function Container({
  children,
  className,
  as: Tag = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Tag className={cn("container-luxury", sizes[size], className)}>
      {children}
    </Tag>
  );
}
