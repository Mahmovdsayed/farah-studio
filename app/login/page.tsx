import LoginForm from "@/components/Sections/LoginForm";

const page = async () => {

    return <>
        <main className="min-h-[100dvh]">
            <div className="container mx-auto py-6 px-4">
                <LoginForm />
            </div>
        </main>
    </>;
};

export default page;