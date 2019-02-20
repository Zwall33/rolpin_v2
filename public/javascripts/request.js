class Request {
    
    static getDefautSQL() {
        let sql = `SELECT * FROM Defaut`;
        return sql;           
    }

    static get10init_plis() {
        let sql = `SELECT Nb_plis_heure,Nb_stack_jour FROM Production ORDER BY day DESC LIMIT 10`;
        return sql;           
    }

    static getPlis_stack() {
        let sql = "SELECT Nb_plis_heure,Nb_stack_jour FROM Production ORDER BY day DESC LIMIT 1";
        return sql;           
    }

    static getDefautLEA(){
        let sql = "SELECT * FROM Defaut ORDER BY Frequence DESC";
        return sql;
    }
}
export default Request;