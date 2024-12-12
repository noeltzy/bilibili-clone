import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bilibili Clone",
  description: "A modern Bilibili clone built with Next.js and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <Sidebar />
        <main className="ml-[240px] mt-16 min-h-screen">
          <div className="container py-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
