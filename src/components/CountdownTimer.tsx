import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-03-10T09:00:00").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = Math.max(TARGET_DATE - Date.now(), 0);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-5 justify-center">
      {units.map((u) => (
        <div
          key={u.label}
          className="flex flex-col items-center rounded-xl border border-primary/30 bg-card/80 backdrop-blur px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[90px] glow-red"
        >
          <span className="font-display text-2xl sm:text-4xl font-black text-primary text-glow">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-1">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
