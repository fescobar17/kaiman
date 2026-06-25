export default function Ecosistema() {
  return (
    <section id="ecosistema">
      <div className="eco-inner">

        {/* Head */}
        <div className="eco-head">
          <div className="eco-pill"><span className="eco-pill-dot" />Cómo funciona</div>
          <h2 className="eco-h2">Así funciona el <span className="hi">ecosistema</span></h2>
          <p className="eco-sub">Cada agente se crea, configura y opera según las necesidades reales de tu empresa.</p>
        </div>

        {/* Main card */}
        <div className="eco-card">
          <div className="eco-layout">

            {/* Labels */}
            <div className="eco-labels">
              <div className="eco-label" style={{ marginTop: 20 }}>Control<br />Humano</div>
              <div style={{ flex: 1 }} />
              <div className="eco-label" style={{ marginBottom: 8 }}>IA<br />Horizontal</div>
              <div style={{ flex: 2 }} />
              <div className="eco-label">IA<br />Vertical</div>
              <div style={{ flex: 3 }} />
            </div>

            {/* Spine */}
            <div className="eco-spine">
              <div className="eco-node" />
              <div className="eco-spine-line" style={{ height: 60, flex: 'none' }} />
              <div className="eco-node" />
              <div className="eco-spine-line" style={{ height: 60, flex: 'none' }} />
              <div className="eco-node" />
              <div className="eco-spine-line" style={{ flex: 1 }} />
            </div>

            {/* Blocks */}
            <div className="eco-blocks">

              {/* Control Humano */}
              <div className="eco-human">
                <div className="eco-human-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="7" r="3" stroke="#FF5B00" strokeWidth="1.5"/>
                    <path d="M4 18c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#FF5B00" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="eco-human-text">
                  El Humano
                  <span className="sep">·</span>
                  <span>Define</span>
                  <span className="sep">·</span>
                  <span>Supervisa</span>
                  <span className="sep">·</span>
                  <span>Valida</span>
                </div>
              </div>

              {/* KAIman Creator */}
              <div className="eco-creator">
                <div className="eco-creator-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="3" y="3" width="16" height="16" rx="4" stroke="#0E1318" strokeWidth="1.6"/>
                    <path d="M7 11h8M11 7v8" stroke="#0E1318" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="eco-creator-main">KAIman Creador <span style={{ fontWeight: 400, fontSize: 13 }}>(AI Driven)</span></div>
                  <div className="eco-creator-sub">Orquesta y dirige todos los productos</div>
                </div>
              </div>

              {/* 4 Verticals */}
              <div className="eco-verticals">
                {[
                  { name: 'Industrial', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 20V10l5-5 5 5V4l5 4v12H2z" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                  { name: 'Workforce', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3.5" stroke="#FF5B00" strokeWidth="1.6"/><path d="M2 20c0-3.866 3.134-7 7-7" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round"/><circle cx="17" cy="9" r="2.5" stroke="#FF5B00" strokeWidth="1.6"/><path d="M22 20c0-2.761-2.239-5-5-5" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round"/></svg> },
                  { name: 'Sales OS', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="21" r="1.5" stroke="#FF5B00" strokeWidth="1.4"/><circle cx="20" cy="21" r="1.5" stroke="#FF5B00" strokeWidth="1.4"/></svg> },
                  { name: 'Marketing OS', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                ].map((v) => (
                  <div className="eco-vert" key={v.name}>
                    <div className="eco-vert-icon">{v.icon}</div>
                    <div className="eco-vert-name">{v.name}</div>
                  </div>
                ))}
              </div>

              {/* Sub-agents */}
              <div className="eco-subgrid">
                {[
                  { name: 'KAIman Industrial', desc: 'Monitoreo en tiempo real', soon: false },
                  { name: 'KAIman Reclutador', desc: 'Talento de élite', soon: false },
                  { name: 'KAIman Automation', desc: 'Sin fricciones', soon: false },
                  { name: 'KAIman CRM', desc: 'Pipeline inteligente', soon: false },
                  { name: 'KAIman Auditor', desc: 'coming soon', soon: true },
                  { name: 'KAIman Procesos', desc: 'coming soon', soon: true },
                  { name: 'KAIman Chatbot', desc: 'Ventas 24/7', soon: false },
                  { name: 'KAIman SDR', desc: 'coming soon', soon: true },
                ].map((s) => (
                  <div className={`eco-sub${s.soon ? ' soon' : ''}`} key={s.name}>
                    <div className="eco-sub-name">{s.name}</div>
                    <div className="eco-sub-desc">{s.desc}</div>
                  </div>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="eco-bottom">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7.5" stroke="#0E1318" strokeWidth="1.5"/>
                  <path d="M6 9l2 2.5 4-4" stroke="#0E1318" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="eco-bottom-text">
                  <strong>Cada agente</strong> se crea, configura y opera según{' '}
                  <strong>las necesidades reales de tu empresa.</strong>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
