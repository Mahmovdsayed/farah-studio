import ContactUs from "@/components/Sections/ContactUs";
import { Metadata } from "next";

export async function generateMetadata({
}: {
    }): Promise<Metadata> {
    return {
        title: "Farah Studio | Contact Us",
        description: "Get in touch with Farah Studio for inquiries, collaborations, or to discuss your next creative project. We're here to bring your vision to life with stunning designs and innovative ideas.",

        openGraph: {
            title: "Farah Studio | Contact Us",
            description: "Get in touch with Farah Studio for inquiries, collaborations, or to discuss your next creative project. We're here to bring your vision to life with stunning designs and innovative ideas.",
            type: "website",
        },
        twitter: {
            title: "Farah Studio | Contact Us",
            description: "Get in touch with Farah Studio for inquiries, collaborations, or to discuss your next creative project. We're here to bring your vision to life with stunning designs and innovative ideas.",
        },
    };

}
const page = () => {

    return <>
        <main className="min-h-[100dvh]">
            <div className="container mx-auto px-4 py-6">
                <ContactUs />
            </div>
        </main >
    </>;
};

export default page;