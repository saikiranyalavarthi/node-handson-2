
const express =require('express');
const app =express();

app.get('/main',(req,res)=>{
    res.send("<h1>hello world to main</h1>")
})

app.get('/home',(req,res)=>{
    res.send("<h1> hello world home</h1>")
})

app.listen(4000,()=>console.log("server is running"))