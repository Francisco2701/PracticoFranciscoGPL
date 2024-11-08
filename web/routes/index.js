var express = require('express');
var router = express.Router();

var datos = require("../data/dataprovider");


router.get('/', function(req, res, next) { 
  res.render('home', {head_title: "Home"});
});

router.get('/entrada', function(req, res, next) { 
  res.redirect("/entrada");
});

