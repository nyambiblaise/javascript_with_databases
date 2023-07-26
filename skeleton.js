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
//enter your SQL Query here...insert,drop,delete,update,truncate..except select
let sql = "";
//we execute our SQL query
con.query(sql,function (errorMessage) {
    //we get the sql error message
    if(errorMessage) {
        console.log("Error connecting to server "+errorMessage);
        return false; //we terminate the program here
    }
    console.log("Data Inserted"); //enter display message
})