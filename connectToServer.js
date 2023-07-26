//we define our mysql object
let mysql = require("mysql");
//we create a connection
let con = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"",
   database:"a_swe1"
});
//we connect to the server
con.connect(function (errorMessage) {
   if(errorMessage){
      console.log("Error"+errorMessage);
      return;
   }
   console.log("Server Running 123...");
})