import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans_Thai } from "next/font/google";
import { I18nProvider } from "@/contexts/I18nContext";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ["400", "500", "600", "700"],
  subsets: ["thai"],
  variable: "--font-thai",
});

export const metadata: Metadata = {
  title: "YodsanonDK",
  description: "YodsanonDK's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${ibmPlexSansThai.variable} h-full antialiased scroll-smooth`}>
      <body className={`min-h-full flex flex-col font-sans ${ibmPlexMono.className}`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
