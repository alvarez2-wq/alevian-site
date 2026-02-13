import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alevian | Stroke Therapeutics & Neuroregeneration",
  description:
    "Alevian is a preclinical-stage biotech developing ALE-001, a GDF11-based regenerative therapeutic for acute ischemic stroke with a 72-hour treatment window. Targeting a $14B US market with no approved therapies. Harvard-backed science, advancing toward Phase I clinical trials.",
  keywords: [
    "Alevian",
    "stroke therapeutics",
    "neuroregeneration",
    "GDF11",
    "ALE-001",
    "ischemic stroke treatment",
    "intracerebral hemorrhage",
    "traumatic brain injury",
    "regenerative medicine",
    "neuroprotection",
    "biotech",
    "neurology",
    "brain repair",
    "stroke recovery",
    "biotech startup",
    "biotech investment",
    "stroke research funding",
    "seed stage biotech",
    "series A biotech",
    "preclinical stage therapeutics",
    "neurology pipeline",
    "stroke drug development",
    "GDF11 clinical trials",
    "regenerative neuroscience",
    "neuroprotective drug",
    "stroke market opportunity",
    "unmet medical need stroke",
  ],
  authors: [{ name: "Alevian" }],
  creator: "Alevian",
  publisher: "Alevian",
  metadataBase: new URL("https://alevian.bio"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alevian | Regenerative Stroke Therapeutics",
    description:
      "Preclinical-stage biotech targeting a $14B market in acute stroke. ALE-001 extends the treatment window from 4.5 to 72 hours. Harvard-backed GDF11 science, entering Phase I.",
    url: "https://alevian.bio",
    siteName: "Alevian",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alevian - Stroke Therapeutics & Neuroregeneration. ALE-001 targeting $14B US market.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alevian | Regenerative Stroke Therapeutics",
    description:
      "Preclinical biotech developing ALE-001 for acute stroke. $14B US market, 72-hour treatment window, Harvard-backed science. Advancing toward Phase I.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
