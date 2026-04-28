import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { IBM_Plex_Mono, IBM_Plex_Sans_Thai } from "next/font/google";
import { I18nProvider } from "@/contexts/I18nContext";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

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

const STORAGE_KEY = "portfolio_locale";

type Locale = "th" | "en";

async function getInitialLocale(): Promise<Locale> {
  const storedLocale = (await cookies()).get(STORAGE_KEY)?.value;

  if (storedLocale === "th" || storedLocale === "en") {
    return storedLocale;
  }

  const acceptLanguage = (await headers()).get("accept-language")?.toLowerCase() ?? "";

  return acceptLanguage.startsWith("th") ? "th" : "en";
}

export const metadata: Metadata = {
  title: "Yodsanon Duangkhai",
  description: "Yodsanon Duangkhai's portfolio website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLocale = await getInitialLocale();

  return (
    <html lang={initialLocale} className={`${ibmPlexMono.variable} ${ibmPlexSansThai.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans">
        <I18nProvider initialLocale={initialLocale}>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
