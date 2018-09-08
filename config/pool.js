const mysql = require('mysql2');
const env = process.env.NODE_ENV || 'development';
let pool;

if (env === 'development') {
    pool = mysql.createPool({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'heroku_bf59787b80b0d4b'
    });
} else if (env === 'production') {
    pool = mysql.createPool(process.env.CLEARDB_DATABASE_URL);
} else {
    console.error('Invalid environment value');
}

module.exports = pool;