const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kelseythej@gmail.com',
    subject: 'Thanks for joining!',
    text: `Welcome ${name}, Let us know if you have any questions`
  })
}

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kelseythej@gmail.com',
    subject: 'Peace',
    text: `See ya ${name}`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail
}