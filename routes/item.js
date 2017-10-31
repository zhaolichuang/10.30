var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'xinwen'
})

/* GET home page. */
router.get("/list", function(req, res, next) {
  connection.query('SELECT id,name FROM xinwen1', function(err, rows, fields) {
    res.header("Access-Control-Allow-Origin","*")
    res.send(rows)
  });
});
router.post("/detail", function(req, res, next) {
  var id=req.body.abc
  connection.query('SELECT name,xiangqing FROM xinwen1 WHERE id='+id, function(err, rows, fields) {
    res.header("Access-Control-Allow-Origin","*")
    res.send(rows)
    if(err)throw err;
  });
});

module.exports = router;
