import { useEffect, useRef } from "react";

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

    // More ash particles for denser effect
    const ASH_COUNT = 200;
    const ashes = Array.from({ length: ASH_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.5 + 0.2,
      vy: Math.random() * 0.6 + 0.1,
      vx: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
      flicker: Math.random() * Math.PI * 2,
    }));

    // Sliding dust particles — horizontal drifters
    const DUST_COUNT = 60;
    const dusts = Array.from({ length: DUST_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.3 + 0.05,
      phase: Math.random() * Math.PI * 2,
    }));

    // Spore clouds
    const SPORE_COUNT = 10;
    const spores = Array.from({ length: SPORE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 250 + 80,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.1,
      opacity: Math.random() * 0.07 + 0.02,
      hue: Math.random() * 20,
    }));

    // Vine tendrils
    const VINE_COUNT = 22;
    const vines = Array.from({ length: VINE_COUNT }, () => ({
      x: Math.random() * w,
      startY: -30 - Math.random() * 50,
      length: Math.random() * h * 0.7 + 150,
      sway: Math.random() * 40 + 15,
      speed: Math.random() * 0.004 + 0.001,
      width: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.1 + 0.03,
    }));

    let ambientFlash = 0;
    let nextFlashTime = Math.random() * 300 + 200;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      time += 1;

      // Ambient lightning flash
      nextFlashTime--;
      if (nextFlashTime <= 0) {
        ambientFlash = 1;
        nextFlashTime = Math.random() * 400 + 250;
      }
      if (ambientFlash > 0) {
        ctx.fillStyle = `hsla(0, 70%, 30%, ${ambientFlash * 0.1})`;
        ctx.fillRect(0, 0, w, h);
        ambientFlash *= 0.85;
        if (ambientFlash < 0.01) ambientFlash = 0;
      }

      // Spore clouds
      for (const s of spores) {
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r);
        grad.addColorStop(0, `hsla(${s.hue}, 70%, 35%, ${s.opacity})`);
        grad.addColorStop(0.4, `hsla(${s.hue}, 60%, 20%, ${s.opacity * 0.6})`);
        grad.addColorStop(1, `hsla(${s.hue}, 50%, 10%, 0)`);
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
        ctx.strokeStyle = `hsla(0, 40%, 25%, ${v.opacity})`;
        ctx.lineWidth = v.width;
        ctx.lineCap = "round";
        for (let i = 0; i <= v.length; i += 3) {
          const waveFactor = Math.sin(i * 0.015 + time * v.speed) * v.sway;
          const secondaryWave = Math.sin(i * 0.04 + time * v.speed * 1.5) * v.sway * 0.3;
          const px = v.x + waveFactor + secondaryWave;
          const py = v.startY + i;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Ash / ember particles
      for (const a of ashes) {
        a.flicker += 0.05;
        const flickerOpacity = a.opacity * (0.6 + 0.4 * Math.sin(a.flicker));
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(15, 50%, 55%, ${flickerOpacity})`;
        ctx.fill();
        a.y -= a.vy;
        a.x += a.vx + Math.sin(time * 0.008 + a.y * 0.01) * 0.15;
        if (a.y < -10) { a.y = h + 10; a.x = Math.random() * w; }
        if (a.x < -10) a.x = w + 10;
        if (a.x > w + 10) a.x = -10;
      }

      // Sliding dust particles
      for (const d of dusts) {
        d.phase += 0.02;
        const dOpacity = d.opacity * (0.5 + 0.5 * Math.sin(d.phase));
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(0, 30%, 70%, ${dOpacity})`;
        ctx.fill();
        d.x += d.vx;
        d.y += d.vy + Math.sin(time * 0.005 + d.x * 0.005) * 0.1;
        if (d.x < -10) d.x = w + 10;
        if (d.x > w + 10) d.x = -10;
        if (d.y < -10) d.y = h + 10;
        if (d.y > h + 10) d.y = -10;
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
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsla(0, 50%, 8%, 0.8) 0%, transparent 40%, transparent 60%, hsla(220, 20%, 4%, 0.5) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 20%, hsla(0, 60%, 6%, 0.5) 60%, hsla(220, 20%, 3%, 0.95) 100%)" }} />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 20%, hsla(0, 60%, 25%, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, hsla(0, 60%, 20%, 0.06) 0%, transparent 50%)" }} />
    </div>
  );
};

export default UpsideDownBackground;
