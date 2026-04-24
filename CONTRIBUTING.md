# Contributing Guide

Terima kasih telah berkontribusi pada proyek Pekan IT! Dokumen ini berisi panduan untuk berkontribusi.

## Getting Started

### Prerequisites

- Node.js 20 atau lebih tinggi
- npm atau yarn
- Git

### Setup Development Environment

1. Clone repository
```bash
git clone <repository-url>
cd pekan-it
```

2. Install dependencies
```bash
npm install
```

3. Copy environment variables
```bash
cp .env.example .env.local
```

4. Isi nilai environment variables di `.env.local`

5. Run development server
```bash
npm run dev
```

## Project Structure

Lihat [STRUCTURE.md](./STRUCTURE.md) untuk detail lengkap struktur proyek.

## Coding Standards

### TypeScript

- Gunakan TypeScript untuk semua file baru
- Definisikan types/interfaces untuk props dan data
- Hindari penggunaan `any`

```typescript
// ✅ Good
interface Props {
  title: string;
  count: number;
}

// ❌ Avoid
interface Props {
  title: any;
  count: any;
}
```

### Components

- Gunakan functional components dengan hooks
- Default export untuk components
- Named export untuk utilities

```typescript
// ✅ Good
export default function MyComponent() {}

// ❌ Avoid
export const MyComponent = () => {}
```

### Naming Conventions

- **Files**: PascalCase untuk components (`Hero.tsx`), camelCase untuk utilities (`utils.ts`)
- **Components**: PascalCase (`FormCard`)
- **Functions**: camelCase (`handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`)
- **Types/Interfaces**: PascalCase (`FormData`, `IUser`)

### Import Order

```typescript
// 1. External dependencies
import React from 'react';
import { useRouter } from 'next/navigation';

// 2. Internal components
import { Navbar } from '@/components/layout';

// 3. Utils & Config
import { cn } from '@/lib';

// 4. Types
import type { FormData } from '@/types';

// 5. Styles
import './styles.css';
```

### Styling

- Gunakan Tailwind CSS
- Hindari inline styles kecuali untuk dynamic values
- Gunakan utility `cn` untuk conditional classes

```typescript
// ✅ Good
<div className="flex items-center p-4 bg-blue-500">

// ✅ Good untuk dynamic values
<div style={{ background: dynamicColor }}>

// ❌ Avoid
<div style={{ display: 'flex', padding: '16px' }}>
```

## Git Workflow

### Branch Naming

- `feature/` - Fitur baru (e.g., `feature/add-payment`)
- `fix/` - Bug fixes (e.g., `fix/form-validation`)
- `refactor/` - Refactoring (e.g., `refactor/api-structure`)
- `docs/` - Documentation (e.g., `docs/update-readme`)

### Commit Messages

Gunakan format conventional commits:

```
type(scope): subject

body (optional)

footer (optional)
```

Types:
- `feat`: Fitur baru
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, missing semicolons, etc
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

Contoh:
```
feat(pendaftaran): add email validation

- Add email format validation
- Add error message display
- Update form submission logic

Closes #123
```

### Pull Request Process

1. Buat branch dari `main`
```bash
git checkout -b feature/your-feature
```

2. Commit changes dengan conventional commits
```bash
git commit -m "feat: add new feature"
```

3. Push ke repository
```bash
git push origin feature/your-feature
```

4. Buat Pull Request dengan:
   - Deskripsi jelas tentang perubahan
   - Screenshot jika ada perubahan UI
   - Link ke issue terkait
   - Checklist testing yang sudah dilakukan

5. Request review dari maintainer

6. Address review comments jika ada

7. Setelah approved, PR akan di-merge

## Adding New Features

### 1. Buat Feature Component

```bash
# Buat folder feature
mkdir -p src/components/features/my-feature

# Buat komponen
touch src/components/features/my-feature/MyComponent.tsx
touch src/components/features/my-feature/index.ts
```

### 2. Buat Page

```bash
# Buat folder page
mkdir -p src/app/my-feature

# Buat page
touch src/app/my-feature/page.tsx
```

### 3. Update Exports

```typescript
// src/components/features/my-feature/index.ts
export { default as MyComponent } from './MyComponent';
```

### 4. Gunakan di Page

```typescript
// src/app/my-feature/page.tsx
import { MyComponent } from '@/components/features/my-feature';

export default function MyFeaturePage() {
  return <MyComponent />;
}
```

## Testing

### Manual Testing Checklist

Sebelum submit PR, pastikan:

- [ ] Fitur berfungsi di development mode
- [ ] Fitur berfungsi setelah build (`npm run build`)
- [ ] Tidak ada TypeScript errors
- [ ] Tidak ada console errors
- [ ] Responsive di mobile, tablet, dan desktop
- [ ] Accessible (keyboard navigation, screen reader)

### Running Tests

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build
npm run build
```

## Code Review Guidelines

### Untuk Reviewer

- Berikan feedback yang konstruktif
- Fokus pada code quality, bukan personal preference
- Approve jika tidak ada blocking issues
- Request changes jika ada issues yang harus diperbaiki

### Untuk Author

- Terima feedback dengan terbuka
- Jelaskan reasoning jika tidak setuju dengan feedback
- Update code berdasarkan feedback
- Re-request review setelah update

## Questions?

Jika ada pertanyaan, silakan:
- Buka issue di repository
- Tanya di group chat tim
- Contact maintainer

## License

Dengan berkontribusi, Anda setuju bahwa kontribusi Anda akan dilisensikan sesuai dengan lisensi proyek.
