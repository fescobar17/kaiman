import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'KAIman Platform — Convierte la IA en resultados reales',
  description:
    'Plataforma de IA para empresas en LATAM. Agentes especializados que trabajan juntos, coordinados bajo un solo ecosistema.',
  keywords: ['IA', 'inteligencia artificial', 'LATAM', 'agentes', 'automatización', 'empresas'],
  icons: {
    icon: 'https://res.cloudinary.com/dwcqgcl0m/image/upload/v1776721583/krugercorp_logo_ly65c3.jpg',
    shortcut: 'https://res.cloudinary.com/dwcqgcl0m/image/upload/v1776721583/krugercorp_logo_ly65c3.jpg',
    apple: 'https://res.cloudinary.com/dwcqgcl0m/image/upload/v1776721583/krugercorp_logo_ly65c3.jpg',
  },
  openGraph: {
    title: 'KAIman Platform — Convierte la IA en resultados reales',
    description:
      'Agentes especializados que trabajan juntos, coordinados bajo un solo ecosistema, con tu equipo siempre en control.',
    siteName: 'KAIman',
    images: ['https://res.cloudinary.com/dgqyix7a3/image/upload/v1782319716/kaiman_logo_vvvtbt.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
