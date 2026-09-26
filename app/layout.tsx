import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClippyAssistant from "./components/ClippyAssistant";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hussein Saleh | Instructional Designer",
  description:
    "Portfolio of Hussein Saleh — instructional designer crafting clear, engaging, and effective learning experiences.",
  keywords: [
    "instructional design",
    "e-learning",
    "curriculum",
    "LMS",
    "authoring tools",
    "portfolio",
  ],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        {children}
        <ClippyAssistant />
      </body>
    </html>
  );
}