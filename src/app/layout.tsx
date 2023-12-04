import type { Metadata } from "next";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

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
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
