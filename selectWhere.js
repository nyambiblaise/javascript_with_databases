let mysql = require("mysql");
let con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"a_swe1"
});
con.connect(function (err) {
    if(err){
        console.log("Error => "+err);
        return false;
    }
    console.log("Server OK");
    let sql = "select * from students where stuID=12";
    con.query(sql,function (err,res) {
        let k=0;
        if(err) throw err;
        Object.keys(res).forEach(function (key) {
            k++;
            let data = res[key];
            console.log(data.stuFirstName+" "+data.stuLastName)
        });
        console.log("Total Students: "+k);
    })
})