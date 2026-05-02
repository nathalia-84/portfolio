import { useState } from "react";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-12 flex flex-col gap-16">
        {/* Closing display statement */}
        <div>
          <p className="text-meta mb-6" style={{ color: "var(--text-tertiary)" }}>
            // contato
          </p>
          <h2
            className="font-display italic leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              color: "var(--text-primary)",
            }}
          >
            Vamos <em>construir</em> algo.
          </h2>
        </div>

        {/* Contact links */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <ContactLink
            href="https://github.com/nathalia-84"
            target="_blank"
            label="GITHUB"
          />
          <Dot />
          <ContactLink
            href="https://www.linkedin.com/in/melo-nathalia"
            target="_blank"
            label="LINKEDIN"
          />
          <Dot />
          <EmailLink />
        </div>

        {/* Colophon */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 pt-8"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <span className="font-mono text-xs" style={{ color: "var(--text-tertiary)" }}>
            © 2026 NATHALIA AZEVEDO DE MELO
          </span>
          <span className="font-mono text-xs" style={{ color: "var(--text-tertiary)" }}>
            BUILT WITH REACT · DEPLOYED VIA GH PAGES · ◉ NO TRACKERS
          </span>
        </div>
      </div>
    </footer>
  );
};

const ContactLink = ({ href, label, target }) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    className="font-mono uppercase tracking-widest hover-underline transition-colors duration-150"
    style={{
      fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
      color: "var(--text-secondary)",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
  >
    {label}
  </a>
);

const EmailLink = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="mailto:nathaliaazmelo@gmail.com"
      className="font-mono uppercase tracking-widest hover-underline transition-all duration-200"
      style={{
        fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
        color: hovered ? "var(--text-primary)" : "var(--text-secondary)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      EMAIL
      {hovered && (
        <span
          className="font-mono normal-case tracking-normal ml-2"
          style={{
            fontSize: "0.7rem",
            color: "var(--accent)",
            animation: "fadeIn 0.15s ease",
          }}
        >
          → disponível para conversas em pt/en
        </span>
      )}
    </a>
  );
};

const Dot = () => (
  <span className="font-mono" style={{ color: "var(--border-strong)" }}>
    ·
  </span>
);
