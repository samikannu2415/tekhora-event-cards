import Navbar from "@/components/Navbar";
import { useState } from "react";
import { ChevronDown, ChevronUp, Users, Clock, Phone } from "lucide-react";

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
    description:
      "Paper Presentation is a technical event where participants present their ideas or research on a specific technical topic of their choice using a PowerPoint presentation.",
    rules: [
      "Team Size: Maximum 2 members per team",
      "Topic: Any specific technical topic allowed",
      "Slides: Maximum 8 slides (including title and conclusion)",
      "Time Limit: 5 minutes + 2 minutes Q&A",
      "PPT must be submitted before the event begins",
    ],
    judgingCriteria: ["Content quality & originality", "Clarity of presentation", "Technical depth & visuals", "Time management & Q&A handling"],
    coordinator: "Chandru - 6382055872",
    time: "10:00 AM - 12:30 PM",
    teamSize: "Max 2",
  },
  {
    title: "Logoverse",
    tagline: "Empathize. Design. Elevate.",
    category: "technical",
    image: eleven,
    description:
      "UX/UI Logo Design event where participants design an innovative logo using Canva or Figma and explain concept, color psychology, and typography.",
    rules: [
      "Team Size: Maximum 2 members per team",
      "Tools Allowed: Canva, Figma",
      "Time Limit: 60–90 minutes for design",
      "Presentation: 3–5 minutes explanation",
      "Submit in PNG/PDF format",
      "Laptop must be brought",
    ],
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
    description:
      "AI-powered website design competition. Build a complete website using structured prompts with AI builders. No manual coding allowed.",
    rules: [
      "Team Size: Maximum 2 members",
      "Time Limit: 30 minutes",
      "Tools: Lovable, Canva AI, Bolt, etc.",
      "Zero Code Policy",
      "Prompt Limit: 5–7 prompts",
    ],
    judgingCriteria: ["Prompt efficiency & clarity", "UI design quality", "Design consistency", "Innovation & creativity"],
    coordinator: "Mohammed Arif - 9092629484",
    teamSize: "Max 2",
  },
  {
    title: "Syntax Surgery",
    tagline: "Trace. Tackle. Triumph.",
    category: "technical",
    image: dustin,
    description:
      "Code Debugging – Python. Identify, analyze, and fix errors in given Python programs within a limited time.",
    rules: [
      "Individual participation",
      "Language: Python only",
      "Time Limit: 30–45 minutes",
      "Internet access may be restricted",
    ],
    judgingCriteria: ["Accuracy of debugging", "Logical understanding", "Time management", "Code optimization"],
    coordinator: "Rubin - 9080672157",
    teamSize: "Individual",
  },
  {
    title: "Adzap",
    tagline: "Act. Advertise. Amaze.",
    category: "non-technical",
    image: max,
    description:
      "On-stage advertising competition. Creatively promote a product through live acting, skits, role-play, or marketing pitches.",
    rules: [
      "Team Size: Maximum 4 members",
      "Time: 5 min performance + 2 min Q&A",
      "Product/Theme: Given on the spot",
      "Simple props allowed",
      "No vulgar/offensive content",
    ],
    judgingCriteria: ["Creativity & originality", "Acting & stage presence", "Marketing strategy", "Audience engagement"],
    coordinator: "Balaji - 9566086804",
    teamSize: "Max 4",
  },
  {
    title: "FF Showdown",
    tagline: "Survive. Strategize. Conquer.",
    category: "non-technical",
    image: vecna,
    description:
      "Esports – Free Fire Tournament. Battle Royale and Clash Squad modes across multiple elimination stages.",
    rules: [
      "Team Size: 4 members",
      "Total Teams: 25",
      "Registration Fee: ₹100 per player",
      "Round 1: Battle Royale – Top 16",
      "Round 2: Clash Squad – Top 8",
      "Round 3: Semi-Final & Final",
    ],
    judgingCriteria: ["Survival duration", "Kill points", "Team coordination", "Strategy & gameplay"],
    coordinator: "Kamalash - 9150474716",
    teamSize: "4 members",
    fee: "₹100/player",
  },
  {
    title: "Mystery Lyrics",
    tagline: "Read. Decode. Reveal.",
    category: "non-technical",
    image: nancy,
    description:
      "Tamil song-based guessing game. Identify the original Tamil song from gibberish-converted English translations.",
    rules: [
      "Team Size: 2–3 members",
      "30–45 seconds per question",
      "One answer per round",
      "No mobile phones or external help",
    ],
    judgingCriteria: ["Accuracy of identification", "Time management", "Clarity of response", "Rule compliance"],
    time: "10:00 AM – 12:30 PM",
    teamSize: "2-3 members",
  },
  {
    title: "Propezz",
    tagline: "Think. Compete. Conquer.",
    category: "non-technical",
    image: billy,
    description:
      "Interactive quiz event on Blooket. Fast-paced, gamified MCQ environment testing knowledge, speed, and accuracy.",
    rules: [
      "Team Size: Maximum 2 members",
      "Join using provided game code",
      "Multiple rounds",
      "No unfair means or external help",
    ],
    judgingCriteria: ["Accuracy", "Speed of response", "Overall score", "Consistency across rounds"],
    teamSize: "Max 2",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Technical", value: "technical" },
  { label: "Non-Technical", value: "non-technical" },
];

const EventCard = ({ event }: { event: EventData }) => {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/40 hover:glow-red">
      {/* Image section */}
      <div
        className="relative aspect-[3/4] overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setExpanded(!expanded)}
      >
        <img
          src={event.image}
          alt={event.title}
          className={`h-full w-full object-cover transition-transform duration-700 ${hovered ? "scale-110" : "scale-100"}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

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

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-foreground">
            {event.title}
          </h3>
          <p className="text-[10px] text-muted-foreground italic mt-1">{event.tagline}</p>
        </div>
      </div>

      {/* Info bar */}
      <div className="p-4 space-y-3">
        <div className="flex flex-wrap gap-2 text-[10px] text-muted-foreground">
          {event.teamSize && (
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" /> {event.teamSize}
            </span>
          )}
          {event.time && (
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {event.time}
            </span>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-1 rounded-lg border border-primary/30 bg-primary/10 py-2 text-xs font-semibold uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:glow-red"
        >
          {expanded ? "Hide" : "View"} Details
          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
      </div>

      {/* Expandable details */}
      {expanded && (
        <div className="px-4 pb-4 space-y-3 border-t border-border/50 pt-3">
          {event.coordinator && (
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Phone className="w-3 h-3 text-primary" /> {event.coordinator}
            </p>
          )}
          {event.fee && (
            <p className="text-xs font-semibold text-primary">{event.fee}</p>
          )}

          <p className="text-xs text-muted-foreground leading-relaxed">{event.description}</p>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-foreground mb-1">Rules</h4>
            <ul className="space-y-0.5">
              {event.rules.map((r, i) => (
                <li key={i} className="text-[10px] text-muted-foreground flex gap-1.5">
                  <span className="text-primary">•</span> {r}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-foreground mb-1">Judging</h4>
            <ul className="space-y-0.5">
              {event.judgingCriteria.map((c, i) => (
                <li key={i} className="text-[10px] text-muted-foreground flex gap-1.5">
                  <span className="text-primary">•</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const Events = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const filtered = activeFilter === "all" ? events : events.filter((e) => e.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center mb-10">
          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-wider text-foreground text-glow">
            Events
          </h1>
          <p className="mt-3 text-muted-foreground text-sm">
            Explore our Technical & Non-Technical events
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
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
