import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import Script from "next/script";
import { TRACKING, COMPANY } from "@/lib/constants";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://builtbybrio.com"),
  title: {
    default: "BRIO Construction | Vancouver Renovations & Custom Homes",
    template: "%s | BRIO Construction",
  },
  description: COMPANY.description,
  icons: { icon: "/favicon.png" },
  openGraph: {
    siteName: COMPANY.name,
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={`${sora.variable} ${inter.variable}`}>
      <head>
        {/* GA4 + Google Ads */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING.ga4Id}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${TRACKING.ga4Id}');gtag('config','${TRACKING.gadsId}');`}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${TRACKING.clarityId}");`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
