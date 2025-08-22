import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "中島 悠輔 | Portfolio",
  description: "Go言語とGCPによるバックエンドエンジニア。NFT・決済システム開発、DevOps・SRE経験を持つフルスタックエンジニアのポートフォリオサイトです。",
  keywords: "Go, GCP, バックエンドエンジニア, DevOps, SRE, Next.js, React, PostgreSQL",
  authors: [{ name: "中島 悠輔" }],
  openGraph: {
    title: "中島 悠輔 | Portfolio",
    description: "Go言語とGCPによるバックエンドエンジニアのポートフォリオ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
