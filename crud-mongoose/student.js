var mongoose=require('mongoose')
var Schema=mongoose.Schema      //设计构架  确定文档的规范
mongoose.connect('mongodb://localhost/testTwo',{useNewUrlParser: true, useUnifiedTopology: true})    //连接itcast数据库
var userSchema=new Schema({
	name:{
		type:String,
		require:true
	},
	gender:{
        type:Number,
        enum:[0,1],
        defaule:0
		
	},
	age:{
		type:Number
    },
    hobbies:{
        type:String
    }
})

module.exports=mongoose.model('User',userSchema) 