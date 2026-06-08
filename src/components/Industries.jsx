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
    Icon: GiMetalBar,
  },
  {
    name: "Electric Arc Furnace (EAF)",
    Icon: GiElectric,
  },
  {
    name: "Basic Oxygen Furnace (BOF)",
    Icon: GiFurnace,
  },
  {
    name: "Continuous Casting Tundish",
    Icon: GiSteelClaws,
  },
  {
    name: "Torpedo Ladle",
    Icon: GiTank,
  },
  {
    name: "Rotary Kiln DRI",
    Icon: GiCoalWagon,
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-14 md:py-20"
      style={{ background: "#0f172a" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="w-16 h-1 rounded-full mb-6"
          style={{
            background: "linear-gradient(90deg,#d97706,#f59e0b)",
          }}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-widest"
              style={{
                background: "rgba(217,119,6,0.2)",
                color: "#fbbf24",
              }}
            >
              Industries We Serve
            </span>

            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "'Roboto Slab',serif" }}
            >
              Iron &amp; Steel Industry Solutions
            </h2>

            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "#94a3b8" }}
            >
              Champion Magnesite specializes in complete refractory solutions
              for the Iron &amp; Steel industry. Our products withstand extreme
              temperatures and harsh chemical environments throughout the
              steelmaking process.
            </p>

            {/* Compact 2 Column Applications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {APPS.map(({ name, Icon }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg,#d97706,#f59e0b)",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#0f172a" }} />
                  </div>

                  <span className="text-sm font-medium text-white leading-snug">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src={STEEL_IMG}
                alt="Steel manufacturing plant"
                className="w-full h-80 lg:h-[450px] object-cover"
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
              className="absolute -bottom-5 -left-5 hidden md:block rounded-2xl p-5 shadow-2xl"
              style={{
                background: "linear-gradient(135deg,#d97706,#f59e0b)",
                color: "#0f172a",
                minWidth: "180px",
              }}
            >
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: "'Roboto Slab',serif" }}
              >
                6+
              </div>

              <div className="text-xs font-semibold mt-1">
                Specialized Steel Industry Applications
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
