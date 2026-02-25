import Navbar from "@/components/Navbar";
import LightningBolts from "@/components/LightningBolts";
import { useState, useCallback } from "react";
import { Users, Clock, Phone, X, Zap } from "lucide-react";

import hopper from "@/assets/characters/hopper.webp";
import eleven from "@/assets/characters/eleven.webp";
import steve from "@/assets/characters/steve.webp";
import dustin from "@/assets/characters/dustin.webp";
import max from "@/assets/characters/max.webp";
import vecna from "@/assets/characters/vecna.webp";
import nancy from "@/assets/characters/nancy.webp";
import billy from "@/assets/characters/billy.webp";

type Category = "all" | "technical" | "non-technical";

interface EventData {
  title: string;
  tagline: string;
  category: "technical" | "non-technical";
  image: string;
  description: string;
  rules: string[];
  judgingCriteria: string[];
  coordinator?: string;
  time?: string;
  teamSize?: string;
  fee?: string;
}

const events: EventData[] = [
  {
    title: "Insight-Ignite",
    tagline: "Research. Present. Impress.",
    category: "technical",
    image: hopper,
    description: "Paper Presentation is a technical event where participants present their ideas or research on a specific technical topic using a PowerPoint presentation.",
    rules: ["Max 2 members per team", "Any technical topic allowed", "Max 8 slides", "5 min presentation + 2 min Q&A", "PPT submitted before event"],
    judgingCriteria: ["Content quality & originality", "Clarity of presentation", "Technical depth & visuals", "Time management"],
    coordinator: "Chandru - 6382055872",
    time: "10:00 AM - 12:30 PM",
    teamSize: "Max 2",
  },
  {
    title: "Logoverse",
    tagline: "Empathize. Design. Elevate.",
    category: "technical",
    image: eleven,
    description: "UX/UI Logo Design event where participants design an innovative logo using Canva or Figma and explain concept, color psychology, and typography.",
    rules: ["Max 2 members per team", "Tools: Canva, Figma", "60–90 min for design", "3–5 min explanation", "Submit PNG/PDF", "Bring laptop"],
    judgingCriteria: ["Creativity & originality", "Relevance to theme", "Color theory & typography", "Branding impact"],
    coordinator: "Gayathiri - 8838484319",
    time: "10:00 AM – 12:30 PM",
    teamSize: "Max 2",
  },
  {
    title: "Prompt-A-Thon",
    tagline: "Craft. Prompt. Create.",
    category: "technical",
    image: steve,
    description: "AI-powered website design competition. Build a complete website using structured prompts with AI builders. No manual coding allowed.",
    rules: ["Max 2 members", "30 min time limit", "Tools: Lovable, Canva AI, Bolt", "Zero Code Policy", "5–7 prompts only"],
    judgingCriteria: ["Prompt efficiency", "UI design quality", "Design consistency", "Innovation"],
    coordinator: "Mohammed Arif - 9092629484",
    teamSize: "Max 2",
  },
  {
    title: "Syntax Surgery",
    tagline: "Trace. Tackle. Triumph.",
    category: "technical",
    image: dustin,
    description: "Code Debugging – Python. Identify, analyze, and fix errors in given Python programs within a limited time.",
    rules: ["Individual only", "Python only", "30–45 min", "Internet may be restricted"],
    judgingCriteria: ["Accuracy", "Logical understanding", "Time management", "Code optimization"],
    coordinator: "Rubin - 9080672157",
    teamSize: "Individual",
  },
  {
    title: "Adzap",
    tagline: "Act. Advertise. Amaze.",
    category: "non-technical",
    image: max,
    description: "On-stage advertising competition. Creatively promote a product through live acting, skits, role-play, or marketing pitches.",
    rules: ["Max 4 members", "5 min performance + 2 min Q&A", "Theme given on spot", "Simple props allowed", "No vulgar content"],
    judgingCriteria: ["Creativity", "Stage presence", "Marketing strategy", "Audience engagement"],
    coordinator: "Balaji - 9566086804",
    teamSize: "Max 4",
  },
  {
    title: "FF Showdown",
    tagline: "Survive. Strategize. Conquer.",
    category: "non-technical",
    image: vecna,
    description: "Esports – Free Fire Tournament. Battle Royale and Clash Squad modes across multiple elimination stages.",
    rules: ["4 members per team", "25 teams max", "₹100 per player", "3 rounds: BR → CS → Finals"],
    judgingCriteria: ["Survival duration", "Kill points", "Team coordination", "Strategy"],
    coordinator: "Kamalash - 9150474716",
    teamSize: "4 members",
    fee: "₹100/player",
  },
  {
    title: "Mystery Lyrics",
    tagline: "Read. Decode. Reveal.",
    category: "non-technical",
    image: nancy,
    description: "Tamil song-based guessing game. Identify the original Tamil song from gibberish-converted English translations.",
    rules: ["2–3 members per team", "30–45 sec per question", "One answer per round", "No phones"],
    judgingCriteria: ["Accuracy", "Time management", "Clarity of response", "Rule compliance"],
    time: "10:00 AM – 12:30 PM",
    teamSize: "2-3 members",
  },
  {
    title: "Propezz",
    tagline: "Think. Compete. Conquer.",
    category: "non-technical",
    image: billy,
    description: "Interactive quiz event on Blooket. Fast-paced, gamified MCQ environment testing knowledge, speed, and accuracy.",
    rules: ["Max 2 members", "Join via game code", "Multiple rounds", "No external help"],
    judgingCriteria: ["Accuracy", "Speed", "Overall score", "Consistency"],
    teamSize: "Max 2",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Technical", value: "technical" },
  { label: "Non-Technical", value: "non-technical" },
];

/* ───────── Lightning Flash Overlay (full screen) ───────── */
const LightningFlash = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none lightning-flash bg-white/70 mix-blend-overlay" />
  );
};

/* ───────── Event Detail Modal ───────── */
const EventModal = ({ event, onClose }: { event: EventData; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md animate-backdrop-in" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl border border-primary/30 bg-card glow-red-strong animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 rounded-full bg-card/80 backdrop-blur p-2 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span
              className={`inline-block rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider mb-2 ${
                event.category === "technical"
                  ? "bg-primary/20 text-primary border-primary/30"
                  : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
              }`}
            >
              {event.category}
            </span>
            <h2 className="font-display text-xl font-black uppercase tracking-wider text-foreground text-glow">
              {event.title}
            </h2>
            <p className="text-xs text-muted-foreground italic">{event.tagline}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Meta */}
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            {event.teamSize && (
              <span className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1">
                <Users className="w-3 h-3" /> {event.teamSize}
              </span>
            )}
            {event.time && (
              <span className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1">
                <Clock className="w-3 h-3" /> {event.time}
              </span>
            )}
            {event.coordinator && (
              <span className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1">
                <Phone className="w-3 h-3" /> {event.coordinator}
              </span>
            )}
            {event.fee && (
              <span className="rounded-full bg-primary/20 text-primary px-3 py-1 font-semibold">
                {event.fee}
              </span>
            )}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1">
              <Zap className="w-3 h-3 text-primary" /> Rules
            </h4>
            <ul className="space-y-1">
              {event.rules.map((r, i) => (
                <li key={i} className="text-xs text-muted-foreground flex gap-2">
                  <span className="text-primary font-bold">›</span> {r}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1">
              <Zap className="w-3 h-3 text-primary" /> Judging Criteria
            </h4>
            <ul className="space-y-1">
              {event.judgingCriteria.map((c, i) => (
                <li key={i} className="text-xs text-muted-foreground flex gap-2">
                  <span className="text-primary font-bold">›</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ───────── Flip Event Card ───────── */
const EventCard = ({ event, onSelect }: { event: EventData; onSelect: (e: EventData) => void }) => {
  const [flipped, setFlipped] = useState(false);
  const [lightning, setLightning] = useState(false);
  const [boltsKey, setBoltsKey] = useState(0);

  const handleFlip = useCallback(() => {
    setLightning(true);
    setBoltsKey((k) => k + 1);
    setTimeout(() => setLightning(false), 800);
    setFlipped((f) => !f);
  }, []);

  return (
    <>
      <LightningFlash active={lightning} />
      <div className="perspective cursor-pointer relative" style={{ height: 420 }} onClick={handleFlip}>
        {/* Lightning bolts over card */}
        <LightningBolts key={boltsKey} active={lightning} />
        <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
          {/* ── FRONT ── */}
          <div className="flip-card-front rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:glow-red transition-all duration-300">
            <div className="relative h-full w-full overflow-hidden group">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

              <div className="absolute top-3 left-3">
                <span
                  className={`inline-block rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                    event.category === "technical"
                      ? "bg-primary/20 text-primary border-primary/30"
                      : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                  }`}
                >
                  {event.category}
                </span>
              </div>

              {/* Tap hint */}
              <div className="absolute top-3 right-3 rounded-full bg-card/60 backdrop-blur px-2 py-1 text-[9px] text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                <Zap className="w-3 h-3 text-primary" /> Flip
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-foreground text-glow">
                  {event.title}
                </h3>
                <p className="text-[10px] text-muted-foreground italic mt-1">{event.tagline}</p>
              </div>
            </div>
          </div>

          {/* ── BACK ── */}
          <div className="flip-card-back rounded-xl border border-primary/30 bg-card overflow-hidden glow-red">
            <div className="h-full flex flex-col p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-primary text-glow">
                  {event.title}
                </h3>
                <span
                  className={`inline-block rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
                    event.category === "technical"
                      ? "bg-primary/20 text-primary border-primary/30"
                      : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                  }`}
                >
                  {event.category}
                </span>
              </div>

              <p className="text-[11px] text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                {event.description}
              </p>

              <div className="flex flex-wrap gap-2 text-[10px] text-muted-foreground mb-3">
                {event.teamSize && (
                  <span className="flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5">
                    <Users className="w-3 h-3" /> {event.teamSize}
                  </span>
                )}
                {event.time && (
                  <span className="flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5">
                    <Clock className="w-3 h-3" /> {event.time}
                  </span>
                )}
              </div>

              {event.coordinator && (
                <p className="text-[10px] text-muted-foreground flex items-center gap-1 mb-3">
                  <Phone className="w-3 h-3 text-primary" /> {event.coordinator}
                </p>
              )}

              <div className="mt-auto space-y-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(event);
                  }}
                  className="w-full rounded-lg bg-primary py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:glow-red-strong hover:scale-[1.02]"
                >
                  View Full Details
                </button>
                <p className="text-center text-[9px] text-muted-foreground uppercase tracking-wider">
                  Click card to flip back
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* ───────── Events Page ───────── */
const Events = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const filtered = activeFilter === "all" ? events : events.filter((e) => e.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}

      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center mb-10">
          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-wider text-foreground text-glow">
            Events
          </h1>
          <p className="mt-3 text-muted-foreground text-sm">
            Click a card to flip it ⚡ — then view full details
          </p>
        </div>

        <nav className="mx-auto max-w-7xl flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === f.value
                  ? "border-primary bg-primary text-primary-foreground glow-red"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </nav>

        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((event) => (
            <EventCard key={event.title} event={event} onSelect={setSelectedEvent} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
