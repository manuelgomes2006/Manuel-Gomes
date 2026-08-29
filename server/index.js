const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Send Message Endpoint
app.post('/api/send-message', async (req, res) => {
  const { name, email, message } = req.body || {};

  // Input Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  try {
    // Configure Transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'manuelgomes062006@gmail.com',
        pass: process.env.EMAIL_PASS, // Set your Gmail App Password in .env
      },
    });

    // Send Mail Options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'manuelgomes062006@gmail.com',
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #10b981; margin-top: 0;">New Portfolio Contact Message</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #10b981; border-radius: 6px; margin-top: 10px; font-size: 14px; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-top: 20px;" />
          <p style="font-size: 11px; color: #94a3b8;">Sent from Manuel Gomes Portfolio Website</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send message.', details: error.message });
  }
});

// Healthcheck Route
app.get('/', (req, res) => {
  res.send('Manuel Gomes Portfolio Send Message Backend API is Online 🚀');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
