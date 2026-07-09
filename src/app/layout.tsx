import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cek Di Sini Aja",
  description: "Katalog aplikasi buatan sendiri dalam satu tempat."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
