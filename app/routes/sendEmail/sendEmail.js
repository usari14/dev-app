import nodemailer from "nodemailer";

export async function sendWelcomeEmail(toEmail) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: true,
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: toEmail,
    subject: "Welcome to our app!",
    text: "Thanks for installing our app on your store!"
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:llllllllllllllll", info.response);
  } catch (error) {
    console.error("Error sending emaillllllllllllllllllllllll:", error);
  }
}
