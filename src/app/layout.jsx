import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aventure",
  description: "Aventure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:image" content="/hero-banner.webp" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
