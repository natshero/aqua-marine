interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-3 ${
        alignment === "center" ? "items-center text-center mx-auto" : "items-start text-left"
      } max-w-2xl mb-10 md:mb-16`}
    >
      <h2 className="text-3xl md:text-4xl font-heading text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
