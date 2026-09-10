import type { Metadata } from "next";
import localFont from "next/font/local";
import { preload } from "react-dom";
import "./globals.css";
import AccentProvider from "@/components/AccentProvider";

// Subset to Latin-1 + the punctuation the site actually uses, so the render-blocking
// font payload is ~18KB per face instead of ~64KB. next/font emits the preload link
// and a metric-matched fallback, so text paints immediately instead of waiting.
const ppnmBook = localFont({
  src: "../fonts/PPNM-Book.woff2",
  variable: "--font-ppnm-book",
  weight: "400",
  display: "swap",
  adjustFontFallback: "Arial",
  fallback: ["system-ui", "-apple-system", "Helvetica Neue", "Arial", "sans-serif"],
});

const ppnmMedium = localFont({
  src: "../fonts/PPNM-Medium.woff2",
  variable: "--font-ppnm-medium",
  weight: "500",
  display: "swap",
  adjustFontFallback: "Arial",
  fallback: ["system-ui", "-apple-system", "Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masonboulier.com"),
  title: "Mason Boulier",
  description: "Mason Boulier's developer portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The wordmark is applied as a CSS mask via an inline style, which the preload scanner
  // does not pick up. This emits a single deduped preload into <head>.
  preload("/masonboulier.webp", { as: "image", type: "image/webp", fetchPriority: "high" });

  return (
    <html lang="en" className={`${ppnmBook.variable} ${ppnmMedium.variable}`}>
      <body className="antialiased">
        <AccentProvider>{children}</AccentProvider>
      </body>
    </html>
  );
}
