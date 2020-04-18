var express=require('express')
var path=require("path")
var app=express()
app.engine('html',require("express-art-template"))
app.set("views",path.join(__dirname,"./views"))


app.get('/',(req,res)=>{
    res.render('index.html',{
        name:"张三"
    })
})

app.listen(8080,()=>{
    console.log('run 8080');
    
})