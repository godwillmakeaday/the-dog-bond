type VisualBlockProps = {
  src: string;
  title: string;
  eyebrow?: string;
  className?: string;
};

export function VisualBlock({ src, title, eyebrow = "Editorial image", className = "" }: VisualBlockProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-earth-200 bg-earth-900 shadow-card ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(30,24,18,0.42), rgba(23,35,27,0.20)), radial-gradient(circle at 30% 20%, rgba(221,201,164,0.18), transparent 35%), url('${src}')`,
        backgroundSize: "cover, cover, cover",
        backgroundPosition: "center, center, center"
      }}
    >
      <div className="flex min-h-72 flex-col justify-end p-7 text-earth-50 md:min-h-96">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-earth-200">{eyebrow}</p>
        <h3 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight">{title}</h3>
      </div>
    </div>
  );
}
