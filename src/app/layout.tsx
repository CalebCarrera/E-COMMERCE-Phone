import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbard from "@/components/Navbard";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbard />
        {children}
      </body>
    </html>
  );
}
