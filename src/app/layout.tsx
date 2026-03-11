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
  title: "Dove Valley Timber & Fencing Supplies | UK Timber Merchant",
  description:
    "Dove Valley Timber and Fencing Supplies Ltd – your trusted local timber merchant. Supplying closeboard panels, treated timbers, sleepers, C16/C24 graded structural timber, sheet materials and more. Serving trade and DIY customers across the region since 2008.",
  keywords:
    "timber merchant, fencing supplies, closeboard panels, treated timber, C16 C24 graded timber, sleepers, sheet materials, PAR timber, local timber yard, UK fencing supplies",
  openGraph: {
    title: "Dove Valley Timber & Fencing Supplies",
    description:
      "Local timber merchant supplying trade & DIY customers since 2008. Closeboard panels, treated timbers, sleepers, graded structural timber and more.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-50 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}
