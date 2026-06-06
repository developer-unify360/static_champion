import { FiChevronDown, FiPackage, FiMail } from "react-icons/fi";

const HERO_IMG = "/images/WhatsApp_Image_2026-06-02_at_4.12.05_PM.jpeg";
const HERO_FALLBACK =
  "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920";

const STATS = [
  { v: "12+", l: "Product Categories" },
  { v: "3+", l: "Years of Excellence" },
  { v: "6+", l: "Industry Applications" },
  { v: "100%", l: "Quality Assured" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Industrial steel manufacturing"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = HERO_FALLBACK;
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.94) 0%, rgba(15,23,42,0.78) 55%, rgba(30,41,59,0.88) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(90deg,#d97706,#f59e0b,#d97706)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          style={{
            background: "rgba(217,119,6,0.18)",
            border: "1px solid rgba(217,119,6,0.45)",
            color: "#fbbf24",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#fbbf24" }}
          />
          Established 25 January 2022 &nbsp;·&nbsp; CHAMPA, CHHATTISGARH
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
          style={{
            fontFamily: "'Roboto Slab',serif",
            textShadow: "0 2px 24px rgba(0,0,0,0.5)",
          }}
        >
          Champion Magnesite LLP
        </h1>

        <p
          className="text-xl sm:text-2xl font-semibold mb-4"
          style={{ color: "#fbbf24" }}
        >
          Premium Refractory Products Manufacturer
        </p>

        <p
          className="text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          Delivering high-quality Fire Bricks, High Alumina Bricks, Magnesia
          Carbon Bricks, Castables and specialty refractory solutions for the
          Iron &amp; Steel industry.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="btn-primary text-base px-8 py-3.5 inline-flex items-center gap-2"
          >
            <FiPackage className="w-5 h-5" /> Explore Products
          </a>
          <a
            href="#contact"
            className="btn-outline text-base px-8 py-3.5 inline-flex items-center gap-2"
          >
            <FiMail className="w-5 h-5" /> Contact Us
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {STATS.map((s) => (
            <div
              key={s.l}
              className="rounded-2xl p-5 text-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "#fbbf24", fontFamily: "'Roboto Slab',serif" }}
              >
                {s.v}
              </div>
              <div className="text-xs font-medium" style={{ color: "#64748b" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-xs font-medium" style={{ color: "#64748b" }}>
          Scroll Down
        </span>
        <FiChevronDown className="w-4 h-4" style={{ color: "#64748b" }} />
      </div>
    </section>
  );
}
