let mysql = require("mysql");
let con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"a_swe1"
});
con.connect(function (e) {
    if(e) throw e;
});
let sql = "";
con.query(sql,function (error) {
    if(error) throw error;
    console.log("Table Created");
})