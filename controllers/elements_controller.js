var express = require("express");

var router = express.Router();

var element = require("../models/element");

router.get("/", function(req, res) {
    element.all(function(data) {
        console.log(data);
        // res.json(data);
        res.render("index", {elements: data});
    });
});

module.exports = router;