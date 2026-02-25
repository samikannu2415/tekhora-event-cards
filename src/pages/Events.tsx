import Navbar from "@/components/Navbar";
import { useState } from "react";
import { ChevronDown, ChevronUp, Users, Clock, MapPin, Phone } from "lucide-react";

type Category = "all" | "technical" | "non-technical";

interface EventData {
  title: string;
  tagline: string;
  category: "technical" | "non-technical";
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
    description:
      "Paper Presentation is a technical event where participants present their ideas or research on a specific technical topic of their choice using a PowerPoint presentation. The objective is to encourage innovative thinking, technical knowledge sharing, and effective communication skills.",
    rules: [
      "Team Size: Maximum 2 members per team",
      "Topic: Any specific technical topic allowed. Non-technical topics not permitted.",
      "Slides: Maximum 8 slides (including title and conclusion)",
      "Time Limit: 5 minutes for presentation + 2 minutes for Q&A",
      "PPT must be submitted before the event begins",
      "Q&A session will follow",
    ],
    judgingCriteria: [
      "Content quality & originality",
      "Clarity of presentation",
      "Technical depth & visuals",
      "Time management & Q&A handling",
      "Research",
    ],
    coordinator: "Chandru - 6382055872",
    time: "10:00 AM - 12:30 PM",
    teamSize: "Max 2",
  },
  {
    title: "Logoverse",
    tagline: "Empathize. Design. Elevate.",
    category: "technical",
    description:
      "UX/UI Logo Design is a creative technical event where participants design an innovative and meaningful logo using tools such as Canva or Figma. Participants must explain the concept, color psychology, typography, and design elements behind their logo.",
    rules: [
      "Team Size: Maximum 2 members per team",
      "Theme: Logo design based on given theme (announced on the spot)",
      "Tools Allowed: Canva, Figma",
      "Time Limit: 60–90 minutes for design creation",
      "Presentation: 3–5 minutes explanation of logo concept",
      "Final logo must be submitted in PNG/PDF format",
      "Laptop must be brought",
    ],
    judgingCriteria: [
      "Creativity & originality",
      "Relevance to theme",
      "Color theory & typography usage",
      "Visual clarity & branding impact",
      "Explanation & presentation skills",
    ],
    coordinator: "Gayathiri - 8838484319",
    time: "10:00 AM – 12:30 PM",
    teamSize: "Max 2",
  },
  {
    title: "Prompt-A-Thon",
    tagline: "Craft. Prompt. Create.",
    category: "technical",
    description:
      "Promptathon is an AI-powered website design competition where participants build a complete website using structured prompts within a limited time. Focus is on prompt engineering skills, creativity, website structure planning, and user experience design.",
    rules: [
      "Team Size: Maximum 2 members per team",
      "Time Limit: 30 minutes",
      "Tools Allowed: AI Website Builders (Lovable, Canva AI, Bolt, etc.)",
      "Zero Code Policy: No manual coding allowed",
      "Prompt Limit: Only 5–7 prompts permitted",
      "Theme: Fluid Design (or announced on the spot)",
      "Final website link or exported file must be submitted before deadline",
    ],
    judgingCriteria: [
      "Prompt efficiency & clarity",
      "UI design quality",
      "Design consistency",
      "Innovation & creativity",
    ],
    coordinator: "Mohammed Arif - 9092629484",
    teamSize: "Max 2",
  },
  {
    title: "Syntax Surgery",
    tagline: "Trace. Tackle. Triumph.",
    category: "technical",
    description:
      "Code Debugging – Python is a technical event where participants identify, analyze, and fix errors in given Python programs within a limited time. Tests logical thinking, problem-solving ability, and programming knowledge.",
    rules: [
      "Team Size: Individual (1 member)",
      "Language: Python only",
      "Time Limit: 30–45 minutes",
      "Participants will be given buggy Python programs",
      "Internet access may be restricted",
      "Final corrected code must be submitted before deadline",
    ],
    judgingCriteria: [
      "Accuracy of debugging",
      "Logical understanding",
      "Time management",
      "Code optimization",
      "Output correctness",
    ],
    coordinator: "Rubin - 9080672157",
    teamSize: "Individual",
  },
  {
    title: "Adzap",
    tagline: "Act. Advertise. Amaze.",
    category: "non-technical",
    description:
      "Adzap – Live Performance is an on-stage advertising competition where participants creatively promote a product, brand, or concept through live acting, skits, role-play, or marketing pitches.",
    rules: [
      "Team Size: Maximum 4 members per team",
      "Time Limit: 5 minutes performance + 2 minutes Q&A",
      "Product/Theme: Given on the spot",
      "Performance Type: Skit / Role-play / Creative Advertisement",
      "Simple props allowed",
      "Vulgar, offensive, or inappropriate content is strictly prohibited",
    ],
    judgingCriteria: [
      "Creativity & originality",
      "Acting & stage presence",
      "Marketing strategy & clarity",
      "Audience engagement",
      "Time management",
    ],
    coordinator: "Balaji - 9566086804",
    teamSize: "Max 4",
  },
  {
    title: "FF Showdown",
    tagline: "Survive. Strategize. Conquer.",
    category: "non-technical",
    description:
      "Esports – Free Fire Tournament is a competitive gaming event conducted in Garena Free Fire. Teams compete in Battle Royale and Clash Squad modes across multiple stages with group-based eliminations.",
    rules: [
      "Team Size: 4 members per team",
      "Total Teams: 25",
      "Registration Fee: ₹100 per player",
      "Round 1: Battle Royale – Top 16 advance",
      "Round 2: Clash Squad – Top 8 advance",
      "Round 3: Semi-Final & Final – Top 2 win prizes",
    ],
    judgingCriteria: [
      "Survival duration",
      "Kill points",
      "Team coordination",
      "Strategy & gameplay",
      "Overall match performance",
    ],
    coordinator: "Kamalash - 9150474716",
    teamSize: "4 members",
    fee: "₹100/player",
  },
  {
    title: "Mystery Lyrics",
    tagline: "Read. Decode. Reveal.",
    category: "non-technical",
    description:
      "Mystery Lyrics is a Tamil song-based guessing game. A line from a Tamil song is translated into English and then converted into gibberish words. Participants must identify the original Tamil song from the written gibberish.",
    rules: [
      "Team Size: 2–3 members per team",
      "Time Limit: 30–45 seconds per question",
      "Only one answer allowed per round",
      "No hints or clues provided",
      "No mobile phones or external assistance",
      "Proper discipline must be maintained",
    ],
    judgingCriteria: [
      "Accuracy of identification",
      "Partial points for close answers",
      "Time management",
      "Clarity of response",
      "Rule compliance",
    ],
    time: "10:00 AM – 12:30 PM",
    teamSize: "2-3 members",
  },
  {
    title: "Propezz",
    tagline: "Think. Compete. Conquer.",
    category: "non-technical",
    description:
      "PROPEZZ is an interactive quiz event conducted using the online platform Blooket. Participants answer multiple-choice questions in a fast-paced, gamified environment testing knowledge, speed, and accuracy.",
    rules: [
      "Team Size: Maximum 2 members per team",
      "Join using provided game code",
      "Multiple rounds may be conducted",
      "Final rankings based on cumulative scores",
      "No unfair means or external assistance",
    ],
    judgingCriteria: [
      "Accuracy of answers",
      "Speed of response",
      "Overall game score",
      "Consistency across rounds",
      "Rule compliance",
    ],
    teamSize: "Max 2",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Technical", value: "technical" },
  { label: "Non-Technical", value: "non-technical" },
];

const EventAccordion = ({ event }: { event: EventData }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div>
          <span
            className={`inline-block rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider mb-2 ${
              event.category === "technical"
                ? "bg-primary/20 text-primary border-primary/30"
                : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
            }`}
          >
            {event.category}
          </span>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
            {event.title}
          </h3>
          <p className="text-xs text-muted-foreground italic">{event.tagline}</p>
        </div>
        {open ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
        )}
      </button>

      {open && (
        <div className="px-5 pb-5 space-y-4 border-t border-border/50 pt-4">
          {/* Meta info */}
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
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
            {event.coordinator && (
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" /> {event.coordinator}
              </span>
            )}
            {event.fee && (
              <span className="text-primary font-semibold">{event.fee}</span>
            )}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
              Rules
            </h4>
            <ul className="space-y-1">
              {event.rules.map((r, i) => (
                <li key={i} className="text-xs text-muted-foreground flex gap-2">
                  <span className="text-primary">•</span> {r}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
              Judging Criteria
            </h4>
            <ul className="space-y-1">
              {event.judgingCriteria.map((c, i) => (
                <li key={i} className="text-xs text-muted-foreground flex gap-2">
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
  const filtered =
    activeFilter === "all" ? events : events.filter((e) => e.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-wider text-foreground text-glow">
            Events
          </h1>
          <p className="mt-3 text-muted-foreground text-sm">
            Explore our Technical & Non-Technical events
          </p>
        </div>

        <nav className="mx-auto max-w-3xl flex flex-wrap justify-center gap-2 mb-10">
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

        <div className="mx-auto max-w-3xl space-y-4">
          {filtered.map((event) => (
            <EventAccordion key={event.title} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
