# Luna — Landing Page

Landing page oficial de **Luna**, la app de citas y conexiones basada en astrología y numerología.

Desarrollada por [Favesco LLC](https://favesco.com) — *You Dream It, We Program It*

---

## Stack

- [Astro](https://astro.build) 4
- React 18
- Tailwind CSS + DaisyUI
- Framer Motion
- TypeScript

## Cómo correrlo en local

```bash
# instalar dependencias
npm install

# levantar servidor de desarrollo (http://localhost:4321)
npm run dev

# compilar para producción
npm run build

# previsualizar el build
npm run preview
```

## Estructura del proyecto

```
src/
├── components/          Componentes compartidos (navbar, footer, banner, etc.)
├── modules/
│   ├── home/            Secciones de la página principal
│   │   └── _components/ hero, features, howItWorks, testimonials, pricing, faq
│   ├── privacyPolicy/
│   ├── termsAndConditions/
│   └── cookiesPolicy/
├── pages/               Rutas de Astro
├── styles/              Estilos globales y fuentes
└── utils/
    ├── config.ts        ⭐ TODO EL CONTENIDO DE LA PÁGINA
    └── configType.ts    Tipos del config

public/
├── logos/               Logo, logomark y favicons de Luna
├── screenshots/         Capturas de la app (1.jpg, 2.jpg, 3.jpg)
├── avatars/             Símbolos zodiacales del hero
├── 3D/                  Íconos 3D de las secciones
└── stock/               Imágenes de apoyo
```

## Cómo editar el contenido

Casi todo el texto de la página vive en un solo archivo:

```
src/utils/config.ts
```

Ahí puedes cambiar títulos, subtítulos, features, pasos, FAQ, planes y los documentos legales sin tocar componentes.

## Cómo cambiar los screenshots de la app

Reemplaza estos archivos con las capturas reales:

```
public/screenshots/1.jpg
public/screenshots/2.jpg
public/screenshots/3.jpg
```

Formato recomendado: vertical de teléfono (por ejemplo 1170 × 2532 px).

## Branding

| Color          | Hex       | Uso                        |
|----------------|-----------|----------------------------|
| Cosmic Navy    | `#0C0C20` | Fondo principal            |
| Deep Purple    | `#2D1B69` | Superficies y degradados   |
| Mystic Violet  | `#8B5CF6` | Color primario             |
| Soft Violet    | `#A78BFA` | Acentos                    |
| Sky Blue       | `#A0D9F7` | Color secundario           |
| Star White     | `#F5F5FF` | Texto                      |

**Tipografías:** Cinzel (títulos) · Jost (texto e interfaz)

El tema se configura en `tailwind.config.mjs`, en la sección `daisyui.themes`.

## Pendientes

- [ ] Reemplazar los screenshots placeholder con capturas reales de la app
- [ ] Agregar los links de App Store y Google Play en `config.ts` cuando la app se publique
- [ ] Confirmar el correo de contacto y los usuarios de redes sociales
- [ ] Conectar el formulario de la lista de espera

## Deploy

El sitio es estático, así que se puede desplegar en Vercel, Netlify o Cloudflare Pages sin configuración extra.

- **Build command:** `npm run build`
- **Output directory:** `dist`
