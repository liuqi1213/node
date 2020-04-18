
var express=require('express')
var fs=require('fs')
var Student=require('./student')
var router=express.Router()

//开始 学生页面渲染
router.get('/students',(req,res)=>{
   Student.find((err,students)=>{
       if(err){
       return res.send(err)
       }
       res.render('index.html',{
        students
       })
   })
})
//添加学生页面渲染
router.get('/students/new',(req,res)=>{
  res.render('new.html')
})

//完成添加学生
router.post('/students/new',(req,res)=>{
   new Student(req.body).save((err)=>{
        if(err){
            return res.status(500).send('1server err')
        }
        res.redirect('/students')
    })
})
//修改学生页面渲染
router.get('/students/edit',(req,res)=>{
    Student.findById(req.query.id,(err,student)=>{
        if(err){
            return res.status(500).send('2server err')
        }
        console.log(student);
        
        res.render('edit.html',{
            student
        })
    })
})

router.post('/students/edit',(req,res)=>{
    Student.findByIdAndUpdate(req.body.id,req.body,(err)=>{
        if(err){
            return res.status(500).send('3server err')
        }
        res.redirect('/students')
    })
})

//删除学生
router.get('/students/delete',(req,res)=>{
  Student.findByIdAndRemove(req.query.id,(err)=>{
    //   res.send(req.query.id)
      if(err){
          return res.status(500).send('4server err')
      }
      res.redirect('/students')
  })
})
module.exports=router
