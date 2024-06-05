
const nodemailer = require('nodemailer');
const config = require('../config');
const ejs = require('ejs');
const path = require('path');

const transporter = nodemailer.createTransport({
  service: config.email.service,
  auth: {
    user: config.email.auth.user,
    pass: config.email.auth.pass
  }
});

const sendEmail = async (to, subject, templateName, templateData) => {
  try {
    // console.log(path.join(__dirname,'../templates',`${templateName}.ejs`));
    const templatePath = path.join(__dirname, '../templates', `${templateName}.ejs`);
    const htmlContent = await ejs.renderFile(templatePath, templateData);
    const mailOptions = {
      from: config.email.auth.user,
      to,
      subject,
      html: htmlContent
    };
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = { sendEmail };
