import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/main/StarCanvas";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viji Prabha",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const StarCanvas = dynamic(() => import("@/components/main/StarCanvas"), {
    ssr: false,
  });
  return (
    <html lang="en">
      <body className="relative bg-[#030014] overflow-y-scroll overflow-x-hidden min-h-screen">
        <div className="pointer-events-none absolute inset-0 z-0">
          <StarCanvas />
        </div>

        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
