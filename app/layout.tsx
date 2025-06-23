import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

//  Dynamic import for StarCanvas
const StarCanvas = dynamic(() => import("@/components/main/StarCanvas"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viji Prabha",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-[#030014] overflow-x-hidden overflow-y-scroll min-h-screen">
        {/* Ensure StarCanvas doesn't block UI */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <StarCanvas />
        </div>

        {/*  z-50 ensures navbar is on top */}
        <div className="relative z-[100]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
