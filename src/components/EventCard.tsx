import { useState } from "react";

interface EventCardProps {
  title: string;
  image: string;
  category: "technical" | "non-technical" | "signature" | "workshop";
  time: string;
  date?: string;
}

const categoryColors: Record<string, string> = {
  technical: "bg-primary/20 text-primary border-primary/30",
  "non-technical": "bg-accent/20 text-accent border-accent/30",
  signature: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  workshop: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

const EventCard = ({ title, image, category, time, date }: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:glow-red hover:border-primary/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`h-full w-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

        <div className="absolute top-3 left-3">
          <span
            className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${categoryColors[category]}`}
          >
            {category}
          </span>
        </div>
      </div>

      <div className="relative p-4 space-y-2">
        <h3 className="font-display text-sm font-bold uppercase tracking-wide text-foreground line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground">
          {date ? `${date} • ${time}` : time}
        </p>
        <button className="mt-2 w-full rounded-lg border border-primary/30 bg-primary/10 py-2 text-xs font-semibold uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:glow-red">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
