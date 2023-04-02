const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport({
    host: "mail.smtp2go.com",
    port: 2525, // 8025, 587 and 25 can also be used.
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

exports.verifyEmail = ({ email, url }) => {
    smtpTransport.sendMail({
        from: {
            name: 'Ecera System',
            address: process.env.SENDER_EMAIL
        },
        to: email,
        subject: 'Please verify your email address',
        html: `
            <div style="width: 100%; background-color: #F1F5F9; padding: 40px 0; font-family: 'Lato',sans-serif;">
        <style>
            @media (max-width: 600px) {
                #box{
                    width: 95% !important;
                    margin: 0 auto !important;
                }
            }
        </style>
        <div id="box" style='width: 500px; margin: 0 auto; border-radius: 8px; background-color: white; padding: 30px;'>
            <h2 style='text-align: center; margin: 10px 0 30px 0; font-size: 26px; color: #1D4ED8;'>Ecera System</h2>
            <div>
                <img src="https://res.cloudinary.com/job-portal/image/upload/v1663523466/don%27t%20delete%20it.%20email%20verify%20img.png"
                    alt="Email icon"
                    style="width: 200px; max-width: 400px; height: auto; margin: auto; display: block;">
            </div>
            <div style='padding: 20px 0;'>
                <h1 style="margin: 0; text-align: center; font-size: 30px; font-weight: 600; color: gray;">Please verify your email</h1>
                <h3 style="margin: 10px 0; text-align: center; font-size: 18px; font-weight: 500; color: #363636;">To help us confirm it’s you, please click the button below to activate your account.</h3>
            </div>
            <p style="text-align: center; margin-bottom: 20px">
                <a href=${url}
                    style='padding: 15px 20px; border-radius: 5px; background-color: #1D4ED8; text-decoration: none; color: #ffffff; font-size: 18px; font-weight: 500;'
                    >
                    Verify email address
                </a>
            </p>
        </div>
        <p style="text-align: center; color: #363636;">&copy; Ecera System</p>
    </div>
        `
    }, function (error, response) { });
};

exports.resetPassEmail = ({ email, url }) => {
    smtpTransport.sendMail({
        from: {
            name: 'Ecera System',
            address: process.env.SENDER_EMAIL
        },
        to: email,
        subject: 'Reset your password',
        html: `
            <div style="width: 100%; background-color: #F1F5F9; padding: 40px 0; font-family: 'Lato',sans-serif;">
        <style>
            @media (max-width: 600px) {
                #box{
                    width: 95% !important;
                    margin: 0 auto !important;
                }
            }
        </style>
        <div id="box" style='width: 500px; margin: 0 auto; border-radius: 8px; background-color: white; padding: 30px;'>
            <h2 style='text-align: center; margin: 10px 0 30px 0; font-size: 26px; color: #1D4ED8;'>
            Ecera System
            </h2>
            <div style='padding: 20px 0;'>
                <h3 style="margin: 10px 0; text-align: center; font-size: 18px; font-weight: 500; color: #363636;">Hello, Forgot password "Not to worry, we get you! Let's get a new password"</h3>
            </div>
            <p style="text-align: center; margin-bottom: 20px">
                <a href=${url}
                    style='padding: 15px 20px; border-radius: 5px; background-color: #1D4ED8; text-decoration: none; color: #ffffff; font-size: 18px; font-weight: 500;'
                    >
                    Reset Password
                </a>
            </p>
        </div>
        <p style="text-align: center; color: #363636;">&copy; Ecera System</p>
    </div>
        `
    }, function (error, response) { });
};
