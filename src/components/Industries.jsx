import {
  GiSteelClaws,
  GiElectric,
  GiFurnace,
  GiMetalBar,
  GiTank,
  GiCoalWagon,
} from "react-icons/gi";

const STEEL_IMG = "/images/WhatsApp_Image_2026-06-02_at_4.12.05_PM_(2).jpeg";
const STEEL_FALLBACK =
  "https://images.pexels.com/photos/2218959/pexels-photo-2218959.jpeg?auto=compress&cs=tinysrgb&w=800";

const APPS = [
  {
    name: "Steel Teeming Ladle",
    desc: "Complete lining solutions for ladle working lining and safety lining.",
    Icon: GiMetalBar,
  },
  {
    name: "Electric Arc Furnace (EAF)",
    desc: "Roof, sidewall and hearth refractories for EAF steelmaking.",
    Icon: GiElectric,
  },
  {
    name: "Basic Oxygen Furnace (BOF)",
    desc: "Converter lining, taphole and bottom refractories for BOF steelmaking.",
    Icon: GiFurnace,
  },
  {
    name: "Continuous Casting Tundish",
    desc: "Full tundish refractory systems including wear lining and flow control.",
    Icon: GiSteelClaws,
  },
  {
    name: "Torpedo Ladle",
    desc: "High-performance refractories for hot metal transport torpedo ladles.",
    Icon: GiTank,
  },
  {
    name: "Rotary Kiln DRI",
    desc: "Refractories for Direct Reduced Iron rotary kiln processes and calciners.",
    Icon: GiCoalWagon,
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-20 md:py-28"
      style={{ background: "#0f172a" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="w-16 h-1 rounded-full mb-8"
          style={{ background: "linear-gradient(90deg,#d97706,#f59e0b)" }}
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-widest"
              style={{ background: "rgba(217,119,6,0.2)", color: "#fbbf24" }}
            >
              Industries We Serve
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "'Roboto Slab',serif" }}
            >
              Iron &amp; Steel Industry Solutions
            </h2>
            <p
              className="text-base mb-10 leading-relaxed"
              style={{ color: "#64748b" }}
            >
              Champion Magnesite specializes in complete refractory solutions
              for the Iron &amp; Steel industry. Our products withstand extreme
              temperatures and harsh chemical environments in every stage of
              steelmaking.
            </p>

            <div className="space-y-3">
              {APPS.map(({ name, desc, Icon }, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(217,119,6,0.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.04)")
                  }
                >
                  <div
                    className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg,#d97706,#f59e0b)",
                      minWidth: "2.25rem",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#0f172a" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white mb-0.5">
                      {name}
                    </h4>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#64748b" }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src={STEEL_IMG}
                alt="Steel manufacturing plant"
                className="w-full h-96 lg:h-[540px] object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = STEEL_FALLBACK;
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 55%)",
                }}
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl p-6 shadow-2xl"
              style={{
                background: "linear-gradient(135deg,#d97706,#f59e0b)",
                color: "#0f172a",
                minWidth: "190px",
              }}
            >
              <div
                className="text-4xl font-bold mb-0.5"
                style={{ fontFamily: "'Roboto Slab',serif" }}
              >
                6+
              </div>
              <div className="text-xs font-semibold">
                Specialized Steel Industry Applications
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
