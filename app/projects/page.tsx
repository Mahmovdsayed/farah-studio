import Projects from "@/components/Sections/Projects";
import axios from "axios"
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
const fetchProjectsData = async () => {
    const response = await axios.get("api/projects");
    return response.data;
};

const page = async () => {
    const data = await fetchProjectsData()
    return <>
        <main className="min-h-[100dvh] overflow-x-hidden">
            <Projects data={data} />
        </main>
    </>;
};

export default page;
