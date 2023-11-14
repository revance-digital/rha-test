import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "RHA Test",
  description: "Lander proof of concept",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
