import { useState } from "react";

const STACK_CATEGORIES = [
  {
    numeral: "I",
    name: "Frontend & Mobile",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Flutter", "Tailwind CSS", "HTML5"],
  },
  {
    numeral: "II",
    name: "Backend & APIs",
    skills: ["NestJS", "Node.js", "FastAPI", "Python", "REST APIs", "Microsserviços"],
  },
  {
    numeral: "III",
    name: "Bancos de Dados",
    skills: ["PostgreSQL", "MongoDB", "Oracle", "MySQL", "Redis"],
  },
  {
    numeral: "IV",
    name: "IA & LLMs",
    skills: ["OpenAI SDK", "Langfuse", "Sistemas Multiagentes", "Engenharia de Prompts"],
  },
  {
    numeral: "V",
    name: "DevOps & Infra",
    skills: ["Docker", "Linux", "Git & GitHub", "WSL"],
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p className="text-meta mb-10" style={{ color: "var(--text-tertiary)" }}>
          // sobre
        </p>

        {/* Main grid — 5/7 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — portrait (5 cols) */}
          <div className="lg:col-span-5">
            <div
              className="relative"
              style={{
                transform: "rotate(-1.5deg)",
                transformOrigin: "center",
              }}
            >
              {/* Photo or placeholder */}
              <div
                className="relative overflow-hidden"
                style={{
                  border: "1px solid var(--border-strong)",
                  aspectRatio: "3/4",
                  backgroundColor: "var(--bg-surface)",
                }}
              >
                <img
                  src="/portfolio/about.jpg"
                  alt="Nathalia Azevedo de Melo"
                  className="w-full h-full object-cover about-portrait"
                  style={{
                    filter: "contrast(1.02) saturate(0.88)",
                    mixBlendMode: "normal",
                  }}
                  onError={(e) => {
                    // Fallback: SVG placeholder portrait
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback placeholder */}
                <div
                  className="absolute inset-0 items-center justify-center font-mono text-xs"
                  style={{
                    display: "none",
                    color: "var(--text-tertiary)",
                    backgroundColor: "var(--bg-surface)",
                  }}
                >
                  <div className="text-center p-8">
                    <div
                      className="mb-4"
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        border: "1px solid var(--border-strong)",
                        margin: "0 auto",
                      }}
                    />
                    <p>foto em breve</p>
                  </div>
                </div>
              </div>
              {/* Caption */}
              <p
                className="text-meta mt-3"
                style={{ color: "var(--text-tertiary)", transform: "rotate(0deg)" }}
              >
                // natal, br · 2026
              </p>
            </div>
          </div>

          {/* RIGHT — prose (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <p
                className="font-body leading-relaxed"
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
                  color: "var(--text-secondary)",
                }}
              >
                Engenheira de Software full stack com experiência prática em
                desenvolvimento backend e frontend com TypeScript, JavaScript,
                React, Next.js e NestJS. Construo APIs REST, integro bancos de
                dados relacionais e não-relacionais e desenvolvo aplicações em
                ambientes Linux com Docker.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
                  color: "var(--text-secondary)",
                }}
              >
                Atuo também em{" "}
                <em className="font-display italic" style={{ color: "var(--text-primary)" }}>
                  IA aplicada
                </em>
                , desenvolvendo{" "}
                <em className="font-display italic" style={{ color: "var(--text-primary)" }}>
                  sistemas multiagentes
                </em>{" "}
                com LLMs — FastAPI, OpenAI SDK e Langfuse — em projeto de pesquisa
                em parceria com a Dell. Formação prévia como Scrum Master agrega
                visão de produto e comunicação técnica. Inglês avançado.
              </p>
            </div>

            {/* Quick facts strip */}
            <div
              className="flex flex-wrap gap-x-6 gap-y-2 pt-4"
              style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
              {[
                "📍 Natal, RN",
                "🌐 Inglês avançado · Espanhol intermediário",
                "🎓 BTI / UFRN · 2021–2026.2",
                "☕ café é stack",
              ].map((fact) => (
                <span
                  key={fact}
                  className="text-meta"
                  style={{ color: "var(--text-tertiary)", textTransform: "none", letterSpacing: 0 }}
                >
                  {fact}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial Stack TOC */}
        <div className="mt-20 md:mt-28">
          <h2
            className="font-display italic mb-8"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              color: "var(--text-primary)",
            }}
          >
            Stack
          </h2>
          <div className="flex flex-col">
            {STACK_CATEGORIES.map((cat, i) => (
              <StackRow key={cat.numeral} {...cat} isLast={i === STACK_CATEGORIES.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StackRow = ({ numeral, name, skills, isLast }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex items-baseline gap-4 md:gap-8 py-4 group cursor-default transition-colors duration-150"
      style={{
        borderBottom: isLast ? "none" : "1px solid var(--border-subtle)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Roman numeral */}
      <span
        className="font-mono text-xs uppercase tracking-widest flex-shrink-0 w-6"
        style={{ color: "var(--text-tertiary)" }}
      >
        {numeral}
      </span>

      {/* Category name */}
      <span
        className="font-display italic flex-shrink-0 transition-colors duration-150"
        style={{
          fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
          color: hovered ? "var(--accent)" : "var(--text-primary)",
          minWidth: "clamp(160px, 25vw, 240px)",
        }}
      >
        {name}
      </span>

      {/* Skills list */}
      <span
        className="font-mono text-xs leading-relaxed hidden sm:block"
        style={{ color: hovered ? "var(--text-secondary)" : "var(--text-tertiary)" }}
      >
        {skills.join(" · ")}
      </span>
    </div>
  );
};

