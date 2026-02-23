import { useState } from "react";
import EventCard from "@/components/EventCard";

import iplAuction from "@/assets/events/ipl-auction.webp";
import callOfQuery from "@/assets/events/call-of-query.webp";
import connexions from "@/assets/events/connexions.webp";
import tos from "@/assets/events/tournament-of-strategies.webp";
import treasureHunt from "@/assets/events/treasure-hunt.webp";
import ninjaCoding from "@/assets/events/ninja-coding.webp";
import adzap from "@/assets/events/adzap.webp";
import codingWithAi from "@/assets/events/coding-with-ai.webp";
import fandomQuiz from "@/assets/events/fandom-quiz.webp";
import hackathon from "@/assets/events/hackathon.webp";
import munDebate from "@/assets/events/mun-debate.webp";
import paperPresentation from "@/assets/events/paper-presentation.webp";
import workshopBigData from "@/assets/events/workshop-big-data.webp";
import workshopSpringFusion from "@/assets/events/workshop-spring-fusion.webp";

type Category = "all" | "technical" | "non-technical" | "signature" | "workshop";

const events = [
  { title: "IPL Auction", image: iplAuction, category: "non-technical" as const, time: "Rolling Event starts 9:30 AM" },
  { title: "Call Of Query", image: callOfQuery, category: "technical" as const, time: "Rolling Event starts 9:30 AM" },
  { title: "Connextions", image: connexions, category: "technical" as const, time: "Rolling Event starts 9:30 AM" },
  { title: "Tournament of Strategies", image: tos, category: "non-technical" as const, time: "Rolling Event starts 9:30 AM" },
  { title: "Treasure Hunt", image: treasureHunt, category: "non-technical" as const, time: "Rolling Event starts 9:30 AM" },
  { title: "Ninja Coding", image: ninjaCoding, category: "technical" as const, time: "Rolling Event starts 9:30 AM" },
  { title: "ADZAP", image: adzap, category: "non-technical" as const, time: "Rolling Event starts 9:30 AM" },
  { title: "Coding with AI", image: codingWithAi, category: "technical" as const, time: "Rolling Event starts 9:30 AM" },
  { title: "Fandom Quiz", image: fandomQuiz, category: "non-technical" as const, time: "Rolling Event starts 9:30 AM" },
  { title: "Hackathon", image: hackathon, category: "signature" as const, time: "9:30 AM to 5 PM", date: "Feb 22, 2026" },
  { title: "MUN Debate", image: munDebate, category: "signature" as const, time: "9:30 AM to 5 PM", date: "Feb 22, 2026" },
  { title: "Paper Presentation", image: paperPresentation, category: "signature" as const, time: "9:30 AM to 5 PM", date: "Feb 21, 2026" },
  { title: "Modern Big Data Analytics", image: workshopBigData, category: "workshop" as const, time: "9:00 AM - 5:00 PM", date: "Feb 22, 2026" },
  { title: "Spring Fusion", image: workshopSpringFusion, category: "workshop" as const, time: "1:00 PM - 5:00 PM", date: "Feb 21, 2026" },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Technical", value: "technical" },
  { label: "Non-Technical", value: "non-technical" },
  { label: "Signature", value: "signature" },
  { label: "Workshops", value: "workshop" },
];

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered = activeFilter === "all" ? events : events.filter((e) => e.category === activeFilter);

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-7xl text-center mb-12">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider text-foreground text-glow">
          Tekhora'26
        </h1>
        <p className="mt-3 text-muted-foreground text-sm sm:text-base tracking-wide">
          Intercollegiate Tech Symposium — Feb 21 & 22
        </p>
      </header>

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

      <main className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
