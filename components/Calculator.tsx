'use client'
import { useState, useCallback } from 'react'

const PROCESSES = [
  { title: 'Calificación de leads', hrs: 12, icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke="#FF5B00" strokeWidth="1.5"/>
      <circle cx="11" cy="11" r="5" stroke="#FF5B00" strokeWidth="1.5"/>
      <circle cx="11" cy="11" r="1.5" fill="#FF5B00"/>
    </svg>
  )},
  { title: 'Revisión de candidatos', hrs: 18, icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="8.5" cy="7" r="3" stroke="#FF5B00" strokeWidth="1.5"/>
      <path d="M2 18c0-3.314 2.91-6 6.5-6" stroke="#FF5B00" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="15" cy="8" r="2.5" stroke="#FF5B00" strokeWidth="1.5"/>
      <path d="M20 18c0-2.761-2.239-5-5-5" stroke="#FF5B00" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )},
  { title: 'Reportes financieros', hrs: 10, icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="3" y="13" width="4" height="6" rx="1" stroke="#FF5B00" strokeWidth="1.5"/>
      <rect x="9" y="9" width="4" height="10" rx="1" stroke="#FF5B00" strokeWidth="1.5"/>
      <rect x="15" y="5" width="4" height="14" rx="1" stroke="#FF5B00" strokeWidth="1.5"/>
    </svg>
  )},
  { title: 'Seguimiento de pipeline', hrs: 8, icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 16L8 10L12 13L19 5" stroke="#FF5B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 5h4v4" stroke="#FF5B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )},
  { title: 'Monitoreo operacional', hrs: 15, icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="10" cy="10" r="6.5" stroke="#FF5B00" strokeWidth="1.5"/>
      <path d="M15 15L19 19" stroke="#FF5B00" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )},
  { title: 'Tareas administrativas', hrs: 6, icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="3" stroke="#FF5B00" strokeWidth="1.5"/>
      <path d="M11 2v2M11 18v2M2 11h2M18 11h2M4.93 4.93l1.41 1.41M15.66 15.66l1.41 1.41M4.93 17.07l1.41-1.41M15.66 6.34l1.41-1.41" stroke="#FF5B00" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )},
]

const HPD = 15 // hourly rate in USD

export default function Calculator() {
  const [active, setActive] = useState<Set<number>>(new Set([0, 1]))
  const [teamSize, setTeamSize] = useState(17)

  const toggle = useCallback((idx: number) => {
    setActive(prev => {
      const next = new Set(prev)
      next.has(idx) ? next.delete(idx) : next.add(idx)
      return next
    })
  }, [])

  const totalHrsPerWeek = Array.from(active).reduce((sum, idx) => sum + PROCESSES[idx].hrs, 0)
  const totalHrsPerMonth = totalHrsPerWeek * 4 * teamSize
  const totalCost = totalHrsPerMonth * HPD

  return (
    <section id="calc">
      <div className="calc-hero">
        {/* Left: text */}
        <div className="calc-left">
          <h2 className="calc-big-title">
            <span style={{ whiteSpace: 'nowrap' }}>¿Cuántas horas pierde tu equipo</span><br />
            <span className="hi" style={{ whiteSpace: 'nowrap' }}>en procesos manuales?</span>
          </h2>
          <p className="calc-desc">
            Selecciona los procesos que hoy hacen personas en tu empresa y calcula el tiempo
            real que KAIman puede liberar.
          </p>
          <a href="#cta-fin" className="btn-calc">Agenda una auditoría gratuita →</a>
        </div>

        {/* Right: radar animation */}
        <div className="calc-right">
          <div className="radar-wrap">
            <div className="radar-glow-outer" />
            <div className="radar-ring" style={{ width: 342, height: 342, opacity: 0.12 }} />
            <div className="radar-ring" style={{ width: 288, height: 288, opacity: 0.18 }} />
            <div className="radar-ring" style={{ width: 232, height: 232, opacity: 0.25 }} />
            <div className="radar-ring" style={{ width: 176, height: 176, opacity: 0.32 }} />
            <div className="radar-ring" style={{ width: 121, height: 121, opacity: 0.25 }} />
            <div className="radar-ticks">
              {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => (
                <span key={a} className="r-tick" style={{ '--a': `${a}deg` } as React.CSSProperties} />
              ))}
            </div>
            <div className="radar-dots">
              {[0,45,90,135,180,225,270,315].map((a, i) => (
                <span key={a} className="r-dot" style={{ '--a': `${a}deg`, '--delay': `${i * 0.4}s` } as React.CSSProperties} />
              ))}
            </div>
            <div className="radar-scan" />
            <div className="radar-hand-slow"><div className="radar-hand-slow-line" /></div>
            <div className="radar-hand"><div className="radar-hand-line" /></div>
            <div className="radar-center"><div className="radar-center-inner" /></div>
          </div>
        </div>
      </div>

      {/* Cards + results */}
      <div className="calc-body">
        <div className="calc-grid">
          {PROCESSES.map((p, idx) => (
            <div
              key={idx}
              className={`calc-card${active.has(idx) ? ' active' : ''}`}
              onClick={() => toggle(idx)}
            >
              <div className="card-check">
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4L4 7.5L10 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-body">
                <div className="card-icon">
                  <span className="card-svg-icon">{p.icon}</span>
                </div>
                <div className="card-title">{p.title}</div>
                <div className="card-hrs">{p.hrs} hrs/semana</div>
              </div>
            </div>
          ))}
        </div>

        <div className="calc-results">
          {/* Team size control */}
          <div className="res-block">
            <div className="res-label">Tamaño del equipo</div>
            <div className="res-team-ctrl">
              <button
                className="res-team-btn"
                onClick={() => setTeamSize(s => Math.max(1, s - 1))}
              >−</button>
              <div className="res-team-n">{teamSize}</div>
              <button
                className="res-team-btn"
                onClick={() => setTeamSize(s => s + 1)}
              >+</button>
            </div>
          </div>
          <div className="res-divider" />
          <div className="res-block">
            <div className="res-label">Horas liberadas / mes</div>
            <div className="res-val-orange">{totalHrsPerMonth.toLocaleString('es-EC')}</div>
          </div>
          <div className="res-divider" />
          <div className="res-block">
            <div className="res-label">Costo equivalente recuperado</div>
            <div className="res-val-white">${totalCost.toLocaleString('es-EC')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
