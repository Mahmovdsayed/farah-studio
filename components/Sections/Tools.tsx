'use client';

const Tools = () => {
    const tools = [
        { title: "Figma" },
        { title: "Creative Cloud" },
        { title: "MidJourney" },
        { title: "Envato" },
        { title: "Artlist" },
    ];

    const repeatedTools = [...tools, ...tools, ...tools];

    return (
        <div className="mt-14 relative">
            <h3 className="text-xl px-2 md:text-3xl font-sharpSansSemiBold">
                Tools
            </h3>
            <div className="py-8 md:py-12 overflow-hidden relative w-full">
                <div className="absolute top-0 left-0 w-32 md:w-48 h-full bg-gradient-to-r from-[#0E100F] to-transparent pointer-events-none z-10"></div>
                <div className="absolute top-0 right-0 w-32 md:w-48 h-full bg-gradient-to-l from-[#0E100F] to-transparent pointer-events-none z-10"></div>

                <div className="scrolling-tools">
                    {repeatedTools.map((tool, index) => (
                        <span
                            key={index}
                            className="text-2xl opacity-65 text-default-500 px-4 whitespace-nowrap font-sharpSansBoldItalic"
                            // id="textshadows"
                        >
                            {tool.title}
                        </span>
                    ))}
                    {repeatedTools.map((tool, index) => (
                        <span
                            key={index}
                            className="text-2xl  opacity-65 text-default-500 px-4 whitespace-nowrap font-sharpSansBoldItalic"
                            // id="textshadows"
                        >
                            {tool.title}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tools;

