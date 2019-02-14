class Request {
    
    static getDefautSQL() {
        let sql = `SELECT * FROM Defaut`;
        return sql;           
    }

    static get10ProductSQL() {
        let sql = `SELECT Nb_plis_heure,Nb_stack_jour FROM Production ORDER BY day DESC LIMIT 10`;
        return sql;           
    }
    static getProductSQL() {
        let sql = `SELECT Nb_plis_heure,Nb_stack_jour FROM Production ORDER BY day DESC LIMIT 1`;
        return sql;           
    }

}
export default Request;