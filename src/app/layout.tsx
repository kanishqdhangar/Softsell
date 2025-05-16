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
  metadataBase: new URL("https://softsell.vercel.app"), // update with your actual domain
  openGraph: {
    title: "SoftSell – Sell Unused Software Licenses Instantly",
    description:
      "Get instant quotes and fast payouts for your unused software licenses. Try SoftSell now.",
    url: "https://softsell.vercel.app",
    siteName: "SoftSell",
    images: [
      {
        url: "/og-image.png", // make sure this image exists in your /public directory
        width: 1200,
        height: 630,
        alt: "SoftSell Hero Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftSell – Sell Unused Software Licenses Instantly",
    description:
      "Instant quotes and fast payouts for your unused software licenses. Try SoftSell now.",
    images: ["/og-image.png"],
    creator: "@yourhandle", // optional, or remove if you don't use Twitter
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
        <link rel="canonical" href="https://softsell.vercel.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
