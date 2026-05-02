import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className="fixed left-0 right-0 z-40"
      style={{
        top: 28, // sits below the 28px StatusStrip
        height: 56,
        backgroundColor: "rgba(12, 11, 10, 0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-mono font-bold"
          style={{ fontSize: "0.9375rem", color: "var(--text-primary)" }}
        >
          nathalia
          <span style={{ color: "var(--accent)" }}>.portfolio</span>
        </a>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block transition-all duration-200"
              style={{
                width: 20,
                height: 1,
                background: "var(--text-secondary)",
              }}
            />
          ))}
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#home", label: "Início" },
            { href: "#about", label: "Sobre" },
            { href: "#experience", label: "Experiência" },
            { href: "#projects", label: "Projetos" },
            { href: "#contact", label: "Contato" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-body font-medium transition-colors duration-150 hover-underline"
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
