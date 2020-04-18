// var fs = require('fs')

// var p1 = new Promise((resolve, reject) => {
//     fs.readFile('./data/a.txt', 'utf8', (err, data) => {
//         if (err) {
//             reject(err)
//         }
//         resolve(data)
//     })
// })

// var p2 = new Promise((resolve, reject) => {
//     fs.readFile('./data/b.txt', 'utf8', (err, data) => {
//         if (err) {
//             reject(err)
//         }
//         resolve(data)
//     })
// })

// var p3 = new Promise((resolve, reject) => {
//     fs.readFile('./data/c.txt', 'utf8', (err, data) => {
//         if (err) {
//             reject(err)
//         }
//         resolve(data)
//     })
// })


// p1.then((data) => {
//     console.log(data);
//     return p2
// }, (err) => {
//     console.log(err);

// }).then((data) => {
//     console.log(data);
//     return p3
// }, (err) => {
//     console.log(err);

// }).then((data) => {
//     console.log(data);

// }, (err) => {
//     console.log(err);

// })


// 对上面代码进一步封装

var fs=require('fs')
function pReadFile(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

pReadFile('./data/a.txt').then((data)=>{
    console.log(data);
    return pReadFile('./data/a.txt')
},(err)=>{
    console.log(err);
    
}).then((data)=>{
    console.log(data);
    return pReadFile('./data/b.txt')
},(err)=>{
    console.log(err);
    
}).then((data)=>{
    console.log(data);
    
},(err)=>{
    console.log(err);
    
})