interface ProductBadgeProps {
  label: string;
  variant?: "new" | "featured" | "custom";
}

export function ProductBadge({ label, variant = "new" }: ProductBadgeProps) {
  const baseStyles = "absolute top-4 left-4 px-2.5 py-1 text-xs font-semibold rounded-full z-10 shadow-sm";
  
  const variantStyles = {
    new: "bg-secondary text-secondary-foreground",
    featured: "bg-primary text-primary-foreground",
    custom: "bg-background text-foreground border border-border",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]}`}>
      {label}
    </span>
  );
}
