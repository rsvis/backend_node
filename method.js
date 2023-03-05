const express = require('express');
const app = express()
//middlewerefunction => post => json convert
app.use(express.json())
app.listen(3000);
let user = {};
//GET
app.get('/user',(req,res)=>{
    console.log(req.params.id)
    console.log(req.params)
    // res.send(user)
})
//POST
app.post('/user',(req,res)=>{
    console.log(req.body);
    user= req.body

    res.json({
        message:'data recived sucessfully',
        data:req.body
    })
})
//PATCH

app.patch('/user',(req,res)=>{
    console.log(req.body)
    dataToBeUpdated = req.body
    for(key in dataToBeUpdated){
        user[key]=dataToBeUpdated[key];
    }
    res.json({
        message:'data update sucessfully',
        data:user
    })
})
// Delete
app.delete('/user',(req,res)=>{
    user={};
    res.json({
        message:"deleted",
        data:user
    })
})

//Params (parameters)
app.get('/user/:id',(req,res)=>{
    console.log(req.params.id)
    console.log(req.params)
    res.send("user id is");
})

//queirs
// app.get('/user/?',(req,res)=>{
//     console.log(req.params.id)
//     console.log(req.params)
//     res.send("queries");
// })
