import nodemailer from "nodemailer";

const sendEmailService = async ({
  subject = "no-reply",
  message = "<h1>no-message</h1>",
  attachments = [],
}) => {
  const transporter = nodemailer.createTransport({
    host: "localhost",
    service: "gmail",

    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `Farah Studio  <${process.env.EMAIL}>`,
    to: "farahmoahmed10@gmail.com",
    cc: "mahmoudsayed3576@gmail.com",
    subject,
    html: message,
    attachments,
  });

  return info.accepted.length ? true : false;
};

export default sendEmailService;
