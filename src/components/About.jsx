const FACTORY_IMG = '/images/WhatsApp_Image_2026-06-02_at_4.12.05_PM_(1).jpeg'
const FACTORY_FALLBACK = 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800'

const INFO = [
  { icon: '📅', label: 'Established',    value: '25 January 2022' },
  { icon: '📍', label: 'Location',       value: 'Champa, Chhattisgarh' },
  { icon: '🏭', label: 'Specialization', value: 'Refractory Products' },
  { icon: '⚙️', label: 'GST No.',        value: '22AARFC4002D1Z3' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28" style={{ background: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">
          <div className="accent-bar mx-auto" />
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A trusted manufacturer of premium refractory products serving the Iron &amp; Steel industry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ background: 'rgba(217,119,6,0.1)', color: '#d97706' }}>
              Company Profile
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-snug" style={{ color: '#0f172a' }}>
              From Modest Beginnings to a Modern Manufacturing Works
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#475569' }}>
              Champion Magnesite is a manufacturer of refractory products. From a very modest
              beginning, this unit has now grown to a large modern works manufacturing all grades
              of high-quality refractory products for industrial applications.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#475569' }}>
              We manufacture Firebricks &amp; Shapes, Magnesite Bricks, Magnesia Carbon Bricks,
              Silicon Carbide Bricks, High Alumina Bricks, Acid &amp; Heat Resistance Bricks,
              Insulation Bricks, Borosilicate Blocks, Castables, Mortars, Resin-based A.R. Mortar,
              Spray/Gunning Mixes, Ramming Mass, Flow Control Refractories &amp; other Special
              Refractory Products.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {INFO.map(i => (
                <div key={i.label} className="p-4 rounded-xl bg-white" style={{ border: '1px solid #e2e8f0' }}>
                  <div className="text-xl mb-2">{i.icon}</div>
                  <div className="text-xs font-medium mb-0.5" style={{ color: '#94a3b8' }}>{i.label}</div>
                  <div className="text-sm font-semibold" style={{ color: '#1e293b' }}>{i.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image + cards */}
          <div className="space-y-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={FACTORY_IMG}
                alt="Manufacturing facility"
                className="w-full h-72 object-cover"
                onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = FACTORY_FALLBACK }}
              />
              {/* Amber top strip */}
              <div className="absolute top-0 left-0 right-0 h-1"
                style={{ background: 'linear-gradient(90deg,#d97706,#f59e0b)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: 'linear-gradient(transparent,rgba(15,23,42,0.85))' }}>
                <p className="text-white font-semibold">Modern Manufacturing Facility</p>
                <p className="text-sm" style={{ color: '#94a3b8' }}>State-of-the-art production infrastructure</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl" style={{ background: '#0f172a' }}>
                <div className="text-xl mb-3">🎯</div>
                <h4 className="font-bold text-sm text-white mb-2">Our Vision</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>
                  To be the leading refractory manufacturer known for quality, innovation and reliability.
                </p>
              </div>
              <div className="p-5 rounded-xl"
                style={{ background: 'linear-gradient(135deg,#d97706,#f59e0b)' }}>
                <div className="text-xl mb-3">🚀</div>
                <h4 className="font-bold text-sm mb-2" style={{ color: '#0f172a' }}>Our Mission</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(15,23,42,0.75)' }}>
                  Deliver superior refractory solutions that enhance efficiency and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
