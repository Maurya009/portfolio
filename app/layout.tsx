import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import ChatWidgetGate from "@/components/ChatWidgetGate";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Suraj Maurya is a Full-Stack Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
  keywords: [
    "Suraj Maurya",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Frontend Developer",
  ],
  authors: [
    {
      name: profile.name,
    },
  ],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="top" className="min-h-screen font-sans">
        <Nav />
        <main>{children}</main>
        <ChatWidgetGate />
      </body>
    </html>
  );
}