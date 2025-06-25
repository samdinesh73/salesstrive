import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message,phone ,subject} = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your SMTP provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_TO,
        subject: `New Contact Form Submission from ${name} ,Regarding : ${subject}`,
        text: `
You have received a new message from your website contact form:

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}


Message:
${message}

-- End of message --
  `, 
      });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
