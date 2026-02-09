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
  title: "FCアニース京都オフィシャルサイト｜京都社会人サッカー1部",
  description: "京都府社会人サッカー1部リーグに所属するFCアニース京都は、京都府向日市に本拠地を置くアマチュアサッカーチームです。創設30年。向日市を拠点に、京都市・乙訓地域の情熱を背負い、FCアニースは再び加速する。",
  verification: {
    google: "hl6nc__17T2aoWGOZ9gjFNe7mif8oC129zuHEiyS22c",
  },
};

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
      </body>
    </html>
  );
}
