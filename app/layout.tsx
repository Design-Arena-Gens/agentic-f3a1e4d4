import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CX Freeze EXE Builder",
  description: "Drag and drop Python to EXE converter using CX Freeze",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
