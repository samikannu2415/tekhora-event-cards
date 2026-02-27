import CountdownTimer from "@/components/CountdownTimer";
import Navbar from "@/components/Navbar";
import UpsideDownBackground from "@/components/UpsideDownBackground";
import { Flame, Phone, MapPin, Mail, Users, GraduationCap } from "lucide-react";
import EventsSection from "@/components/sections/EventsSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import logo from "@/assets/logo.png";

/* ═══════ CONTACT DATA FROM COORDINATORS DOC ═══════ */
const facultyCoordinators = [
  { name: "Mrs. A. Saranya Durai M.E, Ph.D", role: "Assistant Professor" },
  { name: "Mrs. R. Suriya M.E", role: "Assistant Professor" },
  { name: "Mrs. P. Nandini M.E, B.Ed", role: "Assistant Professor" },
  { name: "Mrs. M. Renuka M.E", role: "Assistant Professor" },
  { name: "Mr. R. Prakash M.Tech", role: "Assistant Professor" },
  { name: "Mr. P. Dhanarasan M.E", role: "Assistant Professor" },
  { name: "Mr. R. Krishnan M.E", role: "Assistant Professor" },
];

const technicalCoordinators = [
  { event: "Insight-Ignite", name: "Chandru S", phone: "6382055872" },
  { event: "Logoverse", name: "Gayathiri A", phone: "8838484319" },
  { event: "Prompt-A-Thon", name: "Mohammed Arif S", phone: "9092629484" },
  { event: "Syntax Surgery", name: "Rubin S", phone: "9080672157" },
];

const nonTechCoordinators = [
  { event: "Adzap", name: "Balaji M", phone: "9566086804" },
  { event: "FF Showdown", name: "Kamalesh P", phone: "9150474716" },
  { event: "Mystery Lyrics", name: "Deva Dharshini S", phone: "7867012967" },
  { event: "Propezz", name: "Dharmaraj E", phone: "9865718082" },
  { event: "Snap-Shot", name: "Prithivi Raj P", phone: "7639268509" },
];

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
            className="w-80 h-80 sm:w-[28rem] sm:h-[28rem] mx-auto drop-shadow-[0_0_60px_hsla(0,85%,50%,0.7)]"
            style={{ filter: 'brightness(1.2) saturate(2.5) sepia(1) hue-rotate(-30deg) contrast(1.1) drop-shadow(0 0 60px hsla(0,85%,50%,0.7))' }}
          />

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

      {/* ═══════ SCHEDULE ═══════ */}
      <ScheduleSection />

      {/* ═══════ CONTACT ═══════ */}
      <section id="contact" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-wider text-foreground text-glow-subtle">
            Contact Us
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full glow-red mt-4" />
        </div>

        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* HOD Card */}
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur p-6 space-y-4 hover:border-primary/40 hover:glow-red transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/20 p-2.5">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">HOD / IT</h3>
            </div>
            <p className="text-sm text-primary-foreground font-semibold">Dr. S. Venkatesan M.E, Ph.D</p>
          </div>

          {/* Faculty Coordinators */}
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur p-6 space-y-4 hover:border-primary/40 hover:glow-red transition-all duration-300 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/20 p-2.5">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Faculty Coordinators</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {facultyCoordinators.map((f) => (
                <p key={f.name} className="text-sm text-primary-foreground flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">›</span>
                  <span>{f.name} <span className="text-muted-foreground text-xs">— {f.role}</span></span>
                </p>
              ))}
            </div>
          </div>

          {/* Student Coordinator */}
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur p-6 space-y-4 hover:border-primary/40 hover:glow-red transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/20 p-2.5">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Student Coordinator</h3>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-primary-foreground font-semibold">Hassan Ali S</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Phone className="w-3 h-3" /> 8124407875
              </p>
            </div>
          </div>

          {/* Technical Event Coordinators */}
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur p-6 space-y-4 hover:border-primary/40 hover:glow-red transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/20 p-2.5">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Technical Events</h3>
            </div>
            <div className="space-y-2">
              {technicalCoordinators.map((c) => (
                <div key={c.event}>
                  <p className="text-xs font-semibold text-foreground">{c.event}</p>
                  <p className="text-xs text-muted-foreground">{c.name} – {c.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Technical Event Coordinators */}
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur p-6 space-y-4 hover:border-primary/40 hover:glow-red transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/20 p-2.5">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Non-Technical Events</h3>
            </div>
            <div className="space-y-2">
              {nonTechCoordinators.map((c) => (
                <div key={c.event}>
                  <p className="text-xs font-semibold text-foreground">{c.event}</p>
                  <p className="text-xs text-muted-foreground">{c.name} – {c.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location Card */}
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur p-6 space-y-4 hover:border-primary/40 hover:glow-red transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/20 p-2.5">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Location</h3>
            </div>
            <div className="space-y-1 text-sm text-primary-foreground">
              <p>Annapoorana Engineering College</p>
              <p className="text-xs text-muted-foreground">Salem – Namakkal Highway</p>
              <p className="text-xs text-muted-foreground">Periyaseeragapadi, Salem – 636308</p>
              <p className="text-xs text-muted-foreground">Tamil Nadu, India</p>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur p-6 space-y-4 hover:border-primary/40 hover:glow-red transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/20 p-2.5">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">Get in Touch</h3>
            </div>
            <div className="space-y-1 text-sm text-primary-foreground">
              <p>info@annapoorana.ac.in</p>
              <p className="text-xs text-muted-foreground">Phone: 0427 – 2477777</p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur overflow-hidden hover:border-primary/40 hover:glow-red transition-all duration-300 md:col-span-2 lg:col-span-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.0!2d78.1!3d11.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1a3a4c1a7c5%3A0x91b0b1d0be7e5e8a!2sAnnapoorana%20Engineering%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Annapoorana Engineering College Location"
            />
          </div>
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
                {["Home", "About", "Events", "Schedule", "Contact"].map((l) => (
                  <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors w-fit text-primary-foreground text-sm hover:text-primary">
                    {l}
                  </a>
                ))}
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
    </div>
  );
};

export default Index;
