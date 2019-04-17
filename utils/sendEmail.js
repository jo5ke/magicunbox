const sgMail = require('@sendgrid/mail');
const API_KEY = "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"
sgMail.setApiKey(process.env.SENDGRID_API_KEY || API_KEY);
async function sendEmail(from,email,subject,text){
  const msg = {
    to: email,
    from: from,
    subject: subject,
    html: text
  };
  sgMail.send(msg);
}

module.exports = sendEmail;
