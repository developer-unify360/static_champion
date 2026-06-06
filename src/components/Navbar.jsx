import { useState, useEffect } from "react";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { GiClayBrick } from "react-icons/gi";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Industries", href: "#industries" },
  { label: "Directors", href: "#directors" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const close = () => setOpen(false);

  const bg = scrolled ? "rgba(15,23,42,0.98)" : "rgba(15,23,42,0.88)";

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: bg,
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" onClick={close} className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#d97706,#f59e0b)" }}
            >
              <GiClayBrick className="w-5 h-5" style={{ color: "#0f172a" }} />
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-tight tracking-widest">
                CHAMPION
              </div>
              <div
                className="text-xs leading-tight font-medium"
                style={{ color: "#fbbf24" }}
              >
                MAGNESITE LLP
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{ color: "#cbd5e1" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#fbbf24";
                  e.target.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#cbd5e1";
                  e.target.style.background = "transparent";
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:9229273143"
              className="ml-3 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2"
              style={{
                background: "linear-gradient(135deg,#d97706,#f59e0b)",
                color: "#0f172a",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(135deg,#b45309,#d97706)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(135deg,#d97706,#f59e0b)")
              }
            >
              <FiPhone className="w-4 h-4" /> Call Us
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white rounded-lg"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            className="lg:hidden pb-5 border-t"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="pt-3 space-y-1">
              {NAV.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="block px-4 py-3 text-sm font-medium rounded-lg"
                  style={{ color: "#cbd5e1" }}
                  onMouseEnter={(e) =>
                    (e.target.style.background = "rgba(255,255,255,0.06)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background = "transparent")
                  }
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="px-4 pt-3">
              <a
                href="tel:9229273143"
                className="flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm"
                style={{
                  background: "linear-gradient(135deg,#d97706,#f59e0b)",
                  color: "#0f172a",
                }}
              >
                <FiPhone className="w-4 h-4" /> Call: +91 92292 73143
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
