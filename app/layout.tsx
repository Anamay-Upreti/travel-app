import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "5Travel5",
  description: "travel ui ux app for camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
