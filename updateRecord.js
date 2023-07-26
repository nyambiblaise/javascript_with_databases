let http = require("http")
let server=http.Server(function (req,res) {
    res.end("<h1>HEY MAN </h1>")
})
//server.listen(8080)
let mysql = require("mysql")
con = mysql.createConnection(
    {
        host: "localhost",
        username: "root",
        password:""
    }
)
con.connect(function (err) {
    if(err){
        console.log("Something went wrong => "+err.message)
        return false
    }
    console.log("Server Online")
})