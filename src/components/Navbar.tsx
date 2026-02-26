import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
{ label: "Home", href: "#home" },
{ label: "About", href: "#about" },
{ label: "Events", href: "#events" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="font-display text-lg sm:text-xl font-black uppercase tracking-wider text-primary text-glow">ANNAPOORANA ENGINEERING COLLEGE

        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-1">
          {navLinks.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 text-muted-foreground hover:text-foreground">

              {l.label}
            </a>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open &&
      <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-4 py-4 space-y-2">
          {navLinks.map((l) =>
        <a
          key={l.href}
          href={l.href}
          onClick={() => setOpen(false)}
          className="block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all text-muted-foreground hover:text-foreground hover:bg-card">

              {l.label}
            </a>
        )}
        </div>
      }
    </nav>);

};

export default Navbar;