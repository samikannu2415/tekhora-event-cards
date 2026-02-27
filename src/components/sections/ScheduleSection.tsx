import { Clock, Coffee, Utensils, PartyPopper, ClipboardCheck, Trophy } from "lucide-react";

interface ScheduleItem {
  time: string;
  title: string;
  icon: React.ElementType;
  type: "break" | "ceremony" | "technical" | "non-technical";
  events?: { name: string; time: string }[];
}

const schedule: ScheduleItem[] = [
  { time: "9:00 AM – 9:45 AM", title: "Registration & Check-In", icon: ClipboardCheck, type: "ceremony" },
  { time: "9:45 AM – 10:30 AM", title: "Inauguration Ceremony", icon: PartyPopper, type: "ceremony" },
  { time: "10:30 AM – 11:00 AM", title: "Break", icon: Coffee, type: "break" },
  {
    time: "11:30 AM – 1:00 PM", title: "Technical Events", icon: Trophy, type: "technical",
    events: [
      { name: "INSIGHT-IGNITE", time: "11:30 AM – 1:00 PM" },
      { name: "LOGOVERSE", time: "11:30 AM – 12:30 PM" },
      { name: "PROMPT-A-THON", time: "11:30 AM – 12:30 PM" },
      { name: "SYNTAX SURGERY", time: "11:30 AM – 12:30 PM" },
    ],
  },
  { time: "1:00 PM – 2:00 PM", title: "Lunch Break", icon: Utensils, type: "break" },
  {
    time: "2:30 PM – 4:00 PM", title: "Non-Technical Events", icon: Trophy, type: "non-technical",
    events: [
      { name: "ADZAP", time: "2:30 PM – 4:00 PM" },
      { name: "FF SHOWDOWN", time: "2:30 PM – 4:00 PM" },
      { name: "MYSTERY LYRICS", time: "2:30 PM – 4:00 PM" },
      { name: "PROPEZZ", time: "2:30 PM – 4:00 PM" },
      { name: "SNAP-SHOT", time: "2:30 PM – 4:00 PM" },
    ],
  },
];

const typeColors: Record<string, string> = {
  break: "border-yellow-500/30 bg-yellow-500/5",
  ceremony: "border-blue-400/30 bg-blue-400/5",
  technical: "border-primary/30 bg-primary/5",
  "non-technical": "border-emerald-500/30 bg-emerald-500/5",
};

const dotColors: Record<string, string> = {
  break: "bg-yellow-500",
  ceremony: "bg-blue-400",
  technical: "bg-primary",
  "non-technical": "bg-emerald-500",
};

const ScheduleSection = () => (
  <section id="schedule" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-center mb-12">
      <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-wider text-foreground text-glow-subtle">
        Program Schedule
      </h2>
      <div className="h-1 w-16 bg-primary mx-auto rounded-full glow-red mt-4" />
      <p className="mt-3 text-muted-foreground text-sm">March 10, 2026 — Full Day Program</p>
    </div>

    <div className="mx-auto max-w-2xl relative">
      {/* Vertical timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-6">
        {schedule.map((item, idx) => (
          <div key={idx} className="relative pl-16">
            {/* Timeline dot */}
            <div className={`absolute left-[18px] top-3 w-3 h-3 rounded-full ${dotColors[item.type]} ring-4 ring-background`} />

            <div className={`rounded-xl border p-5 backdrop-blur transition-all hover:scale-[1.01] ${typeColors[item.type]}`}>
              <div className="flex items-center gap-3 mb-1">
                <item.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Clock className="w-3 h-3 inline mr-1" />{item.time}
                </span>
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                {item.title}
              </h3>

              {item.events && (
                <div className="mt-3 space-y-1.5">
                  {item.events.map((evt) => (
                    <div key={evt.name} className="flex justify-between items-center text-xs">
                      <span className="text-primary-foreground font-medium">
                        <span className="text-primary mr-2">›</span>{evt.name}
                      </span>
                      <span className="text-muted-foreground">{evt.time}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ScheduleSection;
