# AGENTS.md - Photovault Development Guide

This document provides guidelines for agentic coding tools working on the Photovault codebase.

## Tech Stack

- **Framework**: Next.js 16.1.4
- **Language**: TypeScript 5.x
- **UI**: Radix UI, Tailwind CSS, shadcn/ui components
- **Database**: Dexie (IndexedDB), Supabase (planned)
- **Encryption**: tweetnacl (client-side encryption)
- **State Management**: React Query, React Hook Form, Zustand (if added)

## Build/Lint/Test Commands

### Development

```bash
npm run dev  # Starts Next.js development server
```

### Build

```bash
npm run build  # Creates production build
npm run start  # Starts production server
```

### Testing

- **Playwright**: Used for E2E testing

```bash
npx playwright test  # Run all tests
npx playwright test path/to/test.spec.ts  # Run specific test file
npx playwright test --ui  # Run tests with UI
```

### Type Checking

```bash
npx tsc --noEmit  # Run TypeScript type checking
```

### Formatting

```bash
npx prettier --write .  # Format all files
npx prettier --check .  # Check formatting
```

## Code Style Guidelines

### Imports

- Use absolute imports with `@/*` alias (configured in tsconfig.json)
- Group imports: external libraries, local utilities, components, types
- Avoid wildcard imports (`import * as`) unless necessary

```typescript
// Good
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Avoid
import * as React from "react";
```

### Formatting

- Use Prettier for consistent formatting
- 2-space indentation
- Single quotes for strings
- Trailing commas in multi-line objects/arrays
- No semicolons (except where required)

### TypeScript

- Strict mode enabled in tsconfig.json
- Explicit return types for public functions
- Use interfaces for object shapes
- Prefer `type` for unions and complex types
- Avoid `any` - use `unknown` with type guards

```typescript
// Good
interface User {
  id: string;
  name: string;
  email?: string;
}

function getUser(id: string): User | null {
  // ...
}

// Avoid
function getUser(id) {
  // No type annotation
  // ...
}
```

### Naming Conventions

- **Components**: PascalCase (e.g., `PhotoGallery.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useEncryption.ts`)
- **Utilities**: camelCase (e.g., `cn()` in utils.ts)
- **Types/Interfaces**: PascalCase (e.g., `EncryptionKey`)
- **Constants**: UPPER_CASE (e.g., `STORAGE_KEY`)
- **Test files**: `*.test.ts` or `*.spec.ts`

### Error Handling

- Use try/catch for async operations
- Provide meaningful error messages
- Handle edge cases (null/undefined checks)
- Use optional chaining and nullish coalescing where appropriate

```typescript
// Good
try {
  const result = await someOperation();
  if (!result) {
    throw new Error("Operation returned empty result");
  }
  return result;
} catch (error) {
  console.error("Operation failed:", error);
  return null;
}

// Avoid
try {
  return await someOperation();
} catch {}
```

### Component Structure

- Use shadcn/ui patterns for consistent components
- Extract complex logic to custom hooks
- Use TypeScript interfaces for props
- Follow Radix UI accessibility patterns

```typescript
// Good component structure
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline";
  size?: "sm" | "default" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    // Implementation
  },
);
```

### Encryption Patterns

- All sensitive data must be encrypted client-side before storage
- Use tweetnacl for cryptographic operations
- Store only encrypted data in IndexedDB/localStorage
- Never log sensitive data or encryption keys

```typescript
// Good encryption pattern
const { encrypted, nonce } = await encryptFile(file, secretKey);
// Store encrypted blob and nonce separately

// Avoid
console.log("Secret key:", secretKey); // Never log keys
```

### State Management

- Use React Query for server state
- Use React context or Zustand for client state
- Keep component state local when possible
- Avoid prop drilling with context providers

### File Organization

- `src/components/ui/` - UI components (shadcn)
- `src/components/features/` - Feature-specific components
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utilities and core logic
- `src/app/` - Next.js pages and routing

### Documentation

- Add JSDoc comments for public functions and components
- Document encryption flows and security considerations
- Keep README.md updated with setup instructions

### Security Considerations

- Never commit secrets or API keys
- All user data must be encrypted before storage
- Use environment variables for sensitive configuration
- Validate all user inputs
- Implement proper error handling without exposing sensitive info

## Project-Specific Patterns

### Client-Side Encryption

Photovault implements end-to-end encryption:

1. Generate key pair using `generateKeyPair()`
2. Encrypt files with `encryptFile()` before storage
3. Store encrypted blobs with associated nonce
4. Decrypt with `decryptFile()` when needed

### IndexedDB Storage

- Use Dexie for IndexedDB operations
- Store only encrypted data
- Implement proper error handling for storage operations

### Testing Strategy

- Playwright for E2E tests
- Focus on encryption/decryption flows
- Test edge cases (empty files, invalid keys)
- Verify UI interactions with encrypted data

## Common Pitfalls

1. **Encryption Key Management**: Never store unencrypted keys
2. **Type Safety**: Always use proper TypeScript types
3. **Error Handling**: Don't swallow errors silently
4. **Performance**: Be mindful of large file encryption in browser
5. **Storage Limits**: IndexedDB has size limitations

## Example Component Structure

```typescript
// src/components/features/gallery/PhotoCard.tsx
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useEncryption } from "@/hooks/use-encryption"

interface PhotoCardProps {
  photoId: string
  thumbnail: string
  onDelete: () => void
}

export function PhotoCard({ photoId, thumbnail, onDelete }: PhotoCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { decryptFile } = useEncryption()

  const handleDownload = async () => {
    try {
      setIsLoading(true)
      // Decryption logic here
    } catch (error) {
      console.error("Download failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative group">
      <img src={thumbnail} alt="Photo" className="w-full h-auto" />
      <div className="absolute bottom-2 right-2 flex gap-2">
        <Button size="sm" onClick={handleDownload} disabled={isLoading}>
          Download
        </Button>
        <Button size="sm" variant="destructive" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  )
}
```

## Working with This Codebase

1. **Understand the encryption flow** before modifying storage logic
2. **Follow existing patterns** for components and hooks
3. **Test encryption/decryption** thoroughly
4. **Use TypeScript** for all new code
5. **Keep components** focused and composable
6. **Document security decisions** clearly

This guide should help maintain consistency and security throughout the Photovault codebase.
