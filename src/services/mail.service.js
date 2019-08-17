'use strict';

import nodemailer from 'nodemailer';

import { envs } from '../../config';

const {
    EMAIL = 'email@example.com',
    EMAIL_PASS = 'example',
    RECEIVER_EMAIL = 'receiver@example.com'
} = envs;

function sendMail(req,res) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.mailgun.org',
        port: 587,
        secure: false,
        auth: {
            user: EMAIL,
            pass: EMAIL_PASS
        }
    });

    // setup email data with unicode symbols
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    let mailOptions = {
        from: email, // sender address
        to: RECEIVER_EMAIL, // list of recceivers
        subject: subject, // Subject line
        text: message, // plain text body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(400).send({success: false})
        } else {
            res.status(200).send({success: true});
        }
    });
};

export default { sendMail };