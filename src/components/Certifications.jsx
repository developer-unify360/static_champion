const CERTS = [
  {
    icon:      '🚀',
    title:     'Startup India Certificate',
    body:      'Recognized under the Startup India initiative, validating our commitment to innovation and entrepreneurship in the refractory manufacturing sector.',
    highlight: 'Startup India Recognized',
    color:     '#0f172a',
    grad:      'linear-gradient(135deg,#0f172a,#1e293b)',
    pdf:       '/legal/StartupCertificate.pdf',
    pdfLabel:  'View Certificate',
  },
  {
    icon:      '📋',
    title:     'GST Registration',
    body:      'Fully GST compliant with a valid registration, ensuring transparent and lawful business operations across India.',
    highlight: '22AARFC4002D1Z3',
    color:     '#d97706',
    grad:      'linear-gradient(135deg,#d97706,#f59e0b)',
    pdf:       null,
    pdfLabel:  null,
  },
  {
    icon:      '🤝',
    title:     'Partnership Deed',
    body:      'Formally constituted Limited Liability Partnership (LLP) with a duly executed Partnership Deed, governed by the LLP Act 2008.',
    highlight: 'LLP Reg: AARFC4002D',
    color:     '#166534',
    grad:      'linear-gradient(135deg,#166534,#15803d)',
    pdf:       '/legal/PARTNER_SHIP_DEED.pdf',
    pdfLabel:  'View Deed',
  },
]

export default function Certifications() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <div className="accent-bar mx-auto" />
          <h2 className="section-title">Certifications &amp; Legal</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Our credentials and compliance documentation reflecting our commitment to professionalism
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CERTS.map(c => (
            <div key={c.title} className="card-hover rounded-2xl overflow-hidden flex flex-col"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #e2e8f0' }}>

              {/* Colored header */}
              <div className="p-8 text-center" style={{ background: c.grad }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
                  style={{ background: 'rgba(255,255,255,0.15)' }}>
                  {c.icon}
                </div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Roboto Slab',serif" }}>
                  {c.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 text-center bg-white flex flex-col flex-1">
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#64748b' }}>{c.body}</p>

                <span className="px-4 py-1.5 rounded-full text-xs font-bold inline-block mb-5"
                  style={{ background: `${c.color}12`, color: c.color, border: `1px solid ${c.color}30` }}>
                  {c.highlight}
                </span>

                {/* PDF button */}
                {c.pdf ? (
                  <a
                    href={c.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                    style={{ background: `${c.color}10`, color: c.color, border: `1.5px solid ${c.color}40` }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = c.color
                      e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = `${c.color}10`
                      e.currentTarget.style.color = c.color
                    }}
                  >
                    {/* PDF icon */}
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6" />
                    </svg>
                    {c.pdfLabel}
                    {/* Download arrow */}
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                ) : (
                  <div className="py-2.5 rounded-xl text-sm font-medium text-center"
                    style={{ background: '#f8fafc', color: '#94a3b8', border: '1.5px dashed #e2e8f0' }}>
                    Registered with Govt. of India
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Legal docs note */}
        <p className="text-center text-xs mt-10" style={{ color: '#94a3b8' }}>
          All documents are official and verified. Click to view or download the respective PDF.
        </p>
      </div>
    </section>
  )
}
