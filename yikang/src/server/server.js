var express = require("express");
var request = require("request");

// 代理

var app = express();
app.get("/",(req,res)=>{
  	let data=req.query.rq;
  	let homedata=req.query.home
    res.append("Access-Control-Allow-Origin","*");
    if(homedata=="https://fe-wcgi.jianke.com/v1/searchs?cid=5411&pn=1&ps=10"){
    	request.get("https://fe-wcgi.jianke.com/v1/searchs?cid=5411&pn=1&ps=10",(err,response,body)=>{

				res.send(body)
		})
    }
    else{
    	 request.get(`http://www.yaoking.cn/${data}`,(err,response,body)=>{

			res.send(body)
		})
    }
    

   
  
  
})
app.listen(12345)