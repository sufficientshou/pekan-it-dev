# Pekan IT

Website untuk acara Pekan IT yang diselenggarakan oleh HIMTIKA.
## 🚀 Quick Links

- **[📚 Documentation Index](./DOCS_INDEX.md)** - Panduan lengkap semua dokumentasi
- **[🎉 Restructure Summary](./RESTRUCTURE_SUMMARY.md)** - Overview perubahan (START HERE!)
- **[⚡ Quick Start Guide](./QUICK_START.md)** - Mulai development dengan cepat
- **[🏗️ Architecture](./ARCHITECTURE.md)** - Arsitektur dan design principles
- **[📁 Project Structure](./STRUCTURE.md)** - Detail struktur proyek
- **[🌳 Project Tree](./PROJECT_TREE.md)** - Visualisasi struktur folder
- **[🤝 Contributing Guide](./CONTRIBUTING.md)** - Panduan kontribusi
- **[🔄 Migration Guide](./MIGRATION_GUIDE.md)** - Panduan migrasi dari struktur lama
- **[📝 Changelog](./CHANGELOG.md)** - Version history dan perubahan

## ✨ Highlights

✅ **Scalable Architecture** - Struktur yang mudah dikembangkan  
✅ **Type-Safe** - Full TypeScript support  
✅ **Modern Stack** - Next.js 16 App Router, React 19, Tailwind CSS 4  
✅ **Clean Imports** - Path aliases untuk import yang rapi  
✅ **Well Documented** - Dokumentasi lengkap dan terstruktur  
✅ **Industry Standard** - Mengikuti best practices

## Struktur Proyek

```
pekan-it/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── api/                      # API routes
│   │   │   └── pendaftaran/          # Registration API
│   │   ├── detail-semantik/          # Event detail page
│   │   ├── pendaftaran/              # Registration page
│   │   ├── pendaftaran-ditutup/      # Registration closed page
│   │   ├── terimakasih/              # Thank you page
│   │   ├── test-form/                # Form testing page
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Home page
│   │   └── globals.css               # Global styles
│   │
│   ├── components/                   # React components
│   │   ├── features/                 # Feature-specific components
│   │   │   ├── home/                 # Home page components
│   │   │   │   ├── About.tsx
│   │   │   │   ├── Events.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── Mascot.tsx
│   │   │   │   ├── Tema.tsx
│   │   │   │   ├── Timeline.tsx
│   │   │   │   └── index.ts
│   │   │   ├── pendaftaran/          # Registration components
│   │   │   │   ├── FormCard.tsx
│   │   │   │   ├── FormPendaftaran.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── Syarat.tsx
│   │   │   │   ├── syarat1.tsx
│   │   │   │   └── index.ts
│   │   │   └── detail-semantik/      # Event detail components
│   │   │       ├── Guide.tsx
│   │   │       ├── Hero.tsx
│   │   │       ├── Highlight.tsx
│   │   │       ├── Inside.tsx
│   │   │       ├── Journey.tsx
│   │   │       ├── tes.tsx
│   │   │       └── index.ts
│   │   ├── layout/                   # Layout components
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── index.ts
│   │   └── ui/                       # Reusable UI components
│   │       ├── GlobalLoader.tsx
│   │       ├── TablerArrowUp.tsx
│   │       └── index.ts
│   │
│   ├── lib/                          # Utility functions
│   │   ├── utils.ts
│   │   └── index.ts
│   │
│   ├── types/                        # TypeScript type definitions
│   │   └── index.ts
│   │
│   └── config/                       # Configuration files
│       ├── constants.ts
│       └── index.ts
│
├── public/                           # Static assets
│   ├── images/                       # Image files
│   └── files/                        # Document files
│
└── ...config files

```

## Teknologi

- Next.js 16.2.2 (App Router)
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- Cloudflare Turnstile (untuk captcha)

## Instalasi

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Project ini dikonfigurasi untuk static export dengan base path `/pekan-it`.

## Struktur Import

Gunakan path aliases untuk import yang lebih bersih:

```typescript
// Components
import { Navbar, Footer } from '@/components/layout';
import { Hero, About } from '@/components/features/home';
import { GlobalLoader } from '@/components/ui';

// Utils & Config
import { cn } from '@/lib';
import { CONSTANTS } from '@/config';

// Types
import type { FormData } from '@/types';
```

## Konvensi Penamaan

- Components: PascalCase (e.g., `FormCard.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Constants: UPPER_SNAKE_CASE
- Files: kebab-case untuk pages, PascalCase untuk components
