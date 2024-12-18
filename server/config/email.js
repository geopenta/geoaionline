import dotenv from 'dotenv';
dotenv.config();

export const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'info@geo-ai.online',
    pass: process.env.SMTP_PASS
  }
};