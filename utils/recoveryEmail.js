// const fetch = require('node-fetch');
// async function sendEmail(email, name, token) {
//   let response = await fetch("http://localhost:8081/mail.php",{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/x-www-form-urlencoded;"
//     },
//     body:`name=${name}&email=${email}&token=${token}`
//   });
//   response = await response.text();
//   consolelog(response);
// }
// module.exports = sendEmail;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
async function sendEmail(email,name,token){
  const msg = {
    to: email,
    from: 'recovery@magicunbox.com',
    subject: 'Password reset',
    text: 'Reset your password for '+name+' account',
    html: `<a href="https://magicunbox.com/recovery/${token}">Click here</a>`
  };
  sgMail.send(msg);
}

module.exports = sendEmail;
