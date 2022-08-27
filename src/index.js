const express=require("express");
const app=express();
const fs=require("fs");
const validation = require("./validatation");
app.use(express.json());
const moviesdatapath=fs.readFileSync('./db.json','utf8');
const moviesdata=JSON.parse(moviesdatapath)
console.log(moviesdata)
app.use(validation);
app.post("/movies",(req,res)=>{
    let body=req.body;
    moviesdata.movies.push(body)
})
app.get("/",(req,res)=>{
    res.send("I AM HOMEPAGE")
})
app.listen(8000,()=>{
    console.log("I AM LISTENING PORT 8000")
})
