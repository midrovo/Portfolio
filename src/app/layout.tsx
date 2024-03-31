import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const inter = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "logo.png",
  title: "Portfolio MGI - { DEV }",
  description: "Portafolio de Proyectos",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
