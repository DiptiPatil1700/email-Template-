
const emailService = require('../services/emailService');

const sendCustomEmail = async (req, res) => {
  const { to, subject, templateName, templateData } = req.body;
  if (!to || !subject || !templateName || !templateData) {
    return res.status(400).send('Missing required fields: to, subject, templateName, templateData');
  }

  try {
    await emailService.sendEmail(to, subject, templateName, templateData);
    res.send('Email sent successfully');
  } catch (error) {
    console.error('Error in sendCustomEmail:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  sendCustomEmail
};
