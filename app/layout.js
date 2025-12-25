import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Khaleel Alhaji — Frontend Engineer",
    default: "Khaleel Alhaji — Frontend Engineer",
  },
  description:
    "Frontend engineer designing and building clean, fast, and reliable web interfaces with a focus on clarity, usability, and long-term maintainability.",
  metadataBase: new URL("https://khaleelalhaji.info"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Khaleel Alhaji — Frontend Engineer",
    description:
      "I design and build clean, performant web interfaces focused on clarity, usability, and real business outcomes.",
    url: "https://khaleelalhaji.info",
    siteName: "Khaleel Alhaji",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khaleel Alhaji — Frontend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaleel Alhaji — Frontend Engineer",
    description:
      "Frontend engineer focused on building clean, fast, and reliable web interfaces.",
    images: ["/og-image.jpg"],
    creator: "@khaleelalhaji",
  },
  authors: [{ name: "Khaleel Alhaji", url: "https://khaleelalhaji.info" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Khaleel Alhaji",
    jobTitle: "Frontend Engineer",
    description:
      "Frontend engineer focused on building clean, performant, and maintainable web interfaces.",
    url: "https://khaleelalhaji.info",
    sameAs: [
      "https://github.com/khaleelibraheem",
      "https://x.com/khaleelalhaji",
      "https://www.instagram.com/khaleelalhaji/",
    ],
    knowsAbout: [
      "Frontend Engineering",
      "Web Performance",
      "UI Engineering",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Design Systems",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
