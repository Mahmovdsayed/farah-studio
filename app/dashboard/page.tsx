'use client'

import ProjectsDashboard from "@/components/Sections/ProjectsDashboard";
import VisitorChart from "@/components/Sections/VisitorChart";
import { Divider } from "@nextui-org/react";


const page = () => {

    return <>
        <main className="min-h-[100dvh]">
            <div className="container mx-auto py-6 px-4">
                <h1 className="text-start font-sharpSansSemiBold text-4xl">Dashboard</h1>
                <VisitorChart />
                <Divider className="my-4" />
                <ProjectsDashboard />
            </div>
        </main>
    </>;
};

export default page;