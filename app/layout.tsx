
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/providers/Providers";
import Header from "@/components/Layout/Header";
import { FloatingDockDemo } from "@/components/Layout/FooterLinks";
import SmoothScroll from "@/components/Layout/SmoothScroll";
import Footer from "@/components/Layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import MaintenanceMode from "@/components/Layout/MaintenanceMode";

const sharpSansBold = localFont({
  src: "./fonts/SharpSansBold.woff",
  variable: "--font-sharp-sans-bold",
});

const sharpSansBoldItalic = localFont({
  src: "./fonts/SharpSansBoldItalic.woff",
  variable: "--font-sharp-sans-bold-italic",
});



const sharpSansItalic = localFont({
  src: "./fonts/SharpSansItalic.woff",
  variable: "--font-sharp-sans-italic",
});

const sharpSansLight = localFont({
  src: "./fonts/SharpSansLight.woff",
  variable: "--font-sharp-sans-light",
});

const sharpSansLightItalic = localFont({
  src: "./fonts/SharpSansLightItalic.woff",
  variable: "--font-sharp-sans-light-italic",
});

const sharpSansMedium = localFont({
  src: "./fonts/SharpSansMedium.woff",
  variable: "--font-sharp-sans-medium",
});

const sharpSansMediumItalic = localFont({
  src: "./fonts/SharpSansMediumItalic.woff",
  variable: "--font-sharp-sans-medium-italic",
});

const sharpSansSemiBold = localFont({
  src: "./fonts/SharpSansSemibold.woff",
  variable: "--font-sharp-sans-semi-bold",
});

const sharpSansSemiBoldItalic = localFont({
  src: "./fonts/SharpSansSemiboldItalic.woff",
  variable: "--font-sharp-sans-semi-bold-italic",
});

const sharpSansThin = localFont({
  src: "./fonts/SharpSansThin.woff",
  variable: "--font-sharp-sans-thin",
});

const sharpSansThinItalic = localFont({
  src: "./fonts/SharpSansThinItalic.woff",
  variable: "--font-sharp-sans-thin-italic",
});

const RoustelRegular = localFont({
  src: "./fonts/RoustelRegular.woff",
  variable: "--font-RoustelRegular",
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
        url: "https://res.cloudinary.com/dtpsyi5am/image/upload/v1733762637/tfb58qvoa3xuudj4rjw9.jpg",
        alt: "Farah Studio"
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
        url: "https://res.cloudinary.com/dtpsyi5am/image/upload/v1733762637/tfb58qvoa3xuudj4rjw9.jpg",
        alt: "Farah Studio"
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
  const isUnderMaintenance = true;
  if (isUnderMaintenance) {
    return (
      <html lang="en" className='dark'>
        <body
          className={`
            ${sharpSansBold.variable}
            ${sharpSansBoldItalic.variable}
            
            ${sharpSansItalic.variable}
            ${sharpSansLight.variable}
            ${sharpSansLightItalic.variable}
            ${sharpSansMedium.variable}
            ${sharpSansMediumItalic.variable}
            ${sharpSansSemiBold.variable}
            ${sharpSansSemiBoldItalic.variable}
            ${sharpSansThin.variable}
            ${sharpSansThinItalic.variable}
            ${RoustelRegular.variable}
            antialiased
            bg-[#0E100F]
            text-[#FEFCE1]
             min-h-[100dvh]
              overflow-x-hidden
              relative
            `}
        >
          <Providers>
            <SmoothScroll>
              {/* <Header /> */}
              <MaintenanceMode />
              <Analytics />
            </SmoothScroll>
            {/* <FloatingDockDemo /> */}
            {/* <Footer /> */}
          </Providers>
        </body>
      </html>
    );
  }
  return (
    <html lang="en" className='dark'>
      <body
        className={`
          ${sharpSansBold.variable}
          ${sharpSansBoldItalic.variable}
          
          ${sharpSansItalic.variable}
          ${sharpSansLight.variable}
          ${sharpSansLightItalic.variable}
          ${sharpSansMedium.variable}
          ${sharpSansMediumItalic.variable}
          ${sharpSansSemiBold.variable}
          ${sharpSansSemiBoldItalic.variable}
          ${sharpSansThin.variable}
          ${sharpSansThinItalic.variable}
          ${RoustelRegular.variable}
          antialiased
          bg-[#0E100F]
          text-[#FEFCE1]
           min-h-[100dvh]
            overflow-x-hidden
            relative
          `}
      >
        <Providers>
          <SmoothScroll>
            {/* <Header /> */}
            {children}
            <Analytics />
          </SmoothScroll>
          {/* <FloatingDockDemo /> */}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
