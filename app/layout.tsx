import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "蓝鸟祝福收集站",
  description: "把祝福交给蓝鸟，它会在生日当天温柔送达。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
