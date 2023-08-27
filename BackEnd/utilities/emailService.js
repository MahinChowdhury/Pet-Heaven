const nodemailer = require('nodemailer');

// Configure your email transport
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'mahinrchowdhury@gmail.com', // Your email
        pass: 'neppqymjbpwmendy', // Your email password or app-specific password
    },
});

// Send reset email function
const sendResetEmail = (recipientEmail, resetLink) => {
    const mailOptions = {
        from: 'mahinrchowdhury@gmail.com',
        to: recipientEmail,
        subject: 'Reset Your Password',
        html: `
            <p>Hello!</p>
            <p>You have requested a password reset. Click the link below to reset your password:</p>
            <a href="${resetLink}">${resetLink}</a>
            <p>If you didn't request this, please ignore this email.</p>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending reset email:', error);
        } else {
            console.log('Reset email sent:', info.response);
        }
    });
};

module.exports = sendResetEmail;
