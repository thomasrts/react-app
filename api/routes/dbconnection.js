const connection = {
    connectionLimit: 10,
    host: process.env.DB_IP,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};
module.exports = connection;