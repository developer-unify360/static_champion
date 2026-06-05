const PRODUCTS = [
  { id:1,  name:'Fire Bricks & Shapes',                desc:'High-quality fired bricks and custom shapes for all grades of high-temperature industrial applications.',           icon:'🧱', color:'#b45309' },
  { id:2,  name:'High Alumina Bricks – All Grades up to 85%', desc:'Superior thermal resistance and mechanical strength across all alumina grades up to 85%.',                  icon:'🏗️', color:'#0f172a' },
  { id:3,  name:'Basic Bricks, Magnesia Carbon & AMC', desc:'Basic bricks, Magnesia Carbon (MgO-C) and AMC bricks for steel converters, ladles and furnaces.',                 icon:'⚫', color:'#334155' },
  { id:4,  name:'Silicon Carbide Bricks',              desc:'High-strength silicon carbide bricks offering excellent thermal conductivity and abrasion resistance.',             icon:'💎', color:'#0e7490' },
  { id:5,  name:'Acid Resistance Bricks/Tiles',        desc:'Chemically resistant bricks and tiles ideal for acid environments and chemical process industries.',                icon:'🛡️', color:'#0891b2' },
  { id:6,  name:'Insulation Bricks',                   desc:'Lightweight insulating bricks for energy-efficient thermal insulation in kiln and furnace linings.',                icon:'🔆', color:'#d97706' },
  { id:7,  name:'Borosilicate Blocks',                 desc:'Specialty borosilicate glass-bonded blocks for high thermal-shock resistance in demanding applications.',           icon:'🔷', color:'#7c3aed' },
  { id:8,  name:'Castables, Mortars & Monolithics',    desc:'Ready-to-use castables, refractory mortars, Resin-based A.R. Mortar and complete monolithic solutions.',          icon:'🪣', color:'#1e3a5f' },
  { id:9,  name:'Ramming, Spray & Gunning Masses',     desc:'Basic Ramming Mass, Spray Mass and Gunning Masses for patching and complete lining applications.',                 icon:'💥', color:'#9f1239' },
  { id:10, name:'Nozzle Filling Compound',             desc:'Specialized compound for steel teeming ladle nozzle filling and flow control applications.',                       icon:'🔩', color:'#166534' },
  { id:11, name:'Tundish Refractories',                desc:'Complete tundish refractory systems including wear lining, permanent lining and flow control refractories.',        icon:'🏭', color:'#1e3a5f' },
  { id:12, name:'Custom Refractory Products & Shapes', desc:'Refractory products manufactured as per customer specification, shapes and special application requirements.',     icon:'⚙️', color:'#78350f' },
]

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">
          <div className="accent-bar mx-auto" />
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Main products of the group are <strong>Fired · Unfired · Unshaped Refractories</strong> —
            a comprehensive range engineered for demanding industrial environments
          </p>
          {/* Category badges */}
          <div className="flex flex-wrap justify-center gap-3 -mt-6 mb-8">
            {['Fired Refractories','Unfired Refractories','Unshaped Refractories','Flow Control Products'].map(cat => (
              <span key={cat} className="px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(217,119,6,0.1)', color: '#d97706', border: '1px solid rgba(217,119,6,0.3)' }}>
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PRODUCTS.map(p => (
            <div key={p.id} className="card-hover rounded-2xl p-6 bg-white"
              style={{ border: '1px solid #e2e8f0', boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}>
              {/* Amber top bar */}
              <div className="h-1 -mx-6 -mt-6 mb-6 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg,${p.color}55,${p.color}22)` }} />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background: `${p.color}14` }}>
                {p.icon}
              </div>
              <h3 className="font-bold text-sm mb-2 leading-snug" style={{ color: p.color }}>{p.name}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm mb-5" style={{ color: '#64748b' }}>
            Need a specific refractory product or custom specification?
          </p>
          <a href="#contact" className="btn-primary">Request a Quote</a>
        </div>
      </div>
    </section>
  )
}
