const pool = require('./pool');

printQuestionMarks = num => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

objToSql = ob => {
    var arr = [];

    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`; 
            }
            arr.push(`${key}=${value}`);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: (tableInput, callback) => {
        let queryString = `SELECT * FROM ${tableInput};`;
        pool.getConnection((err, connection) => {
            connection.query(queryString, (err, result) => {
                if (err) throw err;
                callback(result); 
            });
                if (err) throw err;
                connection.release();
        });
    },
    insertOne: (table, cols, vals, callback) => {
        let queryString = `INSERT INTO ${table}`;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        pool.getConnection((err, connection) => {
            connection.query(queryString, vals, (err, result) => {
                if (err) throw err; 
                callback(result);
            });
                if (err) throw err; 
                connection.release();
        });
    },
    updateOne: (table, objColVals, condition, callback) => {
        let queryString = `UPDATE ${table}`;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        pool.getConnection((err, connection) => {
            connection.query(queryString, (err, result) => {
                if (err) throw err;
                callback(result);
            });
                if (err) throw err;
                connection.release();
        });
    }
};

module.exports = orm;