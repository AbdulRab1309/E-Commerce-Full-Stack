import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/chrome/Navbar";
import Footer from "@/components/chrome/Footer";
import ScrollToTop from "@/components/chrome/ScrollToTop";
import CursorDot from "@/components/ui/CursorDot";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ECHO. — Embedded Electronics, Unfiltered",
  description:
    "A curated drop of embedded electronics. Microcontrollers, sensors, and the boards that build the things you actually want to build.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="white" className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('echo-theme');if(!t||['red','white','black'].indexOf(t)===-1)t='white';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','white');}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main className="min-h-[calc(100vh-80px)]">{children}</main>
        <Footer />
        <ScrollToTop />
        <CursorDot />
      </body>
    </html>
  );
}
