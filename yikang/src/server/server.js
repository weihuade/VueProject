var express = require("express");
var request = require("request");
// 代理
var app = express();
app.get("/",(req,res)=>{
    
    res.append("Access-Control-Allow-Origin","*");
    request.get("http://www.yaoking.cn/wap/gallery-cate_ajax.html",(err,response,body)=>{
        console.log(body);
        res.send(body);
    })
})
app.listen(12345)