import type { Metadata } from "next";
import "./globals.css";
import AccentProvider from "@/components/AccentProvider";

export const metadata: Metadata = {
  title: "Mason Boulier",
  description: "Mason Boulier's developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`antialiased`}
      >
        <AccentProvider>
          {children}
        </AccentProvider>
      </body>
    </html>
  );
}
