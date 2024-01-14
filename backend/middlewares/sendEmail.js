const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {

  // pkb(correct)
  const transporter = nodeMailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8569586be5bc67",
      pass: "355fe019b3265c"
    }
  }); 

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
