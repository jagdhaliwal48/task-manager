const sgmail = require('@sendgrid/mail')

sgmail.setApiKey(process.env.SENDGRID_API_KEY)
const sendEmail = (email, name) =>{
    sgmail.send({
        to: email,
        from: 'jagdhaliwal48@gmail.com',
        subject: name+ '- Task App Email',
        text: 'Email from task app- node learning'
    })
}
const cancelEmail = (email, name) =>{
    sgmail.send({
        to: email,
        from: 'jagdhaliwal48@gmail.com',
        subject: name+ '- Task App Email',
        text: 'Sorry to see you go'
    })
}
module.exports = {
    sendEmail,
    cancelEmail
}
