import About from "@/components/Sections/About";
import { Metadata } from "next";

export async function generateMetadata({
}: {
    }): Promise<Metadata> {
    return {
        title: "Farah Studio | About",
        description: "Meet Farah Mohamed, a passionate graphic designer specializing in 2D motion graphics, social media visuals, and creative storytelling. Currently pursuing a degree in Graphic Design at AOU, Farah combines academic expertise with hands-on experience to craft impactful designs.",

        openGraph: {
            title: "Farah Studio | About",
            description: "Meet Farah Mohamed, a passionate graphic designer specializing in 2D motion graphics, social media visuals, and creative storytelling. Currently pursuing a degree in Graphic Design at AOU, Farah combines academic expertise with hands-on experience to craft impactful designs.",
        },
        twitter: {
            title: "Farah Studio | About",
            description: "Meet Farah Mohamed, a passionate graphic designer specializing in 2D motion graphics, social media visuals, and creative storytelling. Currently pursuing a degree in Graphic Design at AOU, Farah combines academic expertise with hands-on experience to craft impactful designs.",
        },
    };
}

const page = () => {
    return <>
        <main className="min-h-[100dvh] overflow-x-hidden">
            <div className="container mx-auto px-4 py-6">
                <About />
            </div>
        </main>
    </>;
};

export default page;