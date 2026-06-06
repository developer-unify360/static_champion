import { FiPhone, FiMail, FiChevronRight } from "react-icons/fi";
import { GiClayBrick } from "react-icons/gi";

const QUICK = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Industries", href: "#industries" },
  { label: "Directors", href: "#directors" },
  { label: "Contact", href: "#contact" },
];
const PRODS = [
  "Fire Bricks & Shapes",
  "High Alumina Bricks",
  "Magnesia Carbon Bricks",
  "Insulation Bricks",
  "Castables & Mortars",
  "Ramming Mass",
];

export default function Footer() {
  return (
    <footer style={{ background: "#080e1a", color: "#64748b" }}>
      <div
        className="h-1"
        style={{ background: "linear-gradient(90deg,#d97706,#f59e0b,#d97706)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg,#d97706,#f59e0b)",
                }}
              >
                <GiClayBrick className="w-5 h-5" style={{ color: "#0f172a" }} />
              </div>
              <div>
                <div className="text-white font-bold text-sm tracking-widest">
                  CHAMPION
                </div>
                <div className="text-xs" style={{ color: "#fbbf24" }}>
                  MAGNESITE LLP
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Premium manufacturer of refractory products for the Iron &amp;
              Steel industry. Delivering quality since 2022 from Champa,
              Chhattisgarh.
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href="tel:9229273143"
                className="flex items-center gap-2.5 transition-colors hover:text-amber-400"
              >
                <FiPhone
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#d97706" }}
                />
                +91 92292 73143
              </a>
              <a
                href="mailto:championmagnesite2021@gmail.com"
                className="flex items-center gap-2.5 transition-colors hover:text-amber-400 break-all"
              >
                <FiMail
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#d97706" }}
                />
                championmagnesite2021@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm text-white mb-5 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm flex items-center gap-2 transition-colors hover:text-amber-400"
                  >
                    <FiChevronRight
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: "#d97706" }}
                    />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-sm text-white mb-5 uppercase tracking-widest">
              Our Products
            </h4>
            <ul className="space-y-2.5">
              {PRODS.map((p) => (
                <li key={p}>
                  <a
                    href="#products"
                    className="text-sm flex items-center gap-2 transition-colors hover:text-amber-400"
                  >
                    <FiChevronRight
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: "#d97706" }}
                    />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm text-white mb-5 uppercase tracking-widest">
              Company Details
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <div
                  className="text-xs font-semibold mb-1 uppercase tracking-wide"
                  style={{ color: "#475569" }}
                >
                  Office Address
                </div>
                <p className="leading-relaxed">
                  Birra Road, Village Bhwarmal,
                  <br />
                  PO-Rohda, Champa – 495671,
                  <br />
                  Chhattisgarh, India
                </p>
              </div>
              <div>
                <div
                  className="text-xs font-semibold mb-1 uppercase tracking-wide"
                  style={{ color: "#475569" }}
                >
                  GST Number
                </div>
                <p className="font-mono text-xs" style={{ color: "#e2e8f0" }}>
                  22AARFC4002D1Z3
                </p>
              </div>
              <div>
                <div
                  className="text-xs font-semibold mb-1 uppercase tracking-wide"
                  style={{ color: "#475569" }}
                >
                  LLP Number
                </div>
                <p className="font-mono text-xs" style={{ color: "#e2e8f0" }}>
                  AARFC4002D
                </p>
              </div>
              <div>
                <div
                  className="text-xs font-semibold mb-1 uppercase tracking-wide"
                  style={{ color: "#475569" }}
                >
                  Established
                </div>
                <p style={{ color: "#e2e8f0" }}>25 January 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="border-t py-5"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p>&copy; 2026 Champion Magnesite LLP. All rights reserved.</p>
          <p>Champa, Chhattisgarh, India</p>
        </div>
      </div>
    </footer>
  );
}
