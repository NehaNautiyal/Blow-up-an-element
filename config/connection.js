var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-02.cleardb.net",
    user: "b096084e4163e6",
    password: "2c9e4d97",
    database: "heroku_e963bb9616bddd6"
  });

  

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;