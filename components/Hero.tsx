import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid">
        {/* Left column */}
        <div className="hero-left">
          <div className="hero-tag">Plataforma de IA para empresas en LATAM</div>
          <h1 className="hero-h1">
            Todas las<br />
            <span style={{ whiteSpace: 'nowrap' }}>
              capacidades de <span className="hi">IA.</span>
            </span><br />
            Un solo <span className="hi">equipo</span><br />
            en <span className="hi">control.</span>
          </h1>
          <p className="hero-sub">
            Agentes especializados que trabajan juntos, coordinados bajo un solo ecosistema,
            con tu equipo siempre en control.
          </p>
          <a href="#cta-fin" className="btn-hero">Solicita una demostración →</a>
          <div className="trust-row">
            <div className="ti">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="6.5" stroke="#FF5B00" strokeWidth="1.5"/>
                <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="#FF5B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Sin costo
            </div>
            <div className="ti">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="6.5" stroke="#FF5B00" strokeWidth="1.5"/>
                <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="#FF5B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Sin compromiso
            </div>
            <div className="ti">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 1.5L9.09 5.26L13 5.635L10.25 8.09L11.09 12L7.5 9.925L3.91 12L4.75 8.09L2 5.635L5.91 5.26L7.5 1.5Z" stroke="#FF5B00" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              Diagnóstico real de tu operación
            </div>
          </div>
        </div>

        {/* Right column — mascot */}
        <div className="hero-right">
          <Image
            src="https://res.cloudinary.com/dgqyix7a3/image/upload/v1782321091/kaiman_4x_l2sjgz.png"
            alt="KAIman mascot"
            width={680}
            height={680}
            priority
            style={{ width: 'min(100%, 680px)', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  )
}
