import CountdownTimer from "@/components/CountdownTimer";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { ArrowRight, Flame } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center pt-20">
        {/* Decorative bg */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        </div>

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
            <Link
              to="/events"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:glow-red-strong hover:scale-105"
            >
              Explore Events <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary/40 hover:text-primary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
