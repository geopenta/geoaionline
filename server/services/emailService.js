import nodemailer from 'nodemailer';
import { emailConfig } from '../config/email.js';

const transporter = nodemailer.createTransport(emailConfig);

export const sendEmail = async ({ name, email, subject, message, type = 'contact' }) => {
  const emailSubject = type === 'contact' 
    ? `Contact Form: ${subject}`
    : 'New Onboarding Submission';

  const htmlContent = type === 'contact' 
    ? `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
    : `
      <h3>New Onboarding Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${email}</p>
      <p><strong>Service:</strong> ${subject}</p>
      <p><strong>Requirements:</strong></p>
      <p>${message}</p>
    `;

  const mailOptions = {
    from: 'info@geo-ai.online',
    to: 'info@geo-ai.online',
    subject: emailSubject,
    html: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email');
  }
};