'use client'
import Image from 'next/image'
import Script from 'next/script'

export default function CtaFinal() {
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

          {/* Typeform embed */}
          <div className="cta-typeform">
            <div data-tf-live="01KNMZP56KKDR7J6NGMMW8G055" />
            <Script src="//embed.typeform.com/next/embed.js" strategy="afterInteractive" />
          </div>

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
