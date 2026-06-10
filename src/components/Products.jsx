import {
  GiClayBrick,
  GiBrickWall,
  GiBurn,
  GiCrystalBall,
  GiChemicalDrop,
  GiGears,
  GiMaterialsScience,
  GiFurnace,
  GiMetalBar,
  GiFactory,
} from "react-icons/gi";
import { MdOutlineShield, MdThermostat } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

const PRODUCTS = [
  {
    id: 1,
    name: "Fire Bricks & Shapes",
    desc: "High-quality fired bricks and custom shapes for all grades of high-temperature industrial applications.",
    Icon: GiClayBrick,
    color: "#b45309",
    image: "/images/Fire-Bricks-&-Shapes.jpg",
  },
  {
    id: 2,
    name: "High Alumina Bricks – All Grades up to 85%",
    desc: "Superior thermal resistance and mechanical strength across all alumina grades up to 85%.",
    Icon: GiBrickWall,
    color: "#0f172a",
    image: "/images/High-Alumina-Bricks.jpg",
  },
  {
    id: 3,
    name: "Basic Bricks, Magnesia Carbon & AMC",
    desc: "Basic bricks, Magnesia Carbon (MgO-C) and AMC bricks for steel converters, ladles and furnaces.",
    Icon: GiMetalBar,
    color: "#334155",
    image: "/images/BasicBricks-MagnesiaCarbon-&-AMC.jpg"
  },
  {
    id: 4,
    name: "Silicon Carbide Bricks",
    desc: "High-strength silicon carbide bricks offering excellent thermal conductivity and abrasion resistance.",
    Icon: GiCrystalBall,
    color: "#0e7490",
    image: "/images/Silicon-Carbide-Bricks.jpg"
  },
  {
    id: 5,
    name: "Acid Resistance Bricks/Tiles",
    desc: "Chemically resistant bricks and tiles ideal for acid environments and chemical process industries.",
    Icon: GiChemicalDrop,
    color: "#0891b2",
  },
  {
    id: 6,
    name: "Insulation Bricks",
    desc: "Lightweight insulating bricks for energy-efficient thermal insulation in kiln and furnace linings.",
    Icon: MdThermostat,
    color: "#d97706",
  },
  {
    id: 7,
    name: "Borosilicate Blocks",
    desc: "Specialty borosilicate glass-bonded blocks for high thermal-shock resistance in demanding applications.",
    Icon: GiMaterialsScience,
    color: "#7c3aed",
  },
  {
    id: 8,
    name: "Castables, Mortars & Monolithics",
    desc: "Ready-to-use castables, refractory mortars, Resin-based A.R. Mortar and complete monolithic solutions.",
    Icon: GiFurnace,
    color: "#1e3a5f",
  },
  {
    id: 9,
    name: "Ramming, Spray & Gunning Masses",
    desc: "Basic Ramming Mass, Spray Mass and Gunning Masses for patching and complete lining applications.",
    Icon: GiBurn,
    color: "#9f1239",
  },
  {
    id: 10,
    name: "Nozzle Filling Compound",
    desc: "Specialized compound for steel teeming ladle nozzle filling and flow control applications.",
    Icon: GiGears,
    color: "#166534",
  },
  {
    id: 11,
    name: "Tundish Refractories",
    desc: "Complete tundish refractory systems including wear lining, permanent lining and flow control refractories.",
    Icon: GiFactory,
    color: "#1e3a5f",
  },
  {
    id: 12,
    name: "Custom Refractory Products & Shapes",
    desc: "Refractory products manufactured as per customer specification, shapes and special application requirements.",
    Icon: MdOutlineShield,
    color: "#78350f",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="accent-bar mx-auto" />
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Main products of the group are{" "}
            <strong>Fired · Unfired · Unshaped Refractories</strong> — a
            comprehensive range engineered for demanding industrial environments
          </p>
          <div className="flex flex-wrap justify-center gap-3 -mt-6 mb-8">
            {[
              "Fired Refractories",
              "Unfired Refractories",
              "Unshaped Refractories",
              "Flow Control Products",
            ].map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(217,119,6,0.1)",
                  color: "#d97706",
                  border: "1px solid rgba(217,119,6,0.3)",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PRODUCTS.map(({ id, name, desc, Icon, color, image }) => (
            <div
              key={id}
              className="group relative overflow-hidden rounded-2xl min-h-[280px]"
            >
              {/* Background Image */}
              <img
                src={image}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/70"></div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-bold text-white text-sm mb-2 leading-snug">
                  {name}
                </h3>

                <p className="text-sm text-slate-200 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm mb-5" style={{ color: "#64748b" }}>
            Need a specific refractory product or custom specification?
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Request a Quote <FiArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
