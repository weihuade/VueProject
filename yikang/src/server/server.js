var express = require("express");
var request = require("request");

// 代理

var app = express();
app.get("/",(req,res)=>{
<<<<<<< HEAD
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
    

   
  
  
=======
      let data=req.query.rq;
    //   let datas=req.query.rqs;
	// console.log(data)
    res.append("Access-Control-Allow-Origin","*");
    request.get(`${data}`,(err,response,body)=>{
     console.log(body);

        res.send(body);
    })
>>>>>>> 393cd8428063437e05e9d3f3c00071635f86ceb2
})
app.listen(12345)