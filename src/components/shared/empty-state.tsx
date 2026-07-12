import { PackageX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-muted/30 rounded-2xl border border-border/50 border-dashed min-h-[300px]">
      <div className="bg-muted p-4 rounded-full mb-4">
        <PackageX className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-heading mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground max-w-sm mb-6">{description}</p>
      
      {actionLabel && onAction && (
        <Button variant="outline" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
