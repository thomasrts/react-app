require('dotenv').config()
const express = require('express')
const mysql = require('mysql2');
const config = require('./routes/dbconnection');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit')
const oapi = require('./swagger')
const cors = require('cors')
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer");
const winston = require('winston');

/* The above code is limiting the number of requests that can be made to the server. */
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3000, // Limit each IP to 30 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service: 'user-service'},
    transports: [
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log'}),
    ],
});
const app = express();
const pool = mysql.createPool(config);
app.use(limiter);
app.use(cors())
app.use(express.json());
app.use('/swagger', oapi.swaggerui);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    (req.headers.authorization !== "W9mVzVm1BVWe2O0EGmT7ta03HT7JQf52" || !req.headers.authorization) ?  res.status(403).send("Forbidden") : next();
})

app.route("/v1/users").get((req,res) => {

})

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
async function sendMail(transporter, from, to, subject, body, attachments = []) {
    return await transporter.sendMail({
        from: from, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: body,
        attachments: attachments // html body
    });
}

function createMailTransporter() {
    return nodemailer.createTransport({
        host: 'ssl0.ovh.net',
        port: 587,
        secure: false,
        auth: {
            user: 'thomas.rotsaert@ouranet.com', // generated ethereal user
            pass: 'Wr$THE1859TAwev#', // generated ethereal password
        }
    });
}
app.listen(3001);
console.log("[+] Server started on http://localhost:3001");
console.log("[!] Press Ctrl+C to stop the server");