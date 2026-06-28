import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ChatProvider } from "@/components/chat-context";
import { ChatWidget } from "@/components/chat-widget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Alter | Frizerski studio Zagreb",
  description:
    "Precizna umjetnost njege kose u srcu Zagreba. Ekskluzivni frizerski studio — Tina, 15+ godina iskustva. Ribnjak ulica 18.",
  keywords: [
    "frizerski salon",
    "Zagreb",
    "Studio Alter",
    "Tina",
    "balayage",
    "bojanje kose",
    "Ribnjak",
  ],
  openGraph: {
    title: "Studio Alter | Frizerski studio Zagreb",
    description: "Iskustvo koje mijenja kako se osjećate.",
    type: "website",
    locale: "hr_HR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased font-sans">
        <ChatProvider>
          {children}
          <ChatWidget />
        </ChatProvider>
      </body>
    </html>
  );
}
