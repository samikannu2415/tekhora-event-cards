import Navbar from "@/components/Navbar";
import { Phone, Mail } from "lucide-react";

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

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-wider text-foreground text-glow">
            Contact Us
          </h1>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full glow-red mt-4" />
        </div>

        <div className="mx-auto max-w-3xl grid gap-8 sm:grid-cols-2">
          {/* Technical */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
              Technical Events
            </h2>
            {coordinators.technical.map((c) => (
              <div key={c.event} className="space-y-1">
                <p className="text-sm font-semibold text-foreground">{c.event}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Phone className="w-3 h-3" /> {c.name} – {c.phone}
                </p>
              </div>
            ))}
          </div>

          {/* Non-Technical */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
              Non-Technical Events
            </h2>
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

export default Contact;
