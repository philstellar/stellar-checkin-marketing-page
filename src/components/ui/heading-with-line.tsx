
import { cn } from "@/lib/utils";

interface HeadingWithLineProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  titleClassName?: string;
  subtitleClassName?: string;
}

export function HeadingWithLine({
  title,
  subtitle,
  className,
  align = "left",
  titleClassName,
  subtitleClassName,
}: HeadingWithLineProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "", className)}>
      <h2 className={cn("text-3xl md:text-4xl font-bold text-royal mb-4", titleClassName)}>
        {title}
      </h2>
      <div className={cn("h-1 w-24 bg-apple mb-6 rounded-full", align === "center" ? "mx-auto" : "")}></div>
      {subtitle && (
        <p className={cn("text-lg text-royal-700 mb-10 max-w-lg", align === "center" ? "mx-auto" : "", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
