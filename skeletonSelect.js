//we import the mysql class and assigning it to mysql
let mysql = require("mysql");

//we create a connection to the server using the "con" object
let con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"a_swe1"
});
//we connect to the server and get an error message if !successful
con.connect(function (errorMessage) {
    if(errorMessage) {
        console.log("Error connecting to server "+errorMessage);
        return false;
    }
    console.log("Server Connected Succefully");//optional
});
//enter ONLY select SQL Query here...
let sql = "";
//we execute our SQL query
    con.query(sql,function (err,res) {
        let k=0; //we initialize our counter for #of rows
        if(err) throw err;

        //if you want to display all raw result.use this
        console.log(res);

        //we now create an object from the returned object "res"
        Object.keys(res).forEach(function (key) {
            k++;
            let data = res[key]; //we get the keys of each object
            console.log(data.stuFirstName)
        });
        console.log("Total Students: "+k);
    });