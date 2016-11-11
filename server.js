var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'kislayagrahari',
    database: 'kislayagrahari',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'kissintern.html'));
});
app.get('/ui/kissintern.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'kissintern.html'));
});

app.get('/ui/intern.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'intern.css'));
});
app.get('/ui/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});

app.get('/ui/hhhh.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hhhh.png'));
});
app.get('/ui/main_bg.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main_bg.gif'));
});
app.get('/ui/thinking-man.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'thinking-man.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
