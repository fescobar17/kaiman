'use client'
import { useState } from 'react'

const FAQS = [
  {
    q: '¿KAIman reemplaza a mi equipo?',
    a: 'No. KAIman amplifica a tu equipo — elimina el trabajo repetitivo para que las personas se concentren en decisiones que importan. El humano siempre define, supervisa y valida. Somos un aliado, no un sustituto.',
  },
  {
    q: '¿Cuánto tiempo toma implementar?',
    a: 'Depende del alcance, pero la mayoría de los proyectos entra en producción en 4 a 8 semanas. Empezamos con una auditoría gratuita para identificar el área de mayor impacto inmediato y construimos desde ahí.',
  },
  {
    q: '¿Funciona con nuestros sistemas ERP/CRM actuales?',
    a: 'Sí. KAIman se conecta con los principales sistemas del mercado: SAP, Oracle, Salesforce, HubSpot, entre otros. Si tienes un sistema a medida, lo evaluamos en la auditoría inicial.',
  },
  {
    q: '¿Qué diferencia a KAIman de otras plataformas de IA?',
    a: 'Especialización por industria + ecosistema integrado + control humano real. No vendemos una caja negra genérica. Cada agente domina su área, se comunica con los demás, y tú siempre sabes qué están haciendo y por qué.',
  },
  {
    q: '¿Cuál es el modelo de precios?',
    a: 'Trabajamos por proyecto o con suscripción mensual según el alcance. Empieza con la auditoría gratuita — ahí dimensionamos el esfuerzo real y te presentamos opciones concretas sin compromiso.',
  },
  {
    q: '¿Mi empresa es demasiado pequeña para KAIman?',
    a: 'Si tienes un equipo con procesos repetitivos que consumen tiempo, probablemente no. Trabajamos con empresas desde 15 personas. El ROI se ve más rápido cuando el equipo es ágil para implementar.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq">
      <div className="faq-inner">

        <div className="faq-head">
          <div className="faq-pill"><span className="faq-pill-dot" />Preguntas frecuentes</div>
          <h2 className="faq-h2">Resolvemos las dudas<br />más <span className="hi">comunes.</span></h2>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className={`faq-item${open === i ? ' open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-q">
                <span>{item.q}</span>
                <span className="faq-arrow">{open === i ? '−' : '+'}</span>
              </div>
              {open === i && (
                <div className="faq-a">{item.a}</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
