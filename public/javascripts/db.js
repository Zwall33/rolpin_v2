import mysql from "mysql";

const config = {
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'lea-server',
    password : 'lea-server',
    database : 'test_lea_rolpin',
    debug    : false
}

const pool = mysql.createPool(config);                    

function executeQuery(sql, callback) {
    pool.getConnection((err,connection) => {
        if(err) {
            return callback(err, null);
        } else {
            if(connection) {
                connection.query(sql, function (error, results, fields) {
                connection.release();
                if (error) {
                    return callback(error, null);
                } 
                return callback(null, results);
                });
            }
        }
    });
}

function query(sql, callback) {    
    executeQuery(sql,function(err, data) {
        if(err) {
            return callback(err);
        }       
        callback(null, data);
    });
}

module.exports = {
    query: query,
}