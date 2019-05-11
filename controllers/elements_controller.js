var express = require("express");

var router = express.Router();

var element = require("../models/element.js");

router.get("/", function(req, res) {
    element.selectAll(function(data) {
        console.log(data);
        // res.json(data);
        res.render("index", {elements: data});
    });
});

router.put("/api/elements/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    console.log(`blown up: ${blown_up}`)
    console.log(req.body);
  
    element.updateOne({
      blown_up: req.body.blown_up
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;