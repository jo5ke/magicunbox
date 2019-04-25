var helper = require('sendgrid').mail;
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
async function sendEmailGrid(fromEmail,subject,toEmail,content)
{
    var fromEmail = new helper.Email(fromEmail);
    var toEmail = new helper.Email(toEmail);
    var subject = subject; 
    var content = new helper.Content('text/plain', content);
    var mail = new helper.Mail(fromEmail, subject, toEmail, content);

  var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});


sg.API(request, function (error, response) {
  if (error) {
    console.log('Error response received');
  }
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
});

}


module.exports= sendEmailGrid;




 


 
