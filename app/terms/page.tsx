import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LightFix - Terms & Conditions",
  description:
    "Read the official Terms & Conditions of LightFix. Learn about your rights, responsibilities, privacy, and rules for reporting and tracking traffic light issues through our platform.",
  keywords: [
    "LightFix",
    "Terms and Conditions",
    "Privacy Policy",
    "Traffic Light Issues",
    "Signal Repair",
    "Smart City App",
    "Road Safety",
  ],
  authors: [{ name: "LightFix Team", url: "https://lightfix.me" }],
  creator: "LightFix",
  publisher: "LightFix",
  robots: "index, follow", // allow search engines

  // Open Graph (for Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "LightFix - Terms & Conditions",
    description:
      "Understand the terms of using LightFix for reporting traffic light issues, tracking complaints, and improving road safety.",
    url: "https://lightfix.me/terms",
    siteName: "LightFix",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lightfix.me/og-image.png", // replace with your image
        width: 1200,
        height: 630,
        alt: "LightFix - Safer Roads with Better Signals",
      },
    ],
  },

  // Twitter Card (for Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "LightFix - Terms & Conditions",
    description:
      "Read the rules and policies of LightFix to ensure safe and transparent traffic light issue reporting.",
    images: ["https://lightfix.me/og-image.png"], // replace with your image
    creator: "@lightfix",
  },

  // Favicon and icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Additional meta
  category: "Traffic Tech",
  applicationName: "LightFix",
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-muted-foreground leading-relaxed">
        These Terms & Conditions govern your use of <strong>LightFix</strong>. By using our
        platform, you agree to follow these rules while reporting and tracking traffic light
        problems. Please read them carefully to understand your rights, responsibilities, and our
        policies regarding the safe use of LightFix.
      </p>
    </div>
  )
}
