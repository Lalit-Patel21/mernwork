import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "thegreatayurveda@gmail.com",
    pass: "mscy bdjt dttl plbj",
  },
});

var mailOptions = {
  from: "thegreatayurveda@gmail.com",
  to: "gurjarlalitpatel21@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

// import nodemailer from "nodemailer";

// // **Never embed your password in the code!**
// // Secure alternatives:
// // 1. Environment variables:
// //    - Set an environment variable for your password (e.g., using process.env.PASSWORD)
// //    - Store the variable securely (not in version control)
// // 2. Credential files (outside of version control)
// // 3. OAuth2 authentication

// // Assuming you've set up a secure way to store your password
// // const password = process.env.GMAIL_PASSWORD; // Replace with your password retrieval method

// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "thegreatayurveda@gmail.com",
//     pass: "mscy bdjt dttl plbj",
//   },
// });

// var mailOptions = {
//   from: "thegreatayurveda@gmail.com",
//   to: "gurjarlalitpatel21@gmail.com",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!",
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });
