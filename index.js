require('dotenv').config();
const express=require('express')
const app=express()

const port=4000;
app.get('/',(req,res)=>{
    res.send("hli gulam")
})
app.get('/gym',(req,res)=>{
    res.send("yo man ")
})
app.listen(process.env.PORT,()=>{
    console.log(`sercer is running at port:&{port}`)
})