import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cancer Awareness & Support",
  description: "Together we can make a difference in the fight against cancer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
