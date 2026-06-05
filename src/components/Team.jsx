const DIRS = [
  {
    name:          'Prateek Agrawal',
    role:          'Director – Manufacturing & Marketing',
    qualification: 'B.E. (Mechanical)',
    experience:    '22+ Years',
    bio:           'Over 22 years in Manufacturing & Marketing Strategy. Served as Director across 3 companies in the refractory and industrial sector.',
    img:           '/images/WhatsApp_Image_2026-06-02_at_4.12.05_PM.jpeg',
    fallback:      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name:          'Praveer Agrawal',
    role:          'Director – Operations & Marketing',
    qualification: 'B.Com (Graduate)',
    experience:    '19+ Years',
    bio:           'Over 19 years of expertise in Manufacturing & Marketing Strategy. Directed operations in 3 companies with strong commercial acumen.',
    img:           '/images/WhatsApp_Image_2026-06-02_at_4.12.05_PM_(1).jpeg',
    fallback:      'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name:          'Niket Agrawal',
    role:          'Director – Technology & Systems',
    qualification: 'B.E. (Information Technology)',
    experience:    '17+ Years',
    bio:           'Over 17 years in IT and business management. Served as Director in 3 companies, bridging technology and industrial operations.',
    img:           '/images/WhatsApp_Image_2026-06-02_at_4.12.06_PM.jpeg',
    fallback:      'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
]

export default function Team() {
  return (
    <section id="directors" className="py-20 md:py-28" style={{ background: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">
          <div className="accent-bar mx-auto" />
          <h2 className="section-title">Our Directors</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Led by experienced professionals with decades of combined expertise in manufacturing,
            marketing and technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {DIRS.map(d => (
            <div key={d.name} className="card-hover rounded-2xl overflow-hidden bg-white"
              style={{ border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>

              {/* Amber top bar */}
              <div className="h-1" style={{ background: 'linear-gradient(90deg,#d97706,#f59e0b)' }} />

              {/* Photo */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover object-top"
                  onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = d.fallback }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(15,23,42,0.55))' }} />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1" style={{ color: '#0f172a' }}>{d.name}</h3>
                <p className="text-xs font-semibold mb-4 uppercase tracking-wide" style={{ color: '#d97706' }}>{d.role}</p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748b' }}>{d.bio}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl text-center" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <div className="text-xs font-medium mb-0.5" style={{ color: '#94a3b8' }}>Qualification</div>
                    <div className="text-xs font-bold" style={{ color: '#1e293b' }}>{d.qualification}</div>
                  </div>
                  <div className="p-3 rounded-xl text-center" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <div className="text-xs font-medium mb-0.5" style={{ color: '#94a3b8' }}>Experience</div>
                    <div className="text-sm font-bold" style={{ color: '#d97706' }}>{d.experience}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
