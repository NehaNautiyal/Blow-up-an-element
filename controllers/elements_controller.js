var express = require("express");

var router = express.Router();

var element = require("../models/element");

router.get("/", function(req, res) {
    element.all(function(data) {
        console.log(data);
        res.json(data);
    });
});