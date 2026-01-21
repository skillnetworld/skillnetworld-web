import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SkillNetWorld | Master the Skills of Tomorrow",
    template: "%s | SkillNetWorld"
  },
  description: "SkillNetWorld is a leading skill development platform offering expert-led courses in AI, Web Development, Data Science, and more. NIELIT certified courses and industry-focused training.",
  keywords: ["SkillNetWorld", "Online Courses", "AI Training", "Web Development", "Data Science", "NIELIT Courses", "Skill Development India"],
  authors: [{ name: "SkillNetWorld Team" }],
  creator: "SkillNetWorld",
  publisher: "SkillNetWorld",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://skillnetworld-web.vercel.app"),
  openGraph: {
    title: "SkillNetWorld | Master the Skills of Tomorrow",
    description: "Upgrade your career with expert-led courses and industry-recognized certifications.",
    url: "https://skillnetworld-web.vercel.app",
    siteName: "SkillNetWorld",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillNetWorld | Master the Skills of Tomorrow",
    description: "Upgrade your career with expert-led courses and industry-recognized certifications.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo.png",
  },
};

import FloatingContact from "@/components/ui/FloatingContact";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
