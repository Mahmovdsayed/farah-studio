import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/Providers/Providers";
import NavBar from "@/components/Layout/NavBar";

// Define Instrument_Serif font
const instrumentSerifRegular = localFont({
  src: "./fonts/Instrument_Serif/InstrumentSerif-Regular.ttf",
  variable: "--font-instrument-serif-regular",
  weight: "400",
});

const instrumentSerifItalic = localFont({
  src: "./fonts/Instrument_Serif/InstrumentSerif-Italic.ttf",
  variable: "--font-instrument-serif-italic",
  weight: "400",
  style: "italic",
});

// Define Space_Grotesk font
const spaceGroteskLight = localFont({
  src: "./fonts/Space_Grotesk/SpaceGrotesk-Light.ttf",
  variable: "--font-space-grotesk-light",
  weight: "300",
});

const spaceGroteskRegular = localFont({
  src: "./fonts/Space_Grotesk/SpaceGrotesk-Regular.ttf",
  variable: "--font-space-grotesk-regular",
  weight: "400",
});

const spaceGroteskMedium = localFont({
  src: "./fonts/Space_Grotesk/SpaceGrotesk-Medium.ttf",
  variable: "--font-space-grotesk-medium",
  weight: "500",
});

const spaceGroteskSemiBold = localFont({
  src: "./fonts/Space_Grotesk/SpaceGrotesk-SemiBold.ttf",
  variable: "--font-space-grotesk-semibold",
  weight: "600",
});

const spaceGroteskBold = localFont({
  src: "./fonts/Space_Grotesk/SpaceGrotesk-Bold.ttf",
  variable: "--font-space-grotesk-bold",
  weight: "700",
});
const metadataBase = new URL('https://farah-studio.vercel.app/');

export const metadata: Metadata = {
  metadataBase,
  title: "Farah Studio",
  description: "Farah Studio is a one-man brand and website design studio that makes easy-to-use websites. We help businesses create websites without the need for complex coding.",
  keywords: "website design, brand design, user-friendly websites, custom websites, web development, small business websites, responsive design, modern web design, digital solutions, website creation, e-commerce solutions, website optimization, creative studio, design agency, web design studio, branding services, online presence, digital marketing, custom web applications, affordable web design , farah studio , farah-studio",
  creator: "Mahmoud Sayed",
  openGraph: {
    title: "Farah Studio",
    description: "Farah Studio is a one-man brand and website design studio that makes easy-to-use websites. We help businesses create websites without the need for complex coding.",
    url: "https://farah-studio.vercel.app/",
    siteName: "Farah Studio",
    images: [
      {
        url: "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1730709793/j33trosxakvccmbmg9ct.jpg",
        width: 1200,
        height: 630,
        alt: "Farah Studio Overview"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farah Studio",
    description: "Farah Studio is a one-man brand and website design studio that makes easy-to-use websites. We help businesses create websites without the need for complex coding.",
    images: [
      {
        url: "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1730709793/j33trosxakvccmbmg9ct.jpg",
        width: 1200,
        height: 630,
        alt: "Farah Studio Overview"
      }
    ],
  },
  manifest: "/manifest.json",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${instrumentSerifRegular.variable} 
          ${instrumentSerifItalic.variable} 
          ${spaceGroteskLight.variable} 
          ${spaceGroteskRegular.variable} 
          ${spaceGroteskMedium.variable} 
          ${spaceGroteskSemiBold.variable} 
          ${spaceGroteskBold.variable} 
          antialiased
          bg-[#EEEBE1]
          min-h-[100dvh]
          overflow-x-hidden
          text-[#2B2B2B]
        `}
      >
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
