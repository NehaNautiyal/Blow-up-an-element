// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var element = {
    selectAll: function(cb) {
        orm.all("elements", function(result) {
            cb(result);
        });
    },
    updateOne: function(cb) {
        orm.update("elements", objColVals, condition, function(result) {
            cb(result);
        });
    }
}

module.exports = element;