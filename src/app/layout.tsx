import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revelatory Questionnaire",
  description: "An interactive, insight-driven questionnaire with visual reveals",
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

