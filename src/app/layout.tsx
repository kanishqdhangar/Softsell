import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata = {
  title: "SoftSell – Sell Unused Software Licenses Instantly",
  description:
    "Get the best value for your unused software licenses. Instant quote, secure process, and fast payouts with SoftSell.",
  keywords: [
    "sell software licenses",
    "unused software resale",
    "instant license quote",
    "software license marketplace",
    "SoftSell",
  ],
  authors: [{ name: "SoftSell Team" }],
  creator: "SoftSell",
  metadataBase: new URL("https://softsell-alpha-amber.vercel.app/"), 
  openGraph: {
    title: "SoftSell – Sell Unused Software Licenses Instantly",
    description:
      "Get instant quotes and fast payouts for your unused software licenses. Try SoftSell now.",
    url: "https://softsell-alpha-amber.vercel.app/",
    siteName: "SoftSell",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "SoftSell Hero Banner",
      },
    ],
    locale: "en_US",
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
      <head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://softsell-alpha-amber.vercel.app/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
