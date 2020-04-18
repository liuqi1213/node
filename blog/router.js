var express=require('express')
var user=require('./models/user.js')
var router=express.Router();


router.get('/',(req,res)=>{
    res.render('index.html',{
        user:req.session.user
    })
})

router.get('/login',(req,res)=>{
    req.render('login.html')
})

router.post('/login',(req,res)=>{
    var body=req.body

})

// module.expores=router
module.exports = router