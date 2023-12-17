"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ukr.net",
  port: 2525,
  secure: true,
  auth: {
    user: "lera.maiorova@ukr.net",
    pass: "H5LF2qmoWGVoA3hh",
  },
});

async function sendEmail({ userName, userEmail, userMessage }) {
  const output = `<h1 style="color: green">Добрий день, ви отримали листа</h1>
  <h2>Вам написав ${userName}</h2>
  <h2>Контакт для звязку ${userEmail}</h2>
  <h2 style="color: blue">Текст повідомлення ${userMessage}</h2>`;

  const info = await transporter.sendMail({
    from: "lera.maiorova@ukr.net", // sender address
    to: "artem1145819@gmail.com",
    subject: "Лист для директора",
    text: userMessage,
    html: output,
  });

  console.log("Message sent: %s", info.messageId);
  return true;
}

module.exports = sendEmail;
