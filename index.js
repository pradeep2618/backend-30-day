 const express=require("express");
 const app=express();
 const port=3000;

 app.get("/",(req,res)=>{
    res.send("this is my first express server page");
 });

 app.get("/home",(req,res)=>{
    res.send("this is home page");

 });

 app.get("/contact",(req,res)=>{
    res.send("this is contact page");
 });

//start server
 app.listen(port,()=>{
    console.log(`this server is running on http://localhost:${port}`);
 })
