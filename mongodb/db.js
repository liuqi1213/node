var mongoose=require('mongoose')
var Schema=mongoose.Schema
mongoose.connect('mongodb://localhost/testTwo')
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


var User=mongoose.model('User',userSchema) 

var admin=new User({        //创建名字为 admin的文档
	username:"zs",
	password:'123456',
	email:"123@12.com"
})

// admin.save((err,ret)=>{     //保存文档
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('成功');
// 		console.log(ret);     //ret为保存的数据
// 	}
// })


User.find((err,ret)=>{
	if(err){
		console.log(err);
	}else{
		console.log(ret);
	}
})


// User.remove({
//     username:'zs'
// },function(err,ret){
//     if(err){
//         console.log('删除失败');
//     }else{
//         console.log('删除成功');
//         console.log(ret);
        
//     }
// })

User.findByIdAndUpdate('5e91f57c8f0a944ea8866d87',{
    password:'000'
},(err,ret)=>{
    if(err){
        console.log('更新失败');
        
    }else{
        console.log('更新成功');
        
    }

})