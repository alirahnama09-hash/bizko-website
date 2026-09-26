import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const vazirmatn = localFont({
  src: "./fonts/Vazirmatn[wght].woff2",
  variable: "--font-vazirmatn",
  display: "swap",
});

const estedad = localFont({
  src: "./fonts/Estedad[wght].woff2",
  variable: "--font-estedad",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bizko.ir"),
  title: {
    default: "بیزکو",
    template: "%s | بیزکو",
  },
  description:
    "گروه نرم‌افزاری بیزکو — نرم‌افزارهای مدیریت فروشگاه و رستوران (بیزکو مارکت و بیزکوفود)",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bizko.ir/#organization",
      name: "بیزکو",
      alternateName: "Bizko",
      url: "https://bizko.ir/",
      logo: {
        "@type": "ImageObject",
        url: "https://bizko.ir/bizko-logo.png",
      },
      email: "info@bizko.ir",
      telephone: "+989381979753",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+989381979753",
        email: "info@bizko.ir",
        contactType: "customer service",
        areaServed: "IR",
        availableLanguage: ["fa"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://bizko.ir/#website",
      url: "https://bizko.ir/",
      name: "بیزکو | نرم‌افزارهای مدیریت کسب‌وکار",
      inLanguage: "fa-IR",
      publisher: { "@id": "https://bizko.ir/#organization" },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${estedad.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}