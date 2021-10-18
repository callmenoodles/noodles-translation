require('dotenv').config()
import Nodemailer from 'nodemailer'

const send = async (name, email, topic, message) => {
  let transporter = await Nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `${name} <${email}>`,
    to: process.env.EMAIL_USER,
    subject: topic,
    text: message,
    html: `<b>${message}</b>`,
  });
}

const handler = async (req, res) => {
  if (req.method == 'POST') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    const data = JSON.parse(JSON.stringify(req.body))
    await send(data.name, data.email, data.topic, data.message)
  }

  res.writeHead(302, {
    Location: '/message',
  });

  res.end();
}

export default handler