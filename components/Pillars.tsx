export default function Pillars() {
  return (
    <section id="pillars">
      <div className="pillars-inner">
        <div className="pillars-head">
          <div className="pillars-pill">
            <span className="pillars-pill-dot" />
            Por qué KAIman
          </div>
          <h2 className="pillars-h2">
            Diseñado para que confíes<br />en lo que <span className="hi">automatizas.</span>
          </h2>
        </div>

        <div className="pillars-grid2">

          {/* Card 1 */}
          <div className="pil2">
            <div className="pil2-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="#FF5B00" strokeWidth="1.6"/>
                <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="pil2-title">El humano siempre manda.</div>
            <div className="pil2-body">KAIman no decide por ti. Nunca.</div>
            <ul className="pil2-list">
              <li><span><strong>Define</strong> — Tú estableces roles, objetivos y límites</span></li>
              <li><span><strong>Supervisa</strong> — Monitoras en tiempo real qué hace y por qué</span></li>
              <li><span><strong>Valida</strong> — Apruebas las decisiones que importan</span></li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="pil2">
            <div className="pil2-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="#FF5B00" strokeWidth="1.6"/>
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="pil2-title">Especialización absoluta.</div>
            <div className="pil2-body">
              Un agente que hace todo, hace todo mal. Cada agente KAIman domina un área
              específica con profundidad real: finanzas, operaciones, talento, ventas, marketing.
              No es una IA genérica.
            </div>
          </div>

          {/* Card 3 */}
          <div className="pil2">
            <div className="pil2-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="5" cy="12" r="2.5" stroke="#FF5B00" strokeWidth="1.6"/>
                <circle cx="19" cy="6" r="2.5" stroke="#FF5B00" strokeWidth="1.6"/>
                <circle cx="19" cy="18" r="2.5" stroke="#FF5B00" strokeWidth="1.6"/>
                <path d="M7.5 11l9-4M7.5 13l9 4" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="pil2-title">Un ecosistema, no herramientas sueltas.</div>
            <div className="pil2-body">
              Los agentes se comunican entre sí, comparten contexto y se coordinan bajo una
              sola plataforma. Integración real, no integraciones que hay que mantener.
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
