'use client'
import { useState } from 'react'

type Tab = 'workforce' | 'sales' | 'marketing' | 'industrial'

export default function Features() {
  const [tab, setTab] = useState<Tab>('workforce')

  return (
    <section id="features">
      {/* Header 2-col */}
      <div className="feat-outer">
        <div className="feat-text">
          <div className="feat-pill">
            <span className="feat-pill-dot" />
            Los agentes especializados
          </div>
          <h2 className="feat-h2">
            Crea y escala tu operación, todo bajo un mismo <span className="hi">ecosistema.</span>
          </h2>
          <p className="feat-sub2">
            Cada agente KAIman domina su área en profundidad. No son herramientas
            genéricas — son especialistas que se coordinan entre sí bajo la plataforma.
          </p>
          <a href="#cta-fin" className="btn-feat">Solicita una demo →</a>
        </div>

        {/* Hologram visual — hidden on mobile via CSS */}
        <div className="feat-visual">
          <div className="holo-wrap">
            <svg viewBox="0 0 340 340" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="hg1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF5B00" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#FF5B00" stopOpacity="0"/>
                </radialGradient>
                <filter id="hglow"><feGaussianBlur stdDeviation="6"/></filter>
                <filter id="hglow2"><feGaussianBlur stdDeviation="3"/></filter>
              </defs>
              <circle cx="170" cy="170" r="155" fill="url(#hg1)" filter="url(#hglow)"/>
              <circle cx="170" cy="170" r="148" fill="none" stroke="#FF5B00" strokeWidth="0.5" strokeOpacity="0.12"/>
              <circle cx="170" cy="170" r="130" fill="none" stroke="#FF5B00" strokeWidth="0.8" strokeOpacity="0.18"/>
              <circle cx="170" cy="170" r="110" fill="none" stroke="#FF5B00" strokeWidth="1" strokeOpacity="0.28"/>
              <g className="holo-rotate">
                <circle cx="170" cy="170" r="140" fill="none" stroke="#FF5B00" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="8 16"/>
              </g>
              <g className="holo-rotate2">
                <circle cx="170" cy="170" r="118" fill="none" stroke="#FF5B00" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 20"/>
              </g>
              <g className="holo-rotate">
                <circle cx="170" cy="30" r="5" fill="#FF5B00" opacity="0.9"/>
                <circle cx="170" cy="30" r="10" fill="#FF5B00" opacity="0.2" filter="url(#hglow2)"/>
                <circle cx="310" cy="170" r="4" fill="#FF5B00" opacity="0.7"/>
                <circle cx="170" cy="310" r="4" fill="#FF5B00" opacity="0.7"/>
                <circle cx="30" cy="170" r="3" fill="#FF5B00" opacity="0.5"/>
              </g>
              <path d="M 170 30 A 140 140 0 0 1 296 246" fill="none" stroke="#FF5B00" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round"/>
              <circle cx="170" cy="170" r="56" fill="#21272A" stroke="#FF5B00" strokeWidth="1.5" strokeOpacity="0.5"/>
              <circle cx="170" cy="170" r="40" fill="rgba(255,91,0,0.06)"/>
              <circle cx="170" cy="170" r="48" fill="none" stroke="#FF5B00" strokeWidth="1" strokeOpacity="0.3" className="holo-pulse"/>
              <image href="https://res.cloudinary.com/dgqyix7a3/image/upload/v1782319716/kaiman_logo_vvvtbt.png" x="120" y="148" width="100" height="44" preserveAspectRatio="xMidYMid meet"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="feat-tabs2">
        {(['workforce', 'sales', 'marketing', 'industrial'] as Tab[]).map((t) => (
          <button
            key={t}
            className={`feat-tab2${tab === t ? ' active' : ''}`}
            onClick={() => setTab(t)}
          >
            {t === 'workforce' && 'Workforce'}
            {t === 'sales' && 'Sales OS'}
            {t === 'marketing' && 'Marketing OS'}
            {t === 'industrial' && 'Industrial OS'}
          </button>
        ))}
      </div>

      {/* Panels */}
      <div className="feat-panels2">

        {/* Workforce */}
        <div className={`feat-panel2${tab === 'workforce' ? ' active' : ''}`}>
          {[
            { name: 'KAIman Reclutador', desc: 'Filtra y evalúa candidatos de alto potencial. De 200 aplicaciones a 5 entrevistas que valen la pena.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3.5" stroke="#FF5B00" strokeWidth="1.6"/><path d="M2 20c0-3.866 3.134-7 7-7" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round"/><circle cx="17" cy="9" r="2.5" stroke="#FF5B00" strokeWidth="1.6"/><path d="M22 20c0-2.761-2.239-5-5-5" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round"/></svg> },
            { name: 'KAIman Automation', desc: 'Elimina tareas administrativas repetitivas. Los flujos corren solos con supervisión humana en los puntos clave.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#FF5B00" strokeWidth="1.6"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round"/></svg> },
            { name: 'KAIman Auditor', desc: 'Análisis financiero continuo. Detecta anomalías y anticipa riesgos antes de que duelan.', badge: 'Próximamente', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round"/><rect x="9" y="3" width="6" height="4" rx="1" stroke="#FF5B00" strokeWidth="1.6"/><path d="M9 12h6M9 16h4" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round"/></svg> },
            { name: 'KAIman Procesos', desc: 'Genera propuestas y estimaciones comerciales automáticamente. Documentación lista, sin intervención manual.', badge: 'Próximamente', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round"/></svg> },
          ].map((c) => (
            <div className="feat-card2" key={c.name}>
              <div className="feat-card2-icon">{c.icon}</div>
              <div className="feat-card2-name">{c.name}</div>
              <div className="feat-card2-desc">{c.desc}</div>
              {c.badge && <div className="feat-badge2">{c.badge}</div>}
            </div>
          ))}
        </div>

        {/* Sales OS */}
        <div className={`feat-panel2 cols-1${tab === 'sales' ? ' active' : ''}`}>
          <div className="feat-card2">
            <div className="feat-card2-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="21" r="1" stroke="#FF5B00" strokeWidth="1.6"/>
                <circle cx="20" cy="21" r="1" stroke="#FF5B00" strokeWidth="1.6"/>
              </svg>
            </div>
            <div className="feat-card2-name">KAIman CRM</div>
            <div className="feat-card2-desc">Pipeline inteligente, scoring de leads en tiempo real y automatización comercial. Tu equipo cierra. No administra.</div>
          </div>
        </div>

        {/* Marketing OS */}
        <div className={`feat-panel2 cols-2${tab === 'marketing' ? ' active' : ''}`}>
          {[
            { name: 'KAIman Chatbot', desc: 'Atiende, califica y convierte visitantes 24/7 antes de que se vayan. Cero leads perdidos por tiempo de respuesta.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg> },
            { name: 'KAIman SDR', desc: 'Prospección inteligente y automatizada. Identifica y contacta al perfil ideal antes de que lo haga la competencia.', badge: 'Próximamente', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#FF5B00" strokeWidth="1.6"/><path d="M21 21l-4-4" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round"/></svg> },
          ].map((c) => (
            <div className="feat-card2" key={c.name}>
              <div className="feat-card2-icon">{c.icon}</div>
              <div className="feat-card2-name">{c.name}</div>
              <div className="feat-card2-desc">{c.desc}</div>
              {c.badge && <div className="feat-badge2">{c.badge}</div>}
            </div>
          ))}
        </div>

        {/* Industrial OS */}
        <div className={`feat-panel2 cols-1${tab === 'industrial' ? ' active' : ''}`}>
          <div className="feat-card2">
            <div className="feat-card2-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 20V10l5-5 5 5V4l5 4v12H2z" stroke="#FF5B00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="9" y="14" width="3" height="6" rx="0.5" stroke="#FF5B00" strokeWidth="1.4"/>
              </svg>
            </div>
            <div className="feat-card2-name">KAIman Industrial</div>
            <div className="feat-card2-desc">Monitoreo de operaciones en tiempo real. Detecta anomalías antes de que paren la producción y optimiza el uso de activos con mantenimiento predictivo.</div>
          </div>
        </div>

      </div>
    </section>
  )
}
