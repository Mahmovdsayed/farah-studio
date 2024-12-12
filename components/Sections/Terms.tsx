'use client'
import useVisitorTracker from "@/hooks/useVisitorTracker";
import { motion } from "framer-motion";

interface IProps { }

const Terms = ({ }: IProps) => {
    const terms = [
        "Send deliverables (Text, Logo, Branding, Materials)",
        "The price includes ONLY 3 AMENDMENTS.",
        "The price doesn’t include any resizing of the design (if this isn’t stated in the agreement).",
        "You will receive the final file formats (PNG, JPEG).",
        "A deposit of 50% is required to commence work (no refund once work has started).",
        "Remaining balance due upon project completion and before final delivery",
        "Acceptable payment methods (instapay, bank transfer)",
        "State that delays caused by the client (such as late feedback or lack of resources) may extend the timeline.",
        "Additional revisions beyond the agreed limit will incur extra charges.",
        "The designer retains full copyright of the designs until full payment is received (as per the agreement).",
        "Unused drafts or concepts remain the property of the designer.",
        "Client is responsible for ensuring the accuracy of all content.",
        "The design may not be resold or altered without the designer's consent."
    ];
    useVisitorTracker("/terms", "Terms");

    return <>
        <main className="min-h-[100dvh]">
            <div className="py-12 bg-gradient-to-b from-indigo-900 via-indigo-950 to-[#0E100F] bg-opacity-80 min-h-[200px]">
                <div className="container mx-auto flex items-start flex-col justify-center px-4">
                    <motion.h2
                        className="text-4xl font-sharpSansBold"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Hello Dear!
                    </motion.h2>
                    <motion.p
                        className="font-sharpSansMedium text-default-600 mt-2 text-sm md:text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Before you confirm any project <br />
                        please read and accept our terms and conditions.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6">
                <div className="flex items-start justify-center text-start gap-4 flex-col font-sharpSansSemiBold text-xs md:text-base w-full">
                    {terms.map((ter, index) =>
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ width: "100%", marginTop: "2px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {ter}
                        </motion.p>
                    )}
                </div>
            </div>
        </main>
    </>;
};

export default Terms;
