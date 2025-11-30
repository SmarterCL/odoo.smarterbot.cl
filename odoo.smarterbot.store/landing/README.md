# SmarterOS Landing (Next.js)

Landing responsive (móvil + web) para presentar servicios Odoo + Automatización + IA.

## Requisitos

- Node.js 20.x LTS
- npm o pnpm
- Docker (opcional)

## Instalación

```bash
cd landing
npm install
```

## Desarrollo

```bash
npm run dev
```

Abrir <http://localhost:3000>

## Build producción

```bash
npm run build
npm start
```

## Docker

### Build imagen

```bash
docker build -t smarteros-landing .
```

### Ejecutar contenedor

```bash
docker run -p 3000:3000 smarteros-landing
```

### Con docker-compose

```bash
docker-compose up -d
```

## Estructura

```text
landing/
  app/
    layout.tsx    -> Layout raíz + metadata
    page.tsx      -> Composición de secciones
    globals.css   -> Estilos base + Tailwind
  components/     -> Secciones reutilizables
  Dockerfile      -> Imagen Docker optimizada
  docker-compose.yml
  tailwind.config.js
  postcss.config.js
  package.json
```

## Responsive Design

✅ Mobile-first approach
✅ Breakpoints: sm (640px), md (768px), lg (1024px)
✅ Menu hamburguesa en móvil
✅ Grid adaptativo en todas las secciones
✅ Formulario optimizado para touch

## Personalización rápida

- Cambiar colores en `globals.css` y `tailwind.config.js`
- Ajustar metas SEO en `app/layout.tsx`
- Agregar nuevas secciones creando componentes y agregándolos a `page.tsx`

## Próximos pasos sugeridos

1. Añadir formulario con envío (API Route / servicio externo)
2. Integrar analítica (Plausible / Google Analytics)
3. Optimizar imágenes (Next Image / WebP)
4. Añadir dark mode si se requiere

## Deployment

### Vercel
```bash
vercel --prod
```

### VPS con Docker
```bash
docker-compose up -d
```

### Nginx reverse proxy (opcional)
```nginx
server {
    listen 80;
    server_name odoo.smarterbot.store;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Nota

Este landing es independiente del módulo Odoo (`website_smarteros_seo`). Puede desplegarse en Vercel, VPS con Docker, o dentro de un contenedor frente a la instancia ERP.

