'use client'
import { FloatingDockDemo } from "@/components/Layout/FooterLinks";
import Header from "@/components/Layout/Header";
import Gallery from "@/components/Sections/Gallery";
import Hero from "@/components/Sections/Hero";
import Services from "@/components/Sections/Services";
import Tools from "@/components/Sections/Tools";
import { Button, Image } from "@nextui-org/react";

const page = () => {
  return <>
    <main>
      <div className="container mx-auto px-4">
        <div className="md:h-screen md:flex md:items-center md:justify-center">
          <Hero />
        </div>
        <Services />
        <Tools />
        <Gallery />
      </div>
    </main>
  </>;
};

export default page;