import Navbar from "@/components/Navbar";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

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

const Register = () => {
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

    // TODO: Connect to Google Sheets via backend
    // For now, simulate submission
    await new Promise((r) => setTimeout(r, 1200));

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="pt-28 pb-16 px-4 flex flex-col items-center justify-center min-h-[80vh]">
          <div className="text-center space-y-4 max-w-md">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <h2 className="font-display text-2xl font-black uppercase tracking-wider text-foreground text-glow">
              Registered!
            </h2>
            <p className="text-muted-foreground text-sm">
              Thank you for registering for Zen-IT-Trix 1.0. We'll reach out to you soon with more details.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center mb-10">
          <h1 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-wider text-foreground text-glow">
            Registration
          </h1>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full glow-red mt-4" />
          <p className="mt-4 text-muted-foreground text-sm">
            Register for your preferred event at Zen-IT-Trix 1.0
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-5">
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
              Full Name *
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              maxLength={100}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
              Email *
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              maxLength={255}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
              Phone Number *
            </label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              maxLength={15}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
              placeholder="Your phone number"
            />
          </div>

          {/* College */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
              College Name *
            </label>
            <input
              name="college"
              value={form.college}
              onChange={handleChange}
              required
              maxLength={200}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
              placeholder="Your college name"
            />
          </div>

          {/* Event */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
              Select Event *
            </label>
            <select
              name="event"
              value={form.event}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
            >
              <option value="">Choose an event</option>
              {eventOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* Team Members */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
              Team Members (if any)
            </label>
            <textarea
              name="teamMembers"
              value={form.teamMembers}
              onChange={handleChange as any}
              maxLength={500}
              rows={3}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
              placeholder="Enter team member names (one per line)"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:glow-red-strong hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Register Now"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Register;
