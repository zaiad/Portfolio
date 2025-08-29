import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env.local' });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email to you (notification)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #334155; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #475569; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #3B82F6; margin: 20px 0;">
            <h3 style="color: #475569; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #64748b;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Reply to:</strong> ${email}
            </p>
          </div>
        </div>
      `
    };

    // Auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #334155; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          
          <p style="color: #475569; line-height: 1.6;">Hi ${name},</p>
          
          <p style="color: #475569; line-height: 1.6;">
            Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible, usually within 24 hours.
          </p>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0369a1; margin-top: 0;">Your Message:</h3>
            <p style="color: #64748b; font-style: italic;">"${message}"</p>
          </div>
          
          <p style="color: #475569; line-height: 1.6;">
            In the meantime, feel free to connect with me on:
          </p>
          
          <ul style="color: #475569; line-height: 1.8;">
            <li>LinkedIn: <a href="https://www.linkedin.com/in/zaiad-es-sahel/" style="color: #3B82F6;">linkedin.com/in/yourprofile</a></li>
            <li>GitHub: <a href="https://github.com/zaiad" style="color: #3B82F6;">github.com/yourusername</a></li>
            <li>WhatsApp: <a href="https://wa.me/1234567890" style="color: #10B981;">+212 689977578</a></li>
          </ul>
          
          <p style="color: #475569; line-height: 1.6;">
            Best regards,<br>
            <strong>Your Name</strong><br>
            <span style="color: #64748b;">Full Stack Developer & Mobile</span>
          </p>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    res.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});