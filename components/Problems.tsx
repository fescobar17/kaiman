export default function Problems() {
  return (
    <section id="problems">
      <div className="prob-inner">

        {/* Left */}
        <div className="prob-left2">
          <div className="prob-pill">
            <span className="prob-pill-dot" />
            El diagnóstico
          </div>
          <h2 className="prob-h2">
            No es un problema<br />de personas. Es un<br />
            problema de <span className="hi">coordinación.</span>
          </h2>
          <p className="prob-p">
            Tu equipo es capaz. La tecnología existe. Lo que falta es el sistema que los
            conecta y los hace rendir juntos.
          </p>
          <div className="prob-card">
            <div className="prob-card-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="6" r="2.5" stroke="#FF5B00" strokeWidth="1.4"/>
                <circle cx="4" cy="17" r="2.5" stroke="#FF5B00" strokeWidth="1.4"/>
                <circle cx="18" cy="17" r="2.5" stroke="#FF5B00" strokeWidth="1.4"/>
                <path d="M11 8.5v3.5M11 12l-5.5 3M11 12l5.5 3" stroke="#FF5B00" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="prob-card-text">
              KAIman es el <em>Director Técnico</em> que coordina a tus agentes especializados —
              mientras tú mantienes el control total.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="prob-right2">
          {[
            {
              dept: 'Finanzas',
              title: 'Cierra el mes en dos semanas.',
              desc: 'Cuando el reporte llega, el mercado ya se movió. La decisión, también.',
              icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="#FF5B00" strokeWidth="1.4"/><path d="M6 10h8M6 13h5M6 7h4" stroke="#FF5B00" strokeWidth="1.4" strokeLinecap="round"/></svg>,
            },
            {
              dept: 'Operaciones',
              title: 'Descubres la falla cuando la máquina ya paró.',
              desc: 'El daño está hecho. El costo de reparación, el doble de prevenirlo.',
              icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="#FF5B00" strokeWidth="1.4"/><path d="M10 6v4.5l3 1.5" stroke="#FF5B00" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            },
            {
              dept: 'RRHH',
              title: 'Entrevistas a 200 personas para contratar a 2.',
              desc: 'El talento que necesitabas aceptó otra oferta mientras revisabas CVs.',
              icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3" stroke="#FF5B00" strokeWidth="1.4"/><path d="M4 18c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#FF5B00" strokeWidth="1.4" strokeLinecap="round"/></svg>,
            },
            {
              dept: 'Ventas',
              title: 'Respondes en horas. El cliente compró en minutos.',
              desc: 'Los leads no esperan. Y la competencia responde antes que tú.',
              icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 14l4-5 3.5 3L14 7l3 3.5" stroke="#FF5B00" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 7h1.5V8.5" stroke="#FF5B00" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            },
            {
              dept: 'Proyectos',
              title: 'Entrega tarde y fuera de presupuesto. Siempre.',
              desc: 'El cronograma es una intención, no un compromiso real.',
              icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="16" height="14" rx="2" stroke="#FF5B00" strokeWidth="1.4"/><path d="M6 7h8M6 10h5M6 13h3" stroke="#FF5B00" strokeWidth="1.4" strokeLinecap="round"/></svg>,
            },
          ].map((row) => (
            <div className="prob-row" key={row.dept}>
              <div className="prob-row-icon">{row.icon}</div>
              <div className="prob-row-body">
                <div className="prob-row-dept">{row.dept}</div>
                <div className="prob-row-title">{row.title}</div>
                <div className="prob-row-desc">{row.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
