import type { Metadata } from "next";
import "./globals.css";
import {IBM_Plex_Mono} from "next/font/google";


const ibmPlexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"]
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
    <html lang="en">
      <body
        className={`${ibmPlexMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
