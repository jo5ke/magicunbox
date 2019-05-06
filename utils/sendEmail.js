let express = require("express");
const cors = require("cors");
let app = express();
app.use(cors());
const sgMail = require('@sendgrid/mail');
const API_KEY = "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";
sgMail.setApiKey(process.env.SENDGRID_API_KEY || API_KEY);
async function sendEmail(from,email,subject,text){
  const msg = {
    to: email,
    from: from,
    subject: subject,
    text: text,
    html: text
  };
 await sgMail.send(msg);
}

module.exports = sendEmail;
