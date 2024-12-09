'use server'
import sendEmailService from "@/lib/email"

const Email = async (name: string, email: string, info: string, services: any) => {
    await sendEmailService({
        subject: `New Request from Farah Studio`,
        message: `
            <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            color: #333;
                            line-height: 1.6;
                            margin: 0;
                            padding: 0;
                            background-color: #f4f4f4;
                        }
                        .email-container {
                            width: 100%;
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #fff;
                            padding: 2px;
                            border-radius: 8px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        h1 {
                            color: #4A3C60;
                            
                            margin-bottom: 10px;
                        }
                        p {
                            
                            color: #555;
                            margin-bottom: 20px;
                        }
                        ul {
                            list-style: none;
                            padding: 0;
                            margin-bottom: 20px;
                        }
                        li {
                            margin: 8px 0;
                            
                        }
                        strong {
                            color: #4A3C60;
                        }
                        .highlight {
                            color: #30283C;
                            font-weight: bold;
                        }
                        .footer {
                            margin-top: 30px;
                            
                            text-align: center;
                            color: #fff;
                            border-top: 1px solid #ddd;
                            padding-top: 10px;
                        }

                     

                        /* Responsive Styles */
                        @media (max-width: 680px) {
                            h1 {
                                
                            }
                            p, li {
                                
                            }
                            .email-container {
                                padding: 2px;
                            }
                            .footer {
                                
                                padding-top: 5px;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div>
                        <div class="email-container">
                            <h1>Hello Farah , 👋</h1>
                            <p>We have received a new request through the contact form on <strong>Farah Studio</strong>. Here are the details:</p>
                            <ul>
                                <li><strong>Name:</strong> <span class="highlight">${name}</span></li>
                                <li><strong>Email:</strong> <span class="highlight">${email}</span></li>
                                <li><strong>Requested Services:</strong> <span class="highlight">${info}</span></li>
                                <br/>
                                <li><strong>Project Details:</strong> <span class="highlight">${services}</span></li>
                            </ul>
                            <p>Please get in touch with the client as soon as possible to discuss the project and offer the necessary support.</p>
                            <p>Best regards, <br/> <strong>NEST SYSTEMS</strong></p>
                        </div>
                        <div class="footer">
                            <p>&copy; 2024 Farah Studio | All rights reserved <br/> powered by NEST</p>
                        </div>
                    </div>
                </body>
            </html>
        `,
    })
}

export default Email
