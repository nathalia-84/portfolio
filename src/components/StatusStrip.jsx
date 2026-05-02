import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "§HOME" },
  { id: "about", label: "§SOBRE" },
  { id: "experience", label: "§EXPERIÊNCIA" },
  { id: "projects", label: "§PROJETOS" },
  { id: "contact", label: "§CONTATO" },
];

function useClock() {
  const [time, setTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Sao_Paulo",
    });
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "America/Sao_Paulo",
        })
      );
    };
    const msToNextMinute = 60000 - (Date.now() % 60000);
    const timeout = setTimeout(() => {
      tick();
      const interval = setInterval(tick, 60000);
      return () => clearInterval(interval);
    }, msToNextMinute);
    return () => clearTimeout(timeout);
  }, []);

  return time;
}

function useActiveSection() {
  const [active, setActive] = useState("§HOME");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const found = SECTIONS.find((s) => s.id === entry.target.id);
            if (found) setActive(found.label);
          }
        }
      },
      { threshold: 0.35, rootMargin: "-56px 0px 0px 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return active;
}

export const StatusStrip = () => {
  const time = useClock();
  const activeSection = useActiveSection();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-7 border-b flex items-center select-none"
      style={{
        backgroundColor: "var(--bg-base)",
        borderColor: "var(--border-subtle)",
      }}
    >
      {/* Desktop layout */}
      <div className="hidden md:flex items-center w-full px-4 gap-0">
        <span className="text-meta" style={{ color: "var(--text-tertiary)" }}>
          ▸ NATHALIA.PORTFOLIO
        </span>
        <Sep />
        <span className="text-meta" style={{ color: "var(--text-tertiary)" }}>
          v1.0.0
        </span>
        <Sep />
        <span className="text-meta flex items-center gap-1.5" style={{ color: "var(--text-tertiary)" }}>
          <span
            className="animate-pulse-signal rounded-full"
            style={{
              width: 6,
              height: 6,
              background: "var(--signal-live)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          ATIVO
        </span>
        <Sep />
        <span
          className="text-meta"
          style={{ color: "var(--accent)", opacity: 0.85 }}
        >
          {activeSection}
        </span>
        <div className="ml-auto">
          <span className="text-meta" style={{ color: "var(--text-tertiary)" }}>
            {time} BRT
          </span>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden items-center w-full px-3 justify-between">
        <span
          className="text-meta"
          style={{ color: "var(--accent)", opacity: 0.85 }}
        >
          ▸ {activeSection}
        </span>
        <span className="text-meta" style={{ color: "var(--text-tertiary)" }}>
          {time}
        </span>
      </div>
    </div>
  );
};

const Sep = () => (
  <span
    className="text-meta mx-3"
    style={{ color: "var(--border-strong)" }}
  >
    /
  </span>
);
