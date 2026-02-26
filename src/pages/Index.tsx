import CountdownTimer from "@/components/CountdownTimer";
import Navbar from "@/components/Navbar";
import UpsideDownBackground from "@/components/UpsideDownBackground";
import { Flame, Phone } from "lucide-react";
import EventsSection from "@/components/sections/EventsSection";
import logo from "@/assets/logo.png";

const coordinators = {
  technical: [
  { event: "Insight-Ignite", name: "Chandru", phone: "6382055872" },
  { event: "Logoverse", name: "Gayathiri", phone: "8838484319" },
  { event: "Prompt-A-Thon", name: "Mohammed Arif", phone: "9092629484" },
  { event: "Syntax Surgery", name: "Rubin", phone: "9080672157" }],

  nonTechnical: [
  { event: "Adzap", name: "Balaji", phone: "9566086804" },
  { event: "FF Showdown", name: "Kamalash", phone: "9150474716" }]

};

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <UpsideDownBackground />

      {/* ═══════ HERO ═══════ */}
      <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-20">
        <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <img
            src={logo}
            alt="Zen-IT-Trix Logo"
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto drop-shadow-[0_0_25px_hsla(0,85%,50%,0.5)] invert brightness-200" />


          <div className="flex items-center justify-center gap-2 text-primary">
            <Flame className="w-5 h-5 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
              Phoenix Connect The World
            </span>
            <Flame className="w-5 h-5 animate-pulse" />
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-wider text-foreground text-glow leading-tight lg:text-7xl">

ZEN-IT-TRIX 1.O

            <span className="block text-primary text-3xl sm:text-5xl lg:text-6xl mt-2">
            </span>
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base tracking-wide max-w-xl mx-auto">DEPARTMENT OF INFORMATION TECHNOLOGY

          </p>

          <CountdownTimer />

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a href="#events" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:glow-red-strong hover:scale-105">

              Explore Events
            </a>
            <a href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary/40 hover:text-primary">

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
            {coordinators.technical.map((c) =>
            <div key={c.event} className="space-y-1">
                <p className="text-sm font-semibold text-foreground">{c.event}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Phone className="w-3 h-3" /> {c.name} – {c.phone}
                </p>
              </div>
            )}
          </div>
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Non-Technical Events</h3>
            {coordinators.nonTechnical.map((c) =>
            <div key={c.event} className="space-y-1">
                <p className="text-sm font-semibold text-foreground">{c.event}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Phone className="w-3 h-3" /> {c.name} – {c.phone}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

};

export default Index;