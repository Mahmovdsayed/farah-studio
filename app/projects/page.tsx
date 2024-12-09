import Projects from "@/components/Sections/Projects";
import { Metadata } from "next";

export async function generateMetadata({
}: {
    }): Promise<Metadata> {
    return {
        title: "Farah Studio | Projects",
        description: "Explore a collection of captivating reels and social media designs created with precision and creativity. Showcasing unique projects tailored for impactful digital presence.",

        openGraph: {
            title: "Farah Studio | Projects",
            description: "Dive into a portfolio of reels and social media designs crafted to elevate your online brand with eye-catching visuals and creative storytelling.",
        },
        twitter: {
            title: "Farah Studio | Projects",
            description: "Discover stunning reels and social media designs made with care to boost digital engagement and stand out online.",
        },
    };



}

const page = () => {
    return <>
        <Projects />
    </>;
};

export default page;