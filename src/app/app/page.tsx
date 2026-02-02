/**
 * Main Page - Uses existing PhotoVaultApp
 * SECURITY: Protected route requiring authentication
 */

import { PhotoVaultApp } from '@/components/photovault/PhotoVaultApp';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  return <PhotoVaultApp />;
}
