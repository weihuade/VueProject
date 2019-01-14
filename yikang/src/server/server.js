var express = require("express");
var request = require("request");

// 代理

var app = express();
app.get("/",(req,res)=>{
  	let data=req.query.rq;
	console.log(data)
    res.append("Access-Control-Allow-Origin","*");
<<<<<<< HEAD
    request.get(`http://www.yaoking.cn/${data}`,(err,response,body)=>{
//      console.log(body);

=======
    request.get("http://www.yaoking.cn/wap/gallery-cate_ajax.html",(err,response,body)=>{
        // console.log(body);
>>>>>>> 5c79530f674fd7f8c00ca20a02635270afc18400
        res.send(body);
    })
})
app.listen(12345)