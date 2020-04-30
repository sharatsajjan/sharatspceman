var express=require('express');
var app=express();
var mysql = require('mysql');
var faker = require('faker');
// var bodyParser  =require("body-parser");
var bodyParser  = require("body-parser");

app.set("view engine","ejs");
// app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});

app.get("/", function(req, res){
 var q = 'SELECT COUNT(*) as count FROM users';
 connection.query(q, function (error, results) {
 if (error) throw error;
 var count= results[0].count;
 // var msg = "We have " + count + " users";
 // res.send(msg);
res.render("home",{data:count});
 });
	
console.log("someone saw our databse");
});


app.post('/register', function(req,res){

var person={email:req.body.email};
connection.query('INSERT INTO users SET?',person,function(error,result,feilds){
				 if(error) throw error;
				 console.log(result);
				 // res.send("thanks for joing our waitlist");
				 res.redirect("/");
				 
				 
				 });


	
	
console.log("post request sent "+ req.body.email);
	
});




app.get('/jokes',function(red,res){
	res.send("A family of mice were surprised by a big cat. Father Mouse jumped and and said, 'Bow-wow!' The cat ran away. 'What was that, Father?' asked Baby Mouse. 'Well, son, that's why it's important to learn a second language");
	console.log("someone requested for jokes");
	
});
app.get('/luckynumber',function(red,res){
	var num = Math.floor((Math.random() * 10) + 1);
	res.send("your lucky number "+ num);
	console.log("someone requested for homepage");
	
});

app.listen(3000,function(){
	
	console.log("server running on 3000");
});