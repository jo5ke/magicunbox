let express = require("express");
const cors = require("cors");
let app = express();
app.use(cors());
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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
