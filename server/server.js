/* global require */
var http=require('http');
// var querystring=require('querystring');

http.createServer(function(req,res){
　　var postData='';
　　req.setEncoding('utf8');

　　req.on('data',function(chunk){
　　　　postData += chunk;
　　});
　　req.on('end',function(){
　　　　res.end(postData + "hehe");
　　});
}).listen(3000);
console.log("服务启动。。。");