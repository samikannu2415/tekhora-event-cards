import CountdownTimer from "@/components/CountdownTimer";
import Navbar from "@/components/Navbar";
import UpsideDownBackground from "@/components/UpsideDownBackground";
import { Flame, Phone, MapPin, Mail } from "lucide-react";
import EventsSection from "@/components/sections/EventsSection";
import logo from "@/assets/logo.png";

const contactCards = [
{
  title: "Event Coordinators",
  icon: Phone,
  items: [
  "Chandru – 6382055872",
  "Gayathiri – 8838484319",
  "Mohammed Arif – 9092629484",
  "Rubin – 9080672157",
  "Balaji – 9566086804",
  "Kamalash – 9150474716"]

},
{
  title: "Location",
  icon: MapPin,
  items: [
  "Annapoorana Engineering College",
  "Salem – Namakkal Highway",
  "Periyaseeragapadi, Salem – 636308",
  "Tamil Nadu, India"]

},
{
  title: "Get in Touch",
  icon: Mail,
  items: [
  "info@annapoorana.ac.in",
  "Phone: 0427 – 2477777"]

}];


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
            className="w-72 h-72 sm:w-96 sm:h-96 mx-auto drop-shadow-[0_0_50px_hsla(0,85%,50%,0.7)] brightness-110 hue-rotate-[-10deg] saturate-200"
            style={{ filter: 'brightness(1.1) saturate(2) sepia(1) hue-rotate(-30deg) drop-shadow(0 0 50px hsla(0,85%,50%,0.7))' }} />


          <div className="flex items-center justify-center gap-2 text-primary">
            <Flame className="w-5 h-5 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
              Phoenix Connect The World
            </span>
            <Flame className="w-5 h-5 animate-pulse" />
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-wider text-foreground text-glow-subtle leading-tight lg:text-7xl">
            ZEN-IT-TRIX 1.O
          </h1>

          <p className="font-display text-lg font-bold uppercase tracking-[0.2em] text-primary/70 sm:text-2xl">
            Department of Information Technology
          </p>

          <CountdownTimer />

          <p className="font-display text-lg sm:text-2xl font-bold uppercase tracking-[0.25em] text-primary/80">
            Event Day — 10.03.2026
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a href="#events" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:glow-red-strong hover:scale-105">
              Explore Events
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary/40 hover:text-primary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-wider text-foreground text-glow-subtle">
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
        <div className="mx-auto max-w-5xl text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-wider text-foreground text-glow-subtle">
            Contact Us
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full glow-red mt-4" />
        </div>

        <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card) =>
          <div key={card.title} className="border border-border bg-card/80 backdrop-blur p-6 space-y-4 hover:border-primary/40 hover:glow-red transition-all duration-300 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/20 p-2.5">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">{card.title}</h3>
              </div>
              <div className="space-y-2">
                {card.items.map((item, i) =>
              <p key={i} className="flex items-start gap-2 text-sm text-primary-foreground">
                    <span className="text-primary font-bold mt-0.5">›</span> {item}
                  </p>
              )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="relative z-10 border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Annapoorana Engineering College</h4>
              <p className="text-sm text-primary-foreground">Salem – Namakkal Highway, Tamil Nadu</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">ZEN-IT-TRIX 1.O</h4>
              <p className="text-primary-foreground text-sm">Department of Information Technology</p>
              <p className="text-primary-foreground text-sm">Inaugural Technical Symposium</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Quick Links</h4>
              <div className="flex flex-col gap-1">
                {["Home", "About", "Events", "Contact"].map((l) =>
                <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors w-fit text-primary-foreground text-sm">
                    {l}
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border/30 text-center">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
              © 2025 Annapoorana Engineering College. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>);

};

export default Index;