# Foresight — sitio web

Sitio de [foresight.cl](https://foresight.cl), construido con Next.js (App Router, `output: "export"`) y Tailwind CSS. El build genera un sitio 100% estático en `out/`.

## Comandos

```bash
npm run dev        # servidor de desarrollo (localhost:3000)
npm run build      # build estático → out/  (corre prebuild: sitemap)
npm run lint       # ESLint (0 warnings permitidos)
npm run typecheck  # tsc --noEmit
```

CI (GitHub Actions) corre lint + typecheck + build en cada push/PR a `main`. El deploy lo hace el hosting (Vercel/Netlify) al hacer push.

## Contenido

Todo el contenido editable vive en `src/data/content.ts` (proyectos, reportes, equipo, noticias, clientes), tipado por `src/data/types.ts`. Los títulos/descripciones de las páginas estáticas están en `src/lib/page-meta.ts`.

## Google Analytics 4

El sitio carga GA4 solo si `NEXT_PUBLIC_GA_ID` está definida al momento del build:

1. Crear una propiedad GA4 en <https://analytics.google.com> y copiar el ID de medición (`G-XXXXXXXXXX`).
2. En el hosting (Vercel/Netlify), definir la variable de entorno `NEXT_PUBLIC_GA_ID` **solo en el entorno Production**.
3. Redeploy. Sin la variable, el build no incluye ningún script de analytics.

## Imágenes y OG

- `scripts/optimize-images.mjs`: compresión one-off de fotos (los resultados se commitean). Correr al agregar fotos nuevas pesadas.
- `scripts/generate-og.mjs`: regenera `public/og-image.png` (1200×630) usado en los previews sociales. LinkedIn/Facebook no soportan SVG como og:image.

## Nota: builds locales y Dropbox (Windows)

Este repo vive dentro de una carpeta Dropbox. En Windows, la sincronización bloquea archivos recién escritos y `next build` puede fallar con `EPERM: operation not permitted, rmdir ...` al limpiar `.next/` u `out/` (compila bien; falla la limpieza). Los scripts `predev`/`postbuild` marcan esas carpetas con `com.dropbox.ignored`, lo que lo mitiga pero no lo elimina.

Si un build local falla con EPERM: reintentar después de ~1 minuto, o construir desde una copia fuera de Dropbox:

```powershell
robocopy . C:\Users\<usuario>\dev-builds\foresight /MIR /XD node_modules .next out .git .claude Materials "Foresight - LOGOTIPO" audit_reports
cd C:\Users\<usuario>\dev-builds\foresight; npm ci; npm run build
```

En CI y en el hosting (Linux) esto no ocurre.
