import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "StreetLightFix - Terms & Conditions",
  description:
    "Read the official Terms & Conditions of StreetLightFix. Learn about your rights, responsibilities, privacy, and rules for reporting and tracking street light issues through our platform.",
  keywords: [
    "StreetLightFix",
    "Terms and Conditions",
    "Privacy Policy",
    "Street Light Issues",
    "Signal Repair",
    "Smart City App",
    "Road Safety",
  ],
  authors: [{ name: "StreetLightFix Team", url: "https://streetlightfix.me" }],
  creator: "StreetLightFix",
  publisher: "StreetLightFix",
  robots: "index, follow", // allow search engines

  // Open Graph (for Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "StreetLightFix - Terms & Conditions",
    description:
      "Understand the terms of using StreetLightFix for reporting street light issues, tracking complaints, and improving road safety.",
    url: "https://streetlightfix.me/terms",
    siteName: "StreetLightFix",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://streetlightfix.me/og-image.png", // replace with your image
        width: 1200,
        height: 630,
        alt: "StreetLightFix - Safer Roads with Better Street Lights",
      },
    ],
  },

  // Twitter Card (for Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "StreetLightFix - Terms & Conditions",
    description:
      "Read the rules and policies of StreetLightFix to ensure safe and transparent street light issue reporting.",
    images: ["https://streetlightfix.me/og-image.png"], // replace with your image
    creator: "@streetlightfix",
  },

  // Favicon and icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Additional meta
  category: "Civic Tech",
  applicationName: "StreetLightFix",
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-muted-foreground leading-relaxed">
        These Terms & Conditions govern your use of <strong>StreetLightFix</strong>. By using our
        platform, you agree to follow these rules while reporting and tracking street light
        problems. Please read them carefully to understand your rights, responsibilities, and our
        policies regarding the safe use of StreetLightFix.
      </p>
    </div>
  )
}
