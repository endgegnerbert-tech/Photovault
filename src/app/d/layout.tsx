/**
 * Chameleon Routes Layout
 *
 * Minimal layout for stealth/disguise pages.
 * NO PhotoVault branding, NO navigation, NO footer.
 *
 * SECURITY:
 * - robots: noindex, nofollow, noarchive
 * - No identifiable app branding
 * - Looks like a standalone web app
 */

import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  // Prevent search engine indexing
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
  // Generic title/description that doesn't reveal the app
  title: 'Content',
  description: '',
  // Prevent referrer leakage
  referrer: 'no-referrer',
};

export default function ChameleonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional security headers */}
        <meta name="referrer" content="no-referrer" />
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      </head>
      <body className="min-h-screen antialiased">
        {/* NO Navigation, NO Footer, NO PhotoVault branding */}
        {/* Pure content only */}
        {children}
      </body>
    </html>
  );
}
