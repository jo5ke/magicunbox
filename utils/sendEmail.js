const sgMail = require('@sendgrid/mail');
const API_KEY = "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"
sgMail.setApiKey(process.env.SENDGRID_API_KEY || API_KEY);
async function sendEmail(from,email,subject,text){
  const msg = {
    to: email,
    from: from,
    subject: subject,
    text: text,
    html: text
  };
  sgMail.send(msg);
}

module.exports = sendEmail;
