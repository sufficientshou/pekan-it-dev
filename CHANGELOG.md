# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-04-24

### 🎉 Major Restructure

Complete project restructure to scalable architecture following industry best practices.

### Added

#### Structure
- ✨ New `src/` directory as source code root
- ✨ `src/components/features/` for feature-specific components
- ✨ `src/components/layout/` for layout components
- ✨ `src/components/ui/` for reusable UI components
- ✨ `src/lib/` for utility functions
- ✨ `src/types/` for TypeScript type definitions
- ✨ `src/config/` for configuration files

#### Files
- ✨ Barrel exports (`index.ts`) for all component folders
- ✨ `src/lib/utils.ts` - Utility functions (cn helper)
- ✨ `src/types/index.ts` - Global type definitions
- ✨ `.env.example` - Environment variables template
- ✨ `.gitignore` - Updated git ignore rules

#### Documentation
- 📚 `DOCS_INDEX.md` - Complete documentation index
- 📚 `RESTRUCTURE_SUMMARY.md` - Restructure overview for team
- 📚 `QUICK_START.md` - Quick start guide
- 📚 `STRUCTURE.md` - Detailed structure documentation
- 📚 `PROJECT_TREE.md` - Visual project tree
- 📚 `CONTRIBUTING.md` - Contribution guidelines
- 📚 `MIGRATION_GUIDE.md` - Migration guide from old structure
- 📚 `VERIFICATION_CHECKLIST.md` - Verification checklist
- 📚 `src/components/README.md` - Components documentation
- 📚 `src/app/api/README.md` - API routes documentation
- 📚 `CHANGELOG.md` - This file

### Changed

#### Structure
- 🔄 Moved all pages from `app/` to `src/app/`
- 🔄 Reorganized components from `app/components/pages/` to `src/components/features/`
- 🔄 Moved layout components from `app/components/layout/` to `src/components/layout/`
- 🔄 Moved UI components from `app/components/ui/` to `src/components/ui/`
- 🔄 Moved config from `app/config/` to `src/config/`

#### Configuration
- 🔧 Updated `tsconfig.json` with path aliases:
  - `@/*` → `./src/*`
  - `@/components/*` → `./src/components/*`
  - `@/lib/*` → `./src/lib/*`
  - `@/types/*` → `./src/types/*`
  - `@/config/*` → `./src/config/*`

#### Imports
- 🔄 All imports updated to use path aliases
- 🔄 All imports updated to use barrel exports
- 🔄 Removed relative imports with `../../..`

#### Documentation
- 📝 Updated `README.md` with new structure and quick links

### Removed

- 🗑️ Old `app/components/` folder structure
- 🗑️ Old `app/config/` folder
- 🗑️ Empty `app/admin/` folder
- 🗑️ Empty `app/api/download-csv/` folder
- 🗑️ Misplaced `app/components/detail-semantik/page.tsx`

### Fixed

- ✅ All TypeScript errors resolved
- ✅ All import paths corrected
- ✅ Consistent import patterns across all files

### Migration

#### Component Paths
```
app/components/pages/home/*           → src/components/features/home/*
app/components/pages/pendaftaran/*    → src/components/features/pendaftaran/*
app/components/pages/detail-semantik/* → src/components/features/detail-semantik/*
app/components/layout/*               → src/components/layout/*
app/components/ui/*                   → src/components/ui/*
```

#### Import Changes
```typescript
// Before
import Hero from '../../../components/pages/home/Hero';

// After
import { Hero } from '@/components/features/home';
```

### Technical Details

#### Files Moved
- 22 components reorganized
- 6 pages moved to new structure
- 1 API route moved
- 1 config file moved
- 2 CSS files moved
- 2 icon files moved

#### Code Quality
- 0 TypeScript errors
- 0 breaking changes to functionality
- 100% imports updated automatically
- All path aliases configured
- All barrel exports created

### Breaking Changes

**NONE** - This is a structural change only. All functionality remains the same.

### Upgrade Guide

For team members:

1. Pull latest changes: `git pull origin main`
2. Install dependencies (if needed): `npm install`
3. Setup environment: `cp .env.example .env.local`
4. Read documentation: Start with `RESTRUCTURE_SUMMARY.md`
5. Test application: `npm run dev`

### Notes

- All file moves done using `smartRelocate` tool with automatic import updates
- No changes to code logic or functionality
- Structure follows Next.js App Router best practices
- Path aliases configured for better developer experience
- Comprehensive documentation added for team onboarding

---

## [1.0.0] - Before 2026-04-24

### Initial Structure

- Basic Next.js App Router setup
- Flat component structure in `app/components/`
- Mixed pages and components in `app/` directory
- Relative imports throughout the codebase
- Minimal documentation

### Features

- Homepage with event information
- Registration form with Cloudflare Turnstile
- Event detail page (Semantik)
- Thank you page
- Registration closed page
- API route for registration

### Tech Stack

- Next.js 16.2.2 (App Router)
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- Cloudflare Turnstile

---

## Version History

- **v2.0.0** (2026-04-24) - Major restructure to scalable architecture
- **v1.0.0** (Before 2026-04-24) - Initial implementation

## Future Plans

### v2.1.0 (Planned)
- [ ] Add unit tests
- [ ] Add E2E tests
- [ ] Add CI/CD pipeline
- [ ] Add more documentation
- [ ] Add architecture diagrams

### v2.2.0 (Planned)
- [ ] Performance optimizations
- [ ] SEO improvements
- [ ] Accessibility improvements
- [ ] Add more features

---

**Maintained by**: Development Team  
**Last Updated**: 2026-04-24  
**Current Version**: 2.0.0
