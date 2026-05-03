import { cn } from "@/lib/utils";

interface PlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  aspectRatio?: "video" | "square" | "portrait" | "auto";
}

export function Placeholder({ text, aspectRatio = "auto", className, ...props }: PlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-card/50 border border-dashed border-muted rounded-md p-6 text-center text-sm text-muted-foreground",
        {
          "aspect-video": aspectRatio === "video",
          "aspect-square": aspectRatio === "square",
          "aspect-[3/4]": aspectRatio === "portrait",
          "min-h-[200px]": aspectRatio === "auto",
        },
        className
      )}
      {...props}
    >
      <span className="font-accent tracking-widest uppercase text-xs opacity-70">{text}</span>
    </div>
  );
}
