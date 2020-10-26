const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email gmail',
        pass: 'password gmail'
    } 
})

var mailOptions = {
    from: 'emailsender',
    to: 'reciever',
    subject: 'sending email using node.js',
    text: 'ini hanya percobaan',
    html: '<h1>Verification</h1><p>verify email this link</p> <a href="https://www.facebook.com/">here</a>'
}

transporter.sendMail(mailOptions,function(error, info){
    if(error){
        console.log(error)
    }else{
        console.log('Email sent: ' + info.response)
    }
})

app.get('/',(req,res)=>{
    res.send('<h1>welcome</h1>')
})

app.listen(3000)