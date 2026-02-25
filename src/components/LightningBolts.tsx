import { useEffect, useState } from "react";

/**
 * Generates random lightning bolt SVG paths that strike across the card.
 * Multiple jagged bolt lines rendered as an overlay.
 */
const LightningBolts = ({ active }: { active: boolean }) => {
  const [bolts, setBolts] = useState<string[]>([]);

  useEffect(() => {
    if (!active) {
      setBolts([]);
      return;
    }

    // Generate 3-5 random bolt paths
    const count = 3 + Math.floor(Math.random() * 3);
    const newBolts: string[] = [];

    for (let b = 0; b < count; b++) {
      const startX = Math.random() * 100;
      const startY = 0;
      let x = startX;
      let y = startY;
      let path = `M ${x} ${y}`;

      // Main bolt segments
      const segments = 6 + Math.floor(Math.random() * 6);
      for (let i = 0; i < segments; i++) {
        x += (Math.random() - 0.5) * 35;
        y += (100 / segments) * (0.7 + Math.random() * 0.6);
        x = Math.max(5, Math.min(95, x));
        path += ` L ${x} ${y}`;

        // Branch with 30% chance
        if (Math.random() < 0.3) {
          let bx = x;
          let by = y;
          let branch = `M ${bx} ${by}`;
          const branchSegs = 2 + Math.floor(Math.random() * 3);
          for (let j = 0; j < branchSegs; j++) {
            bx += (Math.random() - 0.5) * 25;
            by += (100 / segments) * (0.3 + Math.random() * 0.4);
            bx = Math.max(0, Math.min(100, bx));
            branch += ` L ${bx} ${by}`;
          }
          newBolts.push(branch);
        }
      }
      newBolts.push(path);
    }

    setBolts(newBolts);
  }, [active]);

  if (!active || bolts.length === 0) return null;

  return (
    <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-xl">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full lightning-bolts-svg"
      >
        <defs>
          <filter id="bolt-glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="bolt-glow-wide">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Wide glow layer */}
        {bolts.map((d, i) => (
          <path
            key={`glow-${i}`}
            d={d}
            fill="none"
            stroke="hsla(210, 100%, 85%, 0.3)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#bolt-glow-wide)"
            className="lightning-bolt-path"
            style={{ animationDelay: `${i * 0.04}s` }}
          />
        ))}

        {/* Core bolt layer */}
        {bolts.map((d, i) => (
          <path
            key={`core-${i}`}
            d={d}
            fill="none"
            stroke="hsla(0, 0%, 100%, 0.95)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#bolt-glow)"
            className="lightning-bolt-path"
            style={{ animationDelay: `${i * 0.04}s` }}
          />
        ))}

        {/* Hot center */}
        {bolts.map((d, i) => (
          <path
            key={`hot-${i}`}
            d={d}
            fill="none"
            stroke="hsla(200, 100%, 95%, 1)"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lightning-bolt-path"
            style={{ animationDelay: `${i * 0.04}s` }}
          />
        ))}
      </svg>

      {/* Flash overlay on card */}
      <div className="absolute inset-0 bg-white/20 lightning-flash rounded-xl" />
    </div>
  );
};

export default LightningBolts;
