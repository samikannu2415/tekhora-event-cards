import CountdownTimer from "@/components/CountdownTimer";
import Navbar from "@/components/Navbar";
import UpsideDownBackground from "@/components/UpsideDownBackground";
import { ArrowRight, Flame, Phone, CheckCircle } from "lucide-react";
import { useState } from "react";
import EventsSection from "@/components/sections/EventsSection";

/* ───── Registration Form Data ───── */
const eventOptions = [
  { label: "Insight-Ignite (Paper Presentation)", value: "insight-ignite" },
  { label: "Logoverse (UX/UI Logo Design)", value: "logoverse" },
  { label: "Prompt-A-Thon", value: "prompt-a-thon" },
  { label: "Syntax Surgery (Code Debugging)", value: "syntax-surgery" },
  { label: "Adzap (Live Performance)", value: "adzap" },
  { label: "FF Showdown (Free Fire)", value: "ff-showdown" },
  { label: "Mystery Lyrics", value: "mystery-lyrics" },
  { label: "Propezz (Quiz)", value: "propezz" },
];

const coordinators = {
  technical: [
    { event: "Insight-Ignite", name: "Chandru", phone: "6382055872" },
    { event: "Logoverse", name: "Gayathiri", phone: "8838484319" },
    { event: "Prompt-A-Thon", name: "Mohammed Arif", phone: "9092629484" },
    { event: "Syntax Surgery", name: "Rubin", phone: "9080672157" },
  ],
  nonTechnical: [
    { event: "Adzap", name: "Balaji", phone: "9566086804" },
    { event: "FF Showdown", name: "Kamalash", phone: "9150474716" },
  ],
};

const inputClass =
  "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors";

const Index = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    event: "",
    teamMembers: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <UpsideDownBackground />

      {/* ═══════ HERO ═══════ */}
      <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-20">
        <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Flame className="w-5 h-5 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
              Phoenix Connect The World
            </span>
            <Flame className="w-5 h-5 animate-pulse" />
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-wider text-foreground text-glow leading-tight">
            Zen-IT-Trix
            <span className="block text-primary text-3xl sm:text-5xl lg:text-6xl mt-2">1.0</span>
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base tracking-wide max-w-xl mx-auto">
            The Inaugural Intercollegiate Technical Symposium — February 20, 2026
          </p>

          <CountdownTimer />

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:glow-red-strong hover:scale-105"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#events"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-all hover:bg-primary/20 hover:scale-105"
            >
              Explore Events
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary/40 hover:text-primary"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-wider text-foreground text-glow">
            About
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full glow-red" />
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            This marks the beginning of something extraordinary. The inaugural edition of our
            technical symposium introduces a vibrant platform that brings together curiosity,
            innovation, and collaboration under one roof. More than just an event, it is a space
            where ideas evolve into action, talents find their stage, and creativity pushes beyond
            conventional boundaries.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            With a diverse blend of technical and non-technical events, the symposium encourages
            participants to learn, compete, explore, and create while fostering meaningful
            connections. It is an invitation to challenge limits, share bold ideas, and be part of a
            journey that is only just beginning.
          </p>
        </div>
      </section>

      {/* ═══════ EVENTS ═══════ */}
      <EventsSection />

      {/* ═══════ REGISTER ═══════ */}
      <section id="register" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-wider text-foreground text-glow">
            Registration
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full glow-red mt-4" />
          <p className="mt-4 text-muted-foreground text-sm">
            Register for your preferred event at Zen-IT-Trix 1.0
          </p>
        </div>

        {submitted ? (
          <div className="text-center space-y-4 max-w-md mx-auto py-12">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <h3 className="font-display text-2xl font-black uppercase tracking-wider text-foreground text-glow">
              Registered!
            </h3>
            <p className="text-muted-foreground text-sm">
              Thank you for registering for Zen-IT-Trix 1.0. We'll reach out to you soon with more details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">Full Name *</label>
              <input name="name" value={form.name} onChange={handleChange} required maxLength={100} className={inputClass} placeholder="Enter your full name" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">Email *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required maxLength={255} className={inputClass} placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">Phone Number *</label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} required maxLength={15} className={inputClass} placeholder="Your phone number" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">College Name *</label>
              <input name="college" value={form.college} onChange={handleChange} required maxLength={200} className={inputClass} placeholder="Your college name" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">Select Event *</label>
              <select name="event" value={form.event} onChange={handleChange} required className={inputClass}>
                <option value="">Choose an event</option>
                {eventOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">Team Members (if any)</label>
              <textarea name="teamMembers" value={form.teamMembers} onChange={handleChange as any} maxLength={500} rows={3} className={`${inputClass} resize-none`} placeholder="Enter team member names (one per line)" />
            </div>
            <button type="submit" disabled={loading} className="w-full rounded-lg bg-primary py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:glow-red-strong hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "Submitting..." : "Register Now"}
            </button>
          </form>
        )}
      </section>

      {/* ═══════ CONTACT ═══════ */}
      <section id="contact" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-wider text-foreground text-glow">
            Contact Us
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full glow-red mt-4" />
        </div>

        <div className="mx-auto max-w-3xl grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Technical Events</h3>
            {coordinators.technical.map((c) => (
              <div key={c.event} className="space-y-1">
                <p className="text-sm font-semibold text-foreground">{c.event}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Phone className="w-3 h-3" /> {c.name} – {c.phone}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Non-Technical Events</h3>
            {coordinators.nonTechnical.map((c) => (
              <div key={c.event} className="space-y-1">
                <p className="text-sm font-semibold text-foreground">{c.event}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Phone className="w-3 h-3" /> {c.name} – {c.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
