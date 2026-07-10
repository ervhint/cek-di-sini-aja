import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cek Di Sini Aja",
    template: "%s"
  },
  description: "Katalog aplikasi buatan sendiri dalam satu tempat.",
  applicationName: "Cek Di Sini Aja"
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
