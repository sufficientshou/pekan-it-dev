# API Routes

Folder ini berisi API routes untuk aplikasi.

## Struktur

- `pendaftaran/` - API endpoint untuk proses pendaftaran

## Cara Membuat API Route Baru

1. Buat folder baru di dalam `src/app/api/`
2. Buat file `route.ts` di dalam folder tersebut
3. Export fungsi handler (GET, POST, PUT, DELETE, dll)

Contoh:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello' });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ data: body });
}
```
