// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var element = {
    all: function(cb) {
        orm.selectAll("elements", function(res) {
            cb(res);
        });
    }
}

module.exports = element;