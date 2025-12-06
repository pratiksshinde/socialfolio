import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Sidebar from "@/components/common/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SocialFolio",
  description: "Portfolio created by Pratik Shinde",
  icons: {
    icon: "/socialfolio.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar/>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
