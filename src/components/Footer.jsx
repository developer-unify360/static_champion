const QUICK = [
  { label:'Home',       href:'#home' },
  { label:'About Us',   href:'#about' },
  { label:'Products',   href:'#products' },
  { label:'Gallery',    href:'#gallery' },
  { label:'Industries', href:'#industries' },
  { label:'Directors',  href:'#directors' },
  { label:'Contact',    href:'#contact' },
]
const PRODS = [
  'Fire Bricks & Shapes',
  'High Alumina Bricks',
  'Magnesia Carbon Bricks',
  'Insulation Bricks',
  'Castables & Mortars',
  'Ramming Mass',
]

export default function Footer() {
  return (
    <footer style={{ background: '#080e1a', color: '#64748b' }}>

      {/* Amber strip at top */}
      <div className="h-1" style={{ background: 'linear-gradient(90deg,#d97706,#f59e0b,#d97706)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#d97706,#f59e0b)' }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" style={{ color: '#0f172a' }}>
                  <path d="M12 2C8.5 5 6 8 6 12c0 3.3 2.7 6 6 6s6-2.7 6-6c0-1.5-.5-3-1.5-4.5C15 9 14 11 13 11.5c.3-1.5.1-3.5-1-5.5z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm tracking-widest">CHAMPION</div>
                <div className="text-xs" style={{ color: '#fbbf24' }}>MAGNESITE LLP</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Premium manufacturer of refractory products for the Iron &amp; Steel industry.
              Delivering quality since 2022 from Champa, Chhattisgarh.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:9229273143" className="flex items-center gap-2 transition-colors hover:text-amber-400">
                <span>📞</span> +91 92292 73143
              </a>
              <a href="mailto:championmagnesite2021@gmail.com" className="flex items-center gap-2 transition-colors hover:text-amber-400 break-all">
                <span>✉️</span> championmagnesite2021@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm text-white mb-5 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm flex items-center gap-2 transition-colors hover:text-amber-400">
                    <span style={{ color: '#d97706' }}>›</span>{l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-sm text-white mb-5 uppercase tracking-widest">Our Products</h4>
            <ul className="space-y-2.5">
              {PRODS.map(p => (
                <li key={p}>
                  <a href="#products" className="text-sm flex items-center gap-2 transition-colors hover:text-amber-400">
                    <span style={{ color: '#d97706' }}>›</span>{p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm text-white mb-5 uppercase tracking-widest">Company Details</h4>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: '#475569' }}>Office Address</div>
                <p className="leading-relaxed">
                  Birra Road, Village Bhwarmal,<br />
                  PO-Rohda, Champa – 495671,<br />
                  Chhattisgarh, India
                </p>
              </div>
              <div>
                <div className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: '#475569' }}>GST Number</div>
                <p className="font-mono text-xs" style={{ color: '#e2e8f0' }}>22AARFC4002D1Z3</p>
              </div>
              <div>
                <div className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: '#475569' }}>LLP Number</div>
                <p className="font-mono text-xs" style={{ color: '#e2e8f0' }}>AARFC4002D</p>
              </div>
              <div>
                <div className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: '#475569' }}>Established</div>
                <p style={{ color: '#e2e8f0' }}>25 January 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t py-5" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p>&copy; 2026 Champion Magnesite LLP. All rights reserved.</p>
          <p>Champa, Chhattisgarh, India</p>
        </div>
      </div>
    </footer>
  )
}
