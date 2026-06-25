import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-inner">
        <Image
          src="https://res.cloudinary.com/dgqyix7a3/image/upload/v1782319716/kaiman_logo_vvvtbt.png"
          alt="KAIman"
          width={240}
          height={60}
          className="footer-logo"
          style={{ height: '26px', width: 'auto' }}
        />
        <p className="footer-text">
          Transformamos las empresas impulsando vidas
          <span className="footer-sep">·</span>
          <a href="https://kruger.com.ec" target="_blank" rel="noopener noreferrer" className="footer-link">
            kruger.com.ec
          </a>
          <span className="footer-sep">·</span>
          © {new Date().getFullYear()} Kruger Corp.
        </p>
      </div>
    </footer>
  )
}
