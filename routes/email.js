const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/',(req,res) => {

    let message = 'From: ' + req.body.email +
        '\nPhone: ' + req.body.phone +
        '\nMessage: ' + req.body.text;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fivestarmailserver@gmail.com',
            pass: 'flfhqmhfioqaoltn'
        }
    });

    const mailOptions = {
        from: 'fivestarmailserver@gmail.com',
        to: 'fivestarbackflow@gmail.com',
        subject: 'You got an E-mail from fivestarbackflow.com',
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    console.log(req.body);
    res.send('API is working properly');
});

module.exports = router;