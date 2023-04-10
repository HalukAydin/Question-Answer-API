const nodemailer = require("nodemailer");

const sendEmail = async(mailOptions) => {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: 'haydin938@gmail.com',
            password: 'exdtdfjdsweityzd'
        },
        tls: {
            ciphers:'SSLv3'
        }
    });

    let info = await transporter.sendMail(mailOptions);
    console.log(`Message sent : ${info.messageId}`);
};

module.exports = sendEmail;
