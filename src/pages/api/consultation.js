import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message,phone ,subject,service} = req.body;

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
        subject: `New Consultation Request: ${subject} (${service}) from ${name}`,
        text: `
You have received a new consultation request:

🧑 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
📝 Subject: ${subject}
💼 Service: ${service}

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
