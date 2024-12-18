import express from 'express';
import { sendEmail } from './services/emailService.js';

const app = express();
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    await sendEmail({ ...req.body, type: 'contact' });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Onboarding form endpoint
app.post('/api/onboard', async (req, res) => {
  try {
    await sendEmail({
      name: req.body.fullName,
      email: req.body.companyName,
      subject: req.body.service,
      message: req.body.requirements,
      type: 'onboard'
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});