import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amir Madjour | Creative Developer",
  description:
    "Creative Developer specializing in immersive web experiences, interactive animations, and cutting-edge frontend development.",
  keywords: [
    "creative developer",
    "frontend developer",
    "web developer",
    "react",
    "next.js",
    "framer motion",
    "webgl",
    "portfolio",
  ],
  authors: [{ name: "Amir Madjour" }],
  openGraph: {
    title: "Amir Madjour | Creative Developer",
    description:
      "Creative Developer specializing in immersive web experiences and interactive animations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
