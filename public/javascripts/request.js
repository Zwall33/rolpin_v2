class Request {
    static getDefautLEA(){
        let sql = "SELECT * FROM Defauts ORDER BY id DESC";
        return sql;
    }
    static getInitAverageHeure(){
        let sql = 'SELECT * FROM Moyenne_heure ORDER BY Heure DESC LIMIT 10';
        return sql;
    }
    static getAverageMin(){
        let sql = 'SELECT * FROM Moyenne_min ORDER BY Heure DESC LIMIT 1';
        return sql;
    }
    static getAverageHeure(){
        let sql = 'SELECT * FROM Moyenne_heure ORDER BY Heure DESC LIMIT 1';
        return sql;
    }
    static getProdinShift(){
        let sql = 'SELECT * FROM shift ORDER BY id DESC';
        return sql;
    }
    static getTempsArret(){
        let sql = 'SELECT * FROM DureeRArret ORDER BY id DESC';
        return sql;
    }
    static getProduction(){
        let sql = 'SELECT * FROM Production ORDER BY id DESC';
        return sql;
    }
}
export default Request;