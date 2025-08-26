// src/app/layout.tsx
import { Montserrat, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

// Fonts (do NOT export them)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-orbitron",
});

export const metadata = {
  title: "Kasy Kluivert",
  description: "Kasy Kluivert portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${orbitron.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Sarina&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
