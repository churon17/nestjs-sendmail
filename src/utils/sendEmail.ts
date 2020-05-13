import * as nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
export const sendEmail =  async(email : string, link: string)  => {
  
  
    // create reusable transportergoo object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "JCAO98", // generated ethereal user
      pass: "sendgrid@jcao98" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>Hello world?</b> <a href="${link}">Confirm Email</a>`,// html body
  });

  console.log("Message sent: %s", info.messageId);
 
 
}

 