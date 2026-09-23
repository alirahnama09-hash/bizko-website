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

export const metadata: Metadata = {
  metadataBase: new URL("https://bizko.ir"),
  title: {
    default: "بیزکو",
    template: "%s | بیزکو",
  },
  description:
    "گروه نرم‌افزاری بیزکو — نرم‌افزارهای مدیریت فروشگاه و رستوران (بیزکو مارکت و بیزکوفود)",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}