import Projects from "@/components/Sections/Projects";
import { Metadata } from "next";

export async function generateMetadata({
}: {
    }): Promise<Metadata> {
    return {
        title: "Farah Studio | Projects",
        description: "",

        openGraph: {
            title: "Farah Studio | Projects",
            description: "",
        },
        twitter: {
            title: "Farah Studio | Projects",
            description: "",
        },
    };


}

const page = () => {
    return <>
        <Projects />
    </>;
};

export default page;