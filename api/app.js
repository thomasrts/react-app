require('dotenv').config()
const express = require('express')
const mysql = require('mysql2');
const config = require('./routes/dbconnection');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit')
const oapi = require('./swagger')
const cors = require('cors')
const bcrypt = require("bcrypt")
const Tweets = require('./models/tweets')
const Users = require('./models/users')
const nodemailer = require("nodemailer");

/* The above code is limiting the number of requests that can be made to the server. */
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3000, // Limit each IP to 30 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})


const app = express();
const pool = mysql.createPool(config);
app.use(limiter);
app.use(cors())
app.use(express.json());
app.use('/swagger', oapi.swaggerui);
oapi.component('schemas', 'Tweets', Tweets.schema)
oapi.component('schemas', 'Users', Users.schema)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    (req.headers.authorization !== "W9mVzVm1BVWe2O0EGmT7ta03HT7JQf52" || !req.headers.authorization) ? res.status(403).send("Forbidden") : next();
})

app.route("/v1/tweets").get(oapi.path({
        tags: ['Tweets'],
        summary: "Retourne une liste de tweets",
        responses: {
            200: {
                description: 'Liste de tweets',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            'items': {'$ref': '#/components/schemas/Tweets'}
                        }
                    }
                }
            },
            404: {
                description: 'Not Found'
            },
            429: {
                description: 'Too Many Requests'
            },
            500: {
                description: 'Internal Server Error'
            }
        }
    }
),(req, res) => {
    const sqlquery = "SELECT * FROM tweets"
    pool.query(sqlquery, (err, results) => {
        if(err) return res.status(500).send("Internal Server Error")
        if(results) return res.status(200).send(Object.assign([], results))
        else return res.status(404).send("Not Found")
    })
}).post(oapi.path({
        tags: ['Tweets'],
        summary: "Crée un tweet",
        responses: {
            204: {
                description: 'Crée un tweet'
            },
            400: {
                description: 'Bad Request'
            },
            429: {
                description: 'Too Many Requests'
            },
            500: {
                description: 'Internal Server Error'
            }
        }
    }
),(req, res) => {
    if(!req.body.content || !req.body.idUser) return res.status(400).send("Bad Request")
    const sqlquery = `INSERT INTO tweets (content, idUser) VALUES ("${req.body.content}", ${req.body.idUser}))`
    pool.query(sqlquery, (err, results) => {
        if(err) return res.status(500).send("Internal Server Error")
        return res.status(204).send("Created")
    })
})

app.route("/v1/tweets/:id").get(oapi.path({
        tags: ['Tweets'],
        summary: "Retourne un tweet",
        responses: {
            200: {
                description: 'Un tweet',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            'items': {'$ref': '#/components/schemas/Tweets'}
                        }
                    }
                }
            },
            404: {
                description: 'Not Found'
            },
            429: {
                description: 'Too Many Requests'
            },
            500: {
                description: 'Internal Server Error'
            }
        }
    }
),(req, res) => {
    if(isNaN(parseInt(req.params.id))) return res.status(400).send("Bad Request")
    const sqlquery = `SELECT * FROM tweets WHERE idTweet = '${req.params.id}'`
    pool.query(sqlquery, (err, results) => {
        if(err) return res.status(500).send("Internal Server Error")
        if(results) return res.status(200).send(Object.assign({}, results[0]))
        else return res.status(404).send("Not Found")
    })
}).delete(oapi.path({
        tags: ['Tweets'],
        summary: "Supprime un tweet",
        responses: {
            201: {
                description: 'Supprime un tweet',
            },
            404: {
                description: 'Not Found'
            },
            429: {
                description: 'Too Many Requests'
            },
            500: {
                description: 'Internal Server Error'
            }
        }
    }
),(req, res) => {
    if(isNaN(parseInt(req.params.id))) return res.status(400).send("Bad Request")
    const sqlquery = `DELETE FROM tweets WHERE idTweet = '${req.params.id}'`
    pool.query(sqlquery, (err) => {
        if(err) return res.status(500).send("Internal Server Error")
        return res.status(201).send("Deleted")
    })
})



app.route("/v1/users").get(oapi.path({
        tags: ['Utilisateurs'],
        summary: "Retourne les utilisateurs",
        responses: {
            200: {
                description: "Une liste d'utilisateurs",
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            'items': {'$ref': '#/components/schemas/Users'}
                        }
                    }
                }
            },
            404: {
                description: 'Not Found'
            },
            429: {
                description: 'Too Many Requests'
            },
            500: {
                description: 'Internal Server Error'
            }
        }
    }
),(req,res) => {
    const sqlquery = `SELECT * FROM users`
    pool.query(sqlquery, (err, results) => {
        if(err) return res.status(500).send("Internal Server Error")
        return res.status(200).send(Object.assign([], results))
    })
}).post(oapi.path({
        tags: ['Utilisateurs'],
        summary: "Crée un utilisateur",
        responses: {
            201: {
                description: "Crée un utilisateur",
            },
            404: {
                description: 'Not Found'
            },
            429: {
                description: 'Too Many Requests'
            },
            500: {
                description: 'Internal Server Error'
            }
        }
    }
),(req, res) => {
    if(!req.body.email || !req.body.password) return res.status(400).send("Bad Request")
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        const sqlquery = `INSERT INTO users (email, password) values ("${req.body.email}", "${hash}")`
        pool.query(sqlquery, (err) => {
            if(err) return res.status(err).send("Internal Server Error")
            return res.status(201).send("Created")
        })
    })
})


app.route("/v1/users/:id").get(oapi.path({
        tags: ['Utilisateurs'],
        summary: "Retourne un utilisateur",
        responses: {
            200: {
                description: "Un utilisateur",
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            'items': {'$ref': '#/components/schemas/Users'}
                        }
                    }
                }
            },
            400: {
                description: 'Bad request'
            },
            404: {
                description: 'Not Found'
            },
            429: {
                description: 'Too Many Requests'
            },
            500: {
                description: 'Internal Server Error'
            }
        }
    }
),(req,res) => {
    if(isNaN(parseInt(req.params.id))) return res.status(400).send("Bad Request")
    const sqlquery = `SELECT * FROM users WHERE id = "${req.params.id}"`
    pool.query(sqlquery, (err, results) => {
        if(err) return res.status(500).send("Internal Server Error")
        if(results) return res.status(200).send(Object.assign({}, results[0]))
        else return res.status(404).send("Not Found")
    })
}).patch(oapi.path({
        tags: ['Utilisateurs'],
        summary: "Modifie un utilisateur",
        responses: {
            204: {
                description: "Modifie un utilisateur",
            },
            400: {
                description: 'Bad request'
            },
            404: {
                description: 'Not Found'
            },
            429: {
                description: 'Too Many Requests'
            },
            500: {
                description: 'Internal Server Error'
            }
        }
    }
),(req,res) => {
    if(isNaN(parseInt(req.params.id)) || !req.body.biography) return res.status(400).send("Bad Request")
    const sqlquery = `UPDATE users set biography = "${req.body.biography}" WHERE id = "${req.params.id}"`
    pool.query(sqlquery, (err) => {
        if(err) return res.status(500).send("Internal Server Error")
        return res.status(204).send("Updated")
    })
}).delete(oapi.path({
        tags: ['Utilisateurs'],
        summary: "Supprime un utilisateur",
        responses: {
            201: {
                description: "Supprime un utilisateur",
            },
            400: {
                description: 'Bad request'
            },
            404: {
                description: 'Not Found'
            },
            429: {
                description: 'Too Many Requests'
            },
            500: {
                description: 'Internal Server Error'
            }
        }
    }
),(req, res) => {
    if(isNaN(parseInt(req.params.id))) return res.status(400).send("Bad Request")
    const sqlquery = `DELETE FROM users WHERE id = ${req.params.id}`
    pool.query(sqlquery, (err) => {
        if(err) return res.status(500).send("Internal Server Error")
        return res.status(201).send("Delete")
    })
})

app.route("/v1/users/credentials").post(oapi.path({
        tags: ['Utilisateurs'],
        summary: "Connecte un utilisateur",
        responses: {
            200: {
                description: "Un utilisateur",
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            'items': {'$ref': '#/components/schemas/Users'}
                        }
                    }
                }
            },
            400: {
                description: 'Bad request'
            },
            404: {
                description: 'Not Found'
            },
            429: {
                description: 'Too Many Requests'
            },
            500: {
                description: 'Internal Server Error'
            }
        }
    }
),(req, res) => {
    if(!req.body.username || !req.body.password) return res.status(400).send("Bad Request")
    const sqlquery = `SELECT id, username, password FROM users WHERE id = ${req.params.id}`
    pool.query(sqlquery, (err, results) => {
        if(err) return res.status(500).send("Internal Server Error")
        bcrypt.compare(req.body.password, results[0].password, (err, stmt) => {
            if(err) return res.status(500).send("Internal Server Error")
            else{
                if(stmt) return res.status(200).send(results[0].id)
                else return res.status(404).send("User Not Found")
            }
        })
    })
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