# KAIman Platform — Landing Page

Landing page para KAIman Platform, construida con Next.js 14 (App Router) + Tailwind CSS + TypeScript.

## Stack

- **Next.js 14** — App Router
- **Tailwind CSS** — utilidades de layout
- **TypeScript** — tipado
- **next/image** — imágenes optimizadas (Cloudinary)
- **next/font** — Inter desde Google Fonts

## Instalación local

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del proyecto

```
/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Composición de secciones
│   └── globals.css       # Todos los estilos + animaciones CSS
├── components/
│   ├── Navbar.tsx        # Navegación + menú hamburguesa mobile
│   ├── Hero.tsx          # Hero principal
│   ├── Calculator.tsx    # Calculadora de ROI (interactiva)
│   ├── Stats.tsx         # 3 stats McKinsey
│   ├── Problems.tsx      # Diagnóstico por departamentos
│   ├── Features.tsx      # Agentes por vertical (tabs)
│   ├── Pillars.tsx       # 3 pilares KAIman
│   ├── Ecosistema.tsx    # Diagrama del ecosistema
│   ├── Faq.tsx           # FAQ accordion
│   ├── CtaFinal.tsx      # Formulario de contacto (mailto)
│   └── Footer.tsx        # Footer
├── next.config.ts        # Config Cloudinary remote images
├── tailwind.config.ts    # Colores de marca extendidos
└── tsconfig.json
```

## Deploy en Vercel

```bash
# 1. Sube el proyecto a GitHub
git init
git add .
git commit -m "feat: kaiman landing page"
git remote add origin https://github.com/TU_USUARIO/kaiman.git
git push -u origin main

# 2. Importa en Vercel
# Ve a https://vercel.com/import
# Conecta tu repo → Deploy
# Vercel detecta Next.js automáticamente, sin configuración extra
```

## Variables de entorno

No se requieren variables de entorno. El formulario de contacto usa `mailto:` nativo.

Para cambiar el email de destino del formulario, edita `components/CtaFinal.tsx` (línea con `mailto:hola@kaiman.ai`).

## Imágenes

Las imágenes están alojadas en Cloudinary y configuradas en `next.config.ts`:

| Asset | URL |
|-------|-----|
| Logo | `res.cloudinary.com/dgqyix7a3/...kaiman_logo_vvvtbt` |
| Mascota | `res.cloudinary.com/dgqyix7a3/...kaiman_4x_l2sjgz` |
| CTA imagen | `res.cloudinary.com/dgqyix7a3/...ChatGPT_Image_24_jun_2026...` |

---

© 2026 Kruger Corp. · [kruger.com.ec](https://kruger.com.ec)
