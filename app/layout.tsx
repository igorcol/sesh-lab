import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
// TODO -> THEME PROVIDER

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "SeshLab",
  description: "Plataforma de colaboração para projetos musicais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} font-sans bg-[#0e0e0e] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
