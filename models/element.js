// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var element = {
    selectAll: function(cb) {
        orm.all("elements", function(result) {
            cb(result);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.update("elements", objColVals, condition, function(result) {
            cb(result);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.create("elements", cols, vals, function(res) {
          cb(res);
        });
      }
}

module.exports = element;