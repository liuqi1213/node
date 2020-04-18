var mongoose=require('mongoose')
var Schema=mongoose.Schema      //设计构架  确定文档的规范
mongoose.connect('mongodb://localhost/itcast')    //连接itcast数据库

var userSchema=new Schema({
  username:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  email:{
    type:String
  }
})

module.exports=mongoose.Schema('User',userSchema)