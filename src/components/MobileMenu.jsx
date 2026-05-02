const NAV_LINKS = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#experience", label: "Experiência" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className="fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: "rgba(12, 11, 10, 0.97)",
        backdropFilter: "blur(20px)",
        pointerEvents: menuOpen ? "auto" : "none",
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
      }}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute font-mono focus:outline-none"
        style={{
          top: "calc(28px + 16px)",
          right: 24,
          color: "var(--text-tertiary)",
          fontSize: "1.25rem",
        }}
        aria-label="Fechar menu"
      >
        ×
      </button>

      {/* Links */}
      <nav className="flex flex-col items-center gap-8">
        {NAV_LINKS.map(({ href, label }, i) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="font-display italic transition-all duration-200"
            style={{
              fontSize: "clamp(2rem, 8vw, 3rem)",
              color: "var(--text-primary)",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(12px)",
              transitionDelay: `${i * 50}ms`,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};
