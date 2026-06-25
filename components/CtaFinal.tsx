'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function CtaFinal() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Solicitud de Auditoría Gratuita — ${form.empresa}`)
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmpresa: ${form.empresa}\nCargo: ${form.cargo}\nEmail: ${form.email}\nTeléfono: ${form.telefono}`
    )
    window.location.href = `mailto:growth@krugercorporation.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="cta-fin">
      <div className="cta-inner">

        {/* Left — Form */}
        <div className="cta-left">
          <div className="cta-pill"><span className="cta-pill-dot" />Empieza hoy</div>
          <h2 className="cta-h2">
            Solicita tu<br />
            <span className="hi">Auditoría Gratuita</span>
          </h2>
          <p className="cta-sub">
            Analizamos tus procesos, identificamos los cuellos de botella y te mostramos
            exactamente cuánto te está costando no automatizar.
          </p>

          <form className="cta-form" onSubmit={handleSubmit} noValidate>
            <div className="cta-form-row">
              <div className="cta-field">
                <label className="cta-label" htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  className="cta-input"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cta-field">
                <label className="cta-label" htmlFor="empresa">Empresa</label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  className="cta-input"
                  placeholder="Nombre de tu empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="cta-form-row">
              <div className="cta-field">
                <label className="cta-label" htmlFor="cargo">Cargo</label>
                <input
                  id="cargo"
                  name="cargo"
                  type="text"
                  className="cta-input"
                  placeholder="Tu cargo"
                  value={form.cargo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cta-field">
                <label className="cta-label" htmlFor="email">Email corporativo</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="cta-input"
                  placeholder="tu@empresa.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="cta-field cta-field-full">
              <label className="cta-label" htmlFor="telefono">WhatsApp / Teléfono</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                className="cta-input"
                placeholder="+593 99 000 0000"
                value={form.telefono}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="cta-btn">
              Solicitar Auditoría Gratuita →
            </button>
          </form>

          <div className="cta-trust">
            {[
              { icon: '✓', text: 'Sin costo' },
              { icon: '✓', text: 'Sin compromiso' },
              { icon: '✓', text: 'Con diagnóstico real' },
            ].map((t) => (
              <div className="cta-trust-item" key={t.text}>
                <span className="cta-trust-icon">{t.icon}</span>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="cta-right">
          <div className="cta-img-wrap">
            <Image
              src="https://res.cloudinary.com/dgqyix7a3/image/upload/v1782332634/ChatGPT_Image_24_jun_2026_15_21_22_t0mj5s.png"
              alt="KAIman en acción"
              width={560}
              height={560}
              className="cta-img"
              priority={false}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
