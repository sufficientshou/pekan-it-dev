# Components Directory

Direktori ini berisi semua React components yang digunakan dalam aplikasi.

## Struktur

### `/features` - Feature Components
Komponen yang spesifik untuk fitur tertentu. Setiap fitur memiliki folder sendiri.

**Kapan menggunakan:**
- Komponen yang hanya digunakan untuk satu fitur spesifik
- Komponen yang memiliki business logic terkait fitur tertentu
- Komponen yang tidak akan digunakan di fitur lain

**Contoh:**
```typescript
// src/components/features/home/Hero.tsx
export default function Hero() {
  return <section>Home Hero</section>;
}
```

### `/layout` - Layout Components
Komponen layout yang digunakan di seluruh aplikasi.

**Kapan menggunakan:**
- Komponen yang digunakan di banyak halaman (Navbar, Footer, Sidebar)
- Komponen yang mengatur struktur layout halaman
- Komponen wrapper untuk layout tertentu

**Contoh:**
```typescript
// src/components/layout/Navbar.tsx
export default function Navbar() {
  return <nav>Navigation</nav>;
}
```

### `/ui` - UI Components
Komponen UI primitif yang dapat digunakan kembali di seluruh aplikasi.

**Kapan menggunakan:**
- Komponen yang sangat reusable (Button, Input, Card, Modal)
- Komponen tanpa business logic
- Komponen yang bisa digunakan di berbagai fitur

**Contoh:**
```typescript
// src/components/ui/Button.tsx
export default function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
```

## Cara Menambah Komponen Baru

### 1. Feature Component

```bash
# Buat file komponen
src/components/features/[feature-name]/ComponentName.tsx

# Update index.ts
src/components/features/[feature-name]/index.ts
```

```typescript
// ComponentName.tsx
export default function ComponentName() {
  return <div>Component</div>;
}

// index.ts
export { default as ComponentName } from './ComponentName';
```

### 2. UI Component

```bash
# Buat file komponen
src/components/ui/ComponentName.tsx

# Update index.ts
src/components/ui/index.ts
```

### 3. Layout Component

```bash
# Buat file komponen
src/components/layout/ComponentName.tsx

# Update index.ts
src/components/layout/index.ts
```

## Best Practices

### 1. Gunakan Barrel Exports

```typescript
import { Hero, About } from '@/components/features/home';

import Hero from '@/components/features/home/Hero';
import About from '@/components/features/home/About';
```

### 2. Props dengan TypeScript

```typescript
interface Props {
  title: string;
  description?: string;
  onSubmit: () => void;
}

export default function Component({ title, description, onSubmit }: Props) {
  return <div>{title}</div>;
}
```

### 3. Default Export untuk Components

```typescript
// ✅ Good
export default function Hero() {}

// ❌ Avoid
export const Hero = () => {}
```

### 4. Naming Convention

- File: PascalCase (e.g., `FormCard.tsx`)
- Component: PascalCase (e.g., `FormCard`)
- Props Interface: `Props` atau `[ComponentName]Props`

### 5. Component Structure

```typescript
import React from 'react';
import type { ReactNode } from 'react';

// Types
interface Props {
  children: ReactNode;
  title: string;
}

// Component
export default function MyComponent({ children, title }: Props) {
  // State
  const [isOpen, setIsOpen] = React.useState(false);
  
  // Handlers
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  // Effects
  React.useEffect(() => {
    // Side effects
  }, []);
  
  // Render
  return (
    <div onClick={handleClick}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
```

## Import Guidelines

### Order of Imports

```typescript
// 1. React & Next.js
import React from 'react';
import { useRouter } from 'next/navigation';

// 2. External libraries
import { motion } from 'framer-motion';

// 3. Internal components
import { Button } from '@/components/ui';
import { Navbar } from '@/components/layout';

// 4. Utils & Config
import { cn } from '@/lib';
import { API_URL } from '@/config';

// 5. Types
import type { User } from '@/types';

// 6. Styles
import './styles.css';
```

## Testing Components

Untuk testing, buat file test di samping komponen:

```
ComponentName.tsx
ComponentName.test.tsx
```

## Styling

Gunakan Tailwind CSS untuk styling:

```typescript
export default function Component() {
  return (
    <div className="flex items-center justify-center p-4 bg-blue-500">
      <h1 className="text-2xl font-bold text-white">Title</h1>
    </div>
  );
}
```

Untuk conditional classes, gunakan utility `cn`:

```typescript
import { cn } from '@/lib';

export default function Component({ isActive }: { isActive: boolean }) {
  return (
    <div className={cn(
      "p-4 rounded-lg",
      isActive ? "bg-blue-500" : "bg-gray-500"
    )}>
      Content
    </div>
  );
}
```
