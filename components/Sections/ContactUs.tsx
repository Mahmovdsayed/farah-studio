'use client'

import { motion } from "framer-motion";
import Email from "@/func/sendEmail";
import { Alert, Button, Checkbox, CheckboxGroup, Input, Link, Textarea } from "@nextui-org/react";
import { RiSendPlaneFill } from "react-icons/ri";
import * as Yup from 'yup';
import { useFormik } from "formik";

interface IProps { }

const ContactUs = ({ }: IProps) => {

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Name is required")
            .max(20, "Name max length is 20")
            .min(3, "Name must be at least 3 characters"),
        email: Yup.string()
            .required("Email is required")
            .email("Invalid email address")
            .lowercase("email must be in lowercase"),
        projectInfo: Yup.string()
            .required("Project info is required")
            .min(10, "Project info must be at least 10 characters"),
        terms: Yup.boolean()
            .oneOf([true], "You must accept the terms and conditions")
            .required("You must accept the terms and conditions"),
        services: Yup.array().min(1, "Please select at least one service").required("Services are required"),
    });

    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            projectInfo: "",
            terms: false,
            services: [],
        },
        validationSchema,
        onSubmit: (values: any) => {
            console.log(values);
            Email(values.name, values.email, values.services.join(", "), values.projectInfo);
            formik.resetForm();
        },
    })

    return (
        <>
            <div className="">
                <motion.div
                    className="flex flex-col md:w-1/2 mx-auto gap-2 mb-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-sharpSansBold">Think it, achieve it</h1>
                    <p className="font-sharpSansMedium text-default-600">Tell us more about yourself and what you're got in mind.</p>
                </motion.div>

                <motion.form
                    onSubmit={formik.handleSubmit}
                    className="flex md:w-1/2 mx-auto flex-col gap-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        <Input
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            id="name"
                            name="name"
                            value={formik.values.name}
                            className="font-sharpSansMedium"
                            variant="underlined"
                            color="secondary"
                            label="Name"
                            labelPlacement="outside"
                            placeholder="Enter your Name"
                            type="text" />

                        {formik.errors.name && formik.touched.name ? (
                            <div className="mt-2 font-sharpSansMedium">
                                <Alert color="warning" title={formik.errors.name} />
                            </div>
                        ) : ""}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        <Input
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            id="email"
                            name="email"
                            value={formik.values.email}
                            className="font-sharpSansMedium"
                            variant="underlined"
                            color="secondary"
                            label="Email"
                            labelPlacement="outside"
                            placeholder="Enter your Email"
                            type="text" />

                        {formik.errors.email && formik.touched.email ? (
                            <div className="mt-2 font-sharpSansMedium">
                                <Alert color="warning" title={formik.errors.email} />
                            </div>
                        ) : ""}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                    >
                        <Textarea
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            id="projectInfo"
                            name="projectInfo"
                            value={formik.values.projectInfo}
                            className="font-sharpSansMedium"
                            label="Tell us a little about the project..."
                            labelPlacement="outside"
                            color="secondary"
                            placeholder="Enter your project information"
                            variant="underlined"
                        />
                        {formik.errors.projectInfo && formik.touched.projectInfo ? (
                            <div className="mt-2 font-sharpSansMedium">
                                <Alert color="warning" title={formik.errors.projectInfo} />
                            </div>
                        ) : ""}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                    >
                        <div className="flex items-start justify-start font-sharpSansMedium">
                            <CheckboxGroup
                                size="sm"
                                color="secondary"
                                label="How can we help?"
                                orientation="horizontal"
                                value={formik.values.services}
                                onValueChange={(value: string[]) => formik.setFieldValue("services", value)}
                            >
                                <Checkbox value="motion-graphics">Motion Graphics</Checkbox>
                                <Checkbox value="social-media-ads">Social media ads</Checkbox>
                                <Checkbox value="website-design">Website design</Checkbox>
                            </CheckboxGroup>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                    >
                        <Checkbox
                            className="font-sharpSansMedium"
                            size="sm"
                            checked={formik.values.terms}
                            onChange={(e) => formik.setFieldValue("terms", e.target.checked)}
                        >
                            Before you confirm any project, please read and accept our{" "}
                            <Link className="font-sharpSansSemiBold text-secondary-600 text-sm" href="/terms-and-conditions" showAnchorIcon>
                                terms and conditions
                            </Link>
                            .
                        </Checkbox>
                        {formik.errors.terms && formik.touched.terms ? (
                            <div className="mt-2 font-sharpSansMedium">
                                <Alert color="warning" title={formik.errors.terms} />
                            </div>
                        ) : ""}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                    >
                        <Button
                            startContent={<RiSendPlaneFill />}
                            className="w-full font-sharpSansSemiBold bg-[#FEFCE1] text-black hover:bg-[#9747FF] hover:text-white transition-all duration-500"
                            radius="full"
                            type="submit"
                            isDisabled={!formik.isValid || formik.values.services.length === 0 || !formik.values.terms || formik.isSubmitting}
                        >
                            Send message
                        </Button>
                    </motion.div>
                </motion.form>
            </div>
        </>
    );
};

export default ContactUs;
