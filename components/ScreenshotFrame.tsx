import Image from "next/image";

type ScreenshotFrameProps = {
  src: string;
  alt: string;
  title: string;
  variant?: "hero" | "light";
  className?: string;
};

export default function ScreenshotFrame({
  src,
  alt,
  title,
  variant = "hero",
  className = "",
}: ScreenshotFrameProps) {
  const frame =
    variant === "hero"
      ? "border-white/15 bg-white/5 shadow-[0_20px_60px_-15px_rgba(4,15,31,0.9)]"
      : "border-bizko-navy/10 bg-white shadow-lg";
  const bar =
    variant === "hero" ? "border-white/10 bg-white/5" : "border-bizko-navy/5 bg-bizko-navy/[0.03]";
  const label =
    variant === "hero" ? "text-white/60" : "text-bizko-navy/60";

  return (
    <div
      className={`overflow-hidden rounded-2xl border backdrop-blur-sm ${frame} ${className}`}
    >
      <div className={`flex items-center gap-2 border-b px-4 py-3 ${bar}`}>
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className={`mr-3 text-xs font-medium ${label}`}>{title}</span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1040}
        className="h-auto w-full"
      />
    </div>
  );
}