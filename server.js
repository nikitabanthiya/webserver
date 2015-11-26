var express = require('express');
var app = express();
var port = process.env.POST || 5000;
var middleware = require('./middleware.js');
/*var middleware ={
	requireAuthentication:function (req, res, next){
		console.log('private route hit!');
		next();
	},
	logger:function(req,res,next){
		console.log(req.method);
		next();
	}
};*/
app.use(middleware.logger);
//app.use(middleware.requireAuthentication);
/*app.get('/',function(req,res){
	res.send('Nikita');
});*/
app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send('About Us');
});
app.use(express.static(__dirname +'/public'));

//console.log(__dirname)
app.listen(port,function(){
	console.log("started" + port);
});
