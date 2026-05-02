import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../data/pinnedRepos.json";

const [featured, ...secondary] = projects.length > 0 ? projects : [];

export const Projects = () => {
  if (projects.length === 0) {
    return (
      <section
        id="projects"
        className="py-24"
        style={{ borderTop: "1px solid var(--border-subtle)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-meta" style={{ color: "var(--text-tertiary)" }}>
            Atualizando projetos...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-meta mb-3" style={{ color: "var(--text-tertiary)" }}>
              // projetos
            </p>
            <h2
              className="font-display italic"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                color: "var(--text-primary)",
              }}
            >
              Trabalhos <em>recentes</em>.
            </h2>
          </div>
          <a
            href="https://github.com/nathalia-84"
            target="_blank"
            rel="noopener noreferrer"
            className="text-meta hidden md:inline-flex items-center gap-2 hover-underline"
            style={{ color: "var(--text-tertiary)" }}
          >
            → ver todos no GitHub
          </a>
        </div>

        {/* Featured project */}
        {featured && <FeaturedCard project={featured} />}

        {/* Secondary grid */}
        {secondary.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-0">
            {secondary.map((project) => (
              <SecondaryCard key={project.name} project={project} />
            ))}
          </div>
        )}

        {/* Mobile — all repos link */}
        <div className="mt-8 md:hidden">
          <a
            href="https://github.com/nathalia-84"
            target="_blank"
            rel="noopener noreferrer"
            className="text-meta hover-underline"
            style={{ color: "var(--text-tertiary)" }}
          >
            → ver todos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

const FeaturedCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 transition-all duration-200"
      style={{
        border: `1px solid ${hovered ? "var(--border-strong)" : "var(--border-subtle)"}`,
        marginBottom: -1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left — metadata */}
      <div className="lg:col-span-7 p-8 flex flex-col gap-5">
        <div className="flex items-center gap-2">
          {project.primaryLanguage && (
            <span
              className="lang-dot"
              style={{ background: project.primaryLanguage.color }}
            />
          )}
          <span className="text-meta" style={{ color: "var(--text-tertiary)" }}>
            featured
          </span>
        </div>

        <div>
          <h3
            className="font-display italic leading-tight"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
              color: "var(--text-primary)",
            }}
          >
            {project.name.replace(/-/g, " ")}
          </h3>
          {project.primaryLanguage && (
            <span
              className="font-mono text-xs"
              style={{ color: "var(--text-tertiary)" }}
            >
              {project.primaryLanguage.name}
            </span>
          )}
        </div>

        <p
          className="font-body leading-relaxed"
          style={{
            fontSize: "clamp(0.9rem, 1.3vw, 1.0625rem)",
            color: "var(--text-secondary)",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2">
          {project.topics.slice(0, 6).map((topic) => (
            <span
              key={topic}
              className="font-mono text-xs px-2 py-0.5"
              style={{
                color: "var(--text-tertiary)",
                border: "1px solid var(--border-subtle)",
                fontSize: "0.7rem",
              }}
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 pt-2" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs hover-underline transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            <FaGithub size={13} />
            GitHub
          </a>
          {project.homepageUrl && (
            <a
              href={project.homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs hover-underline transition-colors"
              style={{ color: "var(--accent)" }}
            >
              <FaExternalLinkAlt size={11} />
              Live
            </a>
          )}
          {project.stargazerCount > 0 && (
            <span
              className="font-mono text-xs ml-auto"
              style={{ color: "var(--text-tertiary)" }}
            >
              ★ {project.stargazerCount}
            </span>
          )}
        </div>
      </div>

      {/* Right — code preview */}
      <div
        className="lg:col-span-5 relative overflow-hidden"
        style={{
          backgroundColor: "var(--bg-surface)",
          borderLeft: "1px solid var(--border-subtle)",
          minHeight: 280,
        }}
      >
        {project.readmePreview ? (
          <CodePreview text={project.readmePreview} />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <FaGithub
              size={48}
              style={{ color: "var(--border-strong)", opacity: 0.5 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const CodePreview = ({ text }) => {
  const lines = text.split("\n").slice(0, 14);
  return (
    <div className="relative h-full w-full overflow-hidden">
      <pre
        className="font-mono p-6 text-xs leading-6 h-full"
        style={{ color: "var(--text-tertiary)", whiteSpace: "pre-wrap" }}
      >
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line || " "}
          </span>
        ))}
      </pre>
      {/* Fade out overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 40%, var(--bg-surface) 100%), linear-gradient(to right, transparent 60%, var(--bg-surface) 100%)",
        }}
      />
    </div>
  );
};

const SecondaryCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="p-6 flex flex-col gap-4 transition-all duration-200 cursor-default"
      style={{
        border: `1px solid ${hovered ? "var(--border-strong)" : "var(--border-subtle)"}`,
        backgroundColor: hovered ? "var(--bg-surface)" : "transparent",
        marginTop: -1,
        marginLeft: -1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Language dot + name */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          {project.primaryLanguage && (
            <span
              className="lang-dot"
              style={{ background: project.primaryLanguage.color }}
            />
          )}
          {project.primaryLanguage && (
            <span className="font-mono text-xs" style={{ color: "var(--text-tertiary)" }}>
              {project.primaryLanguage.name}
            </span>
          )}
        </div>
        <h3
          className="font-mono font-medium"
          style={{
            fontSize: "1.0625rem",
            color: "var(--text-primary)",
            lineHeight: 1.3,
          }}
        >
          {project.name.replace(/-/g, " ")}
        </h3>
      </div>

      {/* Description */}
      <p
        className="font-body leading-relaxed flex-1"
        style={{
          fontSize: "0.875rem",
          color: "var(--text-tertiary)",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {project.description}
      </p>

      {/* Topics */}
      <div className="flex flex-wrap gap-1.5">
        {project.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="font-mono"
            style={{
              fontSize: "0.65rem",
              color: "var(--text-tertiary)",
              border: "1px solid var(--border-subtle)",
              padding: "1px 6px",
            }}
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs hover-underline"
          style={{ color: "var(--text-secondary)" }}
        >
          <FaGithub size={12} />
          GitHub
        </a>
        {project.homepageUrl && (
          <a
            href={project.homepageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs hover-underline"
            style={{ color: "var(--accent)" }}
          >
            <FaExternalLinkAlt size={10} />
            Live
          </a>
        )}
      </div>
    </div>
  );
};
