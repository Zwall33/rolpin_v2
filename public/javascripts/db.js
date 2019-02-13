import mysql from "mysql";

const pool = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'lea-server',
    password : 'lea-server',
    database : 'test_lea_rolpin',
    debug    : false 
});                    

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
    query: query
}

/*let conn;

export default{
    connect: async()=>{
        try{
            if (conn !== undefined) {
                console.log('MySQL client already connected.');
                return;
            }
            const connection = mysql.createConnection({
                host: '127.0.0.1',
                user: 'root',
                password:'',
                database:'test_lea_rolpin'
            });
            await connection.connect();
            conn = connection;

        }catch(err){
            console.log(err);
        }
    },
    getConnection:()=>conn,
    query: () => util.promisify(conn.query).bind(conn),

    quit: async () => {
        try {
        await conn.end();
        } catch (error) {
        throw (error);
        }
    }
};*/
