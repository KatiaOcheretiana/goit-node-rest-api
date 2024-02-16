const nodemailer = require("nodemailer");

require("dotenv").config();

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "katya_ocheretiana@meta.ua",
    pass: process.env.META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

const sendEmail = async (data) => {
  const email = { ...data, from: "katya_ocheretiana@meta.ua" };
  await transporter.sendMail(email);
  return true;
};

module.exports = sendEmail;

// const emailOptions = {
//   from: "katya_ocheretiana@meta.ua",
//   to: "",
//   subject: "Verify email for registration",
//   text: "Привіт. Ми тестуємо надсилання листів!",
// };

// transporter
//   .sendMail(emailOptions)
//   .then((info) => console.log(info))
//   .catch((err) => console.log(err));
