export default function Stats() {
  return (
    <section id="stats">
      <div className="stats-wrap">

        {/* Card 1: 88% */}
        <div className="stat-card">
          <div className="stat-line-accent" />
          <div className="stat-icon-wrap">
            <div className="stat-ring-2" />
            <div className="stat-ring-1" />
            <div className="stat-icon-ring">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="9" stroke="#FF5B00" strokeWidth="1.5"/>
                <path d="M7 11.5L9.5 14L15 8.5" stroke="#FF5B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="stat-num">88%</div>
          <p className="stat-desc">
            de empresas ya usa IA en alguna función. La adopción dejó de ser ventaja
            competitiva, ahora es el piso mínimo.
          </p>
          <div className="stat-src">McKinsey State of AI, 2025</div>
          <div className="stat-glow-ring" />
        </div>

        {/* Card 2: 6% */}
        <div className="stat-card">
          <div className="stat-line-accent" />
          <div className="stat-icon-wrap">
            <div className="stat-ring-2" />
            <div className="stat-ring-1" />
            <div className="stat-icon-ring">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="9" stroke="#FF5B00" strokeWidth="1.5"/>
                <path d="M11 7V11.5" stroke="#FF5B00" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="11" cy="14.5" r="0.75" fill="#FF5B00"/>
              </svg>
            </div>
          </div>
          <div className="stat-num">6%</div>
          <p className="stat-desc">
            de empresas obtiene ROI significativo de IA. Las demás invierten, experimentan y archivan.
          </p>
          <div className="stat-src">McKinsey State of AI, 2025</div>
          <div className="stat-glow-ring" />
        </div>

        {/* Card 3: 40% */}
        <div className="stat-card">
          <div className="stat-line-accent" />
          <div className="stat-icon-wrap">
            <div className="stat-ring-2" />
            <div className="stat-ring-1" />
            <div className="stat-icon-ring">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="9" stroke="#FF5B00" strokeWidth="1.5"/>
                <path d="M7.5 14.5L10.5 8L13.5 11.5L15.5 9" stroke="#FF5B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="stat-num">40%</div>
          <p className="stat-desc">
            de las empresas reportan impacto en sus resultados financieros. La mayoría tiene
            IA, pero no tiene resultados.
          </p>
          <div className="stat-src">McKinsey State of AI, 2025</div>
          <div className="stat-glow-ring" />
        </div>

      </div>
    </section>
  )
}
