import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OPrice",
  description:
    "Track The Prices of Your Favourite Products at their Lowest and Save Big on Online Shopping.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased grainy",
          inter.className
        )}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
