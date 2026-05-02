import { useState } from "react";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { StatusStrip } from "./components/StatusStrip";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Footer } from "./components/sections/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {!loading && <LoadingScreen onComplete={() => setLoading(true)} />}
      <div
        style={{
          opacity: loading ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <StatusStrip />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main style={{ paddingTop: "84px" /* 28px strip + 56px nav */ }}>
          <Home />
          <About />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
