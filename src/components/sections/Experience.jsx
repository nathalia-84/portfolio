const EXPERIENCES = [
  {
    period: "FEV 2026 — ATUAL",
    year: "2026",
    company: "IMD/UFRN",
    role: "Pesquisadora & Desenvolvedora",
    description:
      "Pesquisa aplicada em IA e Engenharia de Software com foco em sistemas multiagentes com LLMs. Desenvolvimento em FastAPI, OpenAI SDK e Langfuse para observabilidade e avaliação contínua de pipelines de IA.",
    achievements: [
      "Arquitetura de orquestração multiagente com OpenAI SDK",
      "Pipeline de avaliação e detecção de regressões com Langfuse",
      "Pesquisa aplicada em parceria com laboratório de inovação",
    ],
    stack: ["Python", "FastAPI", "OpenAI SDK", "Langfuse", "LLMs"],
  },
  {
    period: "SET 2025 — ATUAL",
    year: "2025",
    company: "Lojas Quero-Quero",
    role: "Desenvolvedora de Software",
    description:
      "Desenvolvimento full stack com Next.js, NestJS, Flutter e Oracle em ambiente corporativo de grande porte. Arquitetura MVC, APIs REST e práticas Agile em times multidisciplinares.",
    achievements: [
      "Desenvolvimento de features em Next.js e NestJS",
      "Mobile com Flutter + integração com APIs internas",
      "Banco de dados Oracle + Redis em ambiente de produção",
    ],
    stack: ["Next.js", "NestJS", "Flutter", "Oracle", "TypeScript"],
  },
  {
    period: "OUT 2022 — ABR 2025",
    year: "2022",
    company: "Framework Digital",
    role: "Scrum Master & Analista de Projetos",
    description:
      "Gestão de projetos ágeis com times internacionais, refinamento de backlog e comunicação técnica avançada em inglês. Ponte entre times de negócio e desenvolvimento.",
    achievements: [
      "Liderança de times ágeis internacionais (pt/en)",
      "Refinamento de backlog e gestão de stakeholders",
      "Certificações PSPO I e KMP I obtidas no período",
    ],
    stack: ["Scrum", "Kanban", "PSPO I", "KMP I"],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-meta mb-10" style={{ color: "var(--text-tertiary)" }}>
          // experiência
        </p>

        <h2
          className="font-display italic mb-16"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            color: "var(--text-primary)",
          }}
        >
          Trajetória
        </h2>

        <div className="flex flex-col">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceRow
              key={exp.company}
              {...exp}
              isLast={i === EXPERIENCES.length - 1}
            />
          ))}
        </div>

        {/* Education & Certs */}
        <div
          className="mt-20 pt-12 grid grid-cols-1 md:grid-cols-2 gap-10"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <div>
            <p className="text-meta mb-5" style={{ color: "var(--text-tertiary)" }}>
              // formação
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p
                  className="font-body font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Bacharelado em Tecnologia da Informação
                </p>
                <p className="text-meta" style={{ color: "var(--text-tertiary)", textTransform: "none", letterSpacing: 0 }}>
                  UFRN · 2021–2026.2 (em curso)
                </p>
              </div>
              <div>
                <p
                  className="font-body font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Técnico em Desenvolvimento Web
                </p>
                <p className="text-meta" style={{ color: "var(--text-tertiary)", textTransform: "none", letterSpacing: 0 }}>
                  UFRN · concluído 2020
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-meta mb-5" style={{ color: "var(--text-tertiary)" }}>
              // certificações
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p
                  className="font-body font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  PSPO I — Professional Scrum Product Owner
                </p>
                <p className="text-meta" style={{ color: "var(--text-tertiary)", textTransform: "none", letterSpacing: 0 }}>
                  Scrum.org
                </p>
              </div>
              <div>
                <p
                  className="font-body font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  KMP I — Kanban System Design
                </p>
                <p className="text-meta" style={{ color: "var(--text-tertiary)", textTransform: "none", letterSpacing: 0 }}>
                  Kanban University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceRow = ({ period, year, company, role, description, achievements, stack, isLast }) => (
  <div
    className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 relative"
    style={{
      borderBottom: isLast ? "none" : "1px solid var(--border-subtle)",
    }}
  >
    {/* Year watermark */}
    <span
      aria-hidden="true"
      className="font-display italic absolute right-0 top-6 pointer-events-none hidden lg:block"
      style={{
        fontSize: "clamp(6rem, 14vw, 12rem)",
        color: "var(--text-primary)",
        opacity: 0.035,
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      {year}
    </span>

    {/* Period gutter — 2 cols */}
    <div className="md:col-span-2">
      <span
        className="font-mono text-xs uppercase tracking-widest leading-relaxed"
        style={{ color: "var(--text-tertiary)" }}
      >
        {period}
      </span>
    </div>

    {/* Main content — 7 cols */}
    <div className="md:col-span-7 flex flex-col gap-3">
      <div>
        <h3
          className="font-display italic"
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            color: "var(--text-primary)",
            lineHeight: 1.1,
          }}
        >
          {company}
        </h3>
        <p
          className="font-body font-semibold mt-0.5"
          style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}
        >
          {role}
        </p>
      </div>
      <p
        className="font-body leading-relaxed"
        style={{ fontSize: "0.9375rem", color: "var(--text-tertiary)" }}
      >
        {description}
      </p>
      <ul className="flex flex-col gap-1.5">
        {achievements.map((a) => (
          <li
            key={a}
            className="font-body flex items-baseline gap-2"
            style={{ fontSize: "0.875rem", color: "var(--text-tertiary)" }}
          >
            <span
              className="flex-shrink-0 inline-block"
              style={{
                width: 14,
                height: 1,
                background: "var(--accent)",
                marginBottom: 2,
              }}
            />
            {a}
          </li>
        ))}
      </ul>
    </div>

    {/* Stack tags — 3 cols */}
    <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end content-start">
      {stack.map((tag) => (
        <span
          key={tag}
          className="font-mono text-xs px-2 py-0.5"
          style={{
            color: "var(--text-tertiary)",
            border: "1px solid var(--border-subtle)",
            fontSize: "0.7rem",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);
