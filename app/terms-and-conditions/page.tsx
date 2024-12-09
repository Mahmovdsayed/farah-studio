import Terms from "@/components/Sections/Terms";
import { Metadata } from "next";

export async function generateMetadata({
}: {
    }): Promise<Metadata> {
    return {
        title: "Farah Studio | Terms and Conditions",
        description: "Please read the terms and conditions carefully before proceeding with any projects. These terms outline the guidelines, responsibilities, and policies of working with Farah Studio.",

        openGraph: {
            title: "Farah Studio | Terms and Conditions",
            description: "Understand the terms and conditions for working with Farah Studio. This includes project deliverables, payment policies, revision limits, and copyright details.",
        },
        twitter: {
            title: "Farah Studio | Terms and Conditions",
            description: "Review the terms and conditions for collaborating with Farah Studio, covering all project guidelines, payments, and deliverables.",
        },
    };

}
const page = () => {


    return <>
        <Terms />
    </>;
};

export default page;