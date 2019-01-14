var express = require("express");
var request = require("request");

// 代理

var app = express();
app.get("/",(req,res)=>{
  	let data=req.query.rq;
	console.log(data)
    res.append("Access-Control-Allow-Origin","*");

    request.get(`http://www.yaoking.cn/${data}`,(err,response,body)=>{
//      console.log(body);
})
app.listen(12345)