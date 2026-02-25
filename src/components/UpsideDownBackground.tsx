import { useEffect, useRef } from "react";

/**
 * Stranger-Things-style "Upside Down" animated background.
 * Floating ash particles + drifting red spore clouds.
 */
const UpsideDownBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    // Ash particles
    const ASH_COUNT = 80;
    const ashes = Array.from({ length: ASH_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.5 + 0.5,
      vy: Math.random() * 0.4 + 0.1,
      vx: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    // Spore clouds
    const SPORE_COUNT = 6;
    const spores = Array.from({ length: SPORE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 150 + 80,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.1,
      opacity: Math.random() * 0.04 + 0.02,
    }));

    // Vine tendrils (static decorative lines)
    const VINE_COUNT = 12;
    const vines = Array.from({ length: VINE_COUNT }, () => ({
      x: Math.random() * w,
      startY: -20,
      length: Math.random() * h * 0.6 + 100,
      sway: Math.random() * 30 + 10,
      speed: Math.random() * 0.005 + 0.002,
      width: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.12 + 0.04,
    }));

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      time += 1;

      // Spore clouds
      for (const s of spores) {
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r);
        grad.addColorStop(0, `hsla(0, 70%, 40%, ${s.opacity})`);
        grad.addColorStop(0.6, `hsla(0, 60%, 25%, ${s.opacity * 0.5})`);
        grad.addColorStop(1, `hsla(0, 50%, 15%, 0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(s.x - s.r, s.y - s.r, s.r * 2, s.r * 2);

        s.x += s.vx;
        s.y += s.vy;
        if (s.x < -s.r) s.x = w + s.r;
        if (s.x > w + s.r) s.x = -s.r;
        if (s.y < -s.r) s.y = h + s.r;
        if (s.y > h + s.r) s.y = -s.r;
      }

      // Vine tendrils
      for (const v of vines) {
        ctx.beginPath();
        ctx.strokeStyle = `hsla(0, 50%, 30%, ${v.opacity})`;
        ctx.lineWidth = v.width;
        for (let i = 0; i <= v.length; i += 4) {
          const px = v.x + Math.sin(i * 0.02 + time * v.speed) * v.sway;
          const py = v.startY + i;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Ash particles
      for (const a of ashes) {
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(20, 30%, 60%, ${a.opacity})`;
        ctx.fill();

        a.y -= a.vy;
        a.x += a.vx + Math.sin(time * 0.01 + a.y) * 0.1;
        if (a.y < -10) {
          a.y = h + 10;
          a.x = Math.random() * w;
        }
        if (a.x < -10) a.x = w + 10;
        if (a.x > w + 10) a.x = -10;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Dark foggy overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
      {/* Reddish vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, hsla(0, 60%, 8%, 0.6) 70%, hsla(220, 20%, 4%, 0.9) 100%)",
        }}
      />
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />
    </div>
  );
};

export default UpsideDownBackground;
