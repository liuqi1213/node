var express=require('express')
var bodyParser = require('body-parser') 
var path=require('path')
var router=require('./router.js')
var session = require('express-session')
var app=express()

app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))   
app.use('/public/',express.static(path.join(__dirname,'./public/')))  

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())  
app.engine('html',require("express-art-template")) 
app.set("views",path.join(__dirname,'./views'))

app.use(session({
    // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
    // 目的是为了增加安全性，防止客户端恶意伪造
    secret: 'itcast',
    resave: false,
    saveUninitialized: false // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
  }))

app.use(router)


app.listen(3000,(rr)=>{
    console.log('run 3000');
    console.log(111);
    
})