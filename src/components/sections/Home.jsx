import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaLinkedin, FaArrowDown } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export const Home = () => {
  const svgRef = useRef(null);
  const [pathLength, setPathLength] = useState(400);

  useEffect(() => {
    if (svgRef.current) {
      const path = svgRef.current.querySelector("path");
      if (path) setPathLength(path.getTotalLength());
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ paddingTop: "calc(28px + 64px)", paddingBottom: "80px" }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
        {/* Main grid — asymmetric 8/4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT — 8 cols */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Tagline mono */}
            <motion.p
              className="text-meta"
              style={{ color: "var(--text-tertiary)" }}
              {...fadeUp(0.08)}
            >
              // engineer · researcher · builder · BR
            </motion.p>

            {/* Display name */}
            <motion.div {...fadeUp(0.16)}>
              <h1
                className="font-display leading-[0.9] tracking-tight"
                style={{
                  fontSize: "clamp(3.5rem, 10vw, 9rem)",
                  color: "var(--text-primary)",
                }}
              >
                Olá, eu sou{" "}
                <span className="relative inline-block italic">
                  Nathalia
                  {/* Animated SVG underline */}
                  <svg
                    ref={svgRef}
                    aria-hidden="true"
                    className="absolute left-0 w-full overflow-visible"
                    style={{ bottom: "-0.12em", height: "0.12em" }}
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0,4 Q 50%,0 100%,4"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2.5"
                      vectorEffect="non-scaling-stroke"
                      style={{
                        strokeDasharray: pathLength,
                        strokeDashoffset: pathLength,
                        animation: `draw-underline 0.7s 0.65s ease-out forwards`,
                      }}
                    />
                  </svg>
                </span>
                .
              </h1>
            </motion.div>

            {/* Sub paragraph */}
            <motion.p
              className="font-body leading-relaxed max-w-xl"
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                color: "var(--text-secondary)",
              }}
              {...fadeUp(0.44)}
            >
              Construo software full stack, mobile e sistemas com IA aplicada.
              TypeScript · Python · Dart · React · Flutter · NestJS · FastAPI.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              {...fadeUp(0.6)}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 font-body font-medium text-sm transition-all duration-200"
                style={{
                  border: "1px solid var(--accent)",
                  color: "var(--accent)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--bg-base)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--accent)";
                }}
              >
                Ver projetos
              </a>
              <a
                href="https://www.linkedin.com/in/melo-nathalia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 font-body font-medium text-sm transition-all duration-200"
                style={{
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-strong)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                <FaLinkedin size={14} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* RIGHT — 4 cols — field card */}
          <motion.div
            className="lg:col-span-4"
            {...fadeUp(0.48)}
          >
            <div
              className="font-mono p-5 flex flex-col gap-3"
              style={{
                border: "1px solid var(--border-subtle)",
                fontSize: "0.78rem",
              }}
            >
              <FieldRow label="LOCATION" value="Natal, RN · Brasil" />
              <FieldRow label="FOCUS   " value="IA aplicada · multi-agent" />
              <FieldRow label="STACK   " value="TS · Python · Dart" />
              <FieldRow
                label="STATUS  "
                value="open to roles 2026.2+"
                valueStyle={{ color: "var(--signal-live)" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="flex items-center gap-2 mt-16"
          style={{ color: "var(--text-tertiary)" }}
          {...fadeUp(0.8)}
        >
          <span className="text-meta">scroll</span>
          <FaArrowDown size={10} className="animate-scroll-cue" />
        </motion.div>
      </div>
    </section>
  );
};

const FieldRow = ({ label, value, valueStyle = {} }) => (
  <div className="flex items-baseline gap-2" style={{ color: "var(--text-tertiary)" }}>
    <span style={{ minWidth: "5.5rem", flexShrink: 0 }}>{label}</span>
    <span style={{ color: "var(--text-secondary)", ...valueStyle }}>{value}</span>
  </div>
);
