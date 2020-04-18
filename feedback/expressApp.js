var express=require('express')
var bodyParser = require('body-parser')

var app=express()

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())  

app.engine('html',require("express-art-template")) 

var comments = [{
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]
app.get('/',(req,res)=>{
   res.render('index.html',{
       comments
   })
})

app.get('/post',(req,res)=>{
    res.render('post.html')
})

app.post('/post',(req,res)=>{
    var comment=req.body
    comments.unshift(comment)
    res.redirect('/')
})
app.listen(8080)