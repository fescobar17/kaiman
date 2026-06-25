'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav>
        <div className="nav-i">
          <div className="nav-logo">
            <Image
              src="https://res.cloudinary.com/dgqyix7a3/image/upload/v1782319716/kaiman_logo_vvvtbt.png"
              alt="KAIman"
              width={120}
              height={30}
              priority
            />
          </div>
          <div className="nav-r">
            <a href="#problems" className="nav-link">El problema</a>
            <a href="#features" className="nav-link">Agentes</a>
            <a href="#faq" className="nav-link">Preguntas</a>
            <a href="#cta-fin" className="btn-nav">Solicita una demo →</a>
            {/* Hamburger — visible on mobile */}
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div className="mobile-menu" onClick={close}>
          <a href="#problems" onClick={close}>El problema</a>
          <a href="#features" onClick={close}>Agentes</a>
          <a href="#faq" onClick={close}>Preguntas</a>
          <a href="#cta-fin" className="btn-nav" onClick={close}>Solicita una demo →</a>
        </div>
      )}
    </>
  )
}
