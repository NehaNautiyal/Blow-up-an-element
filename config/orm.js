// Import MySQL connection.
var connection = require("./connection");

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function(error, result) {
            if (error) {
                console.log(error.message);
                return;
            }
            cb(result);
        });
    }
}

module.exports = orm;