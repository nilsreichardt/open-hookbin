import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Hookbin",
  description: "Webhook inspector with live console and request history"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
