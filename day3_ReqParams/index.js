 const express=require("express");
 const app=express();
 const port=3000;
//use mildware parsor json body parameter
 app.use(express.json());

 app.get("/greet/:name",(req,res)=>{
    const userName=req.params.name;
    res.send(`hello ${userName}!`);
 });

app.get("/info",(req,res)=>{
    const city=req.query.city||"unknown";
    const place=req.query.place||"unknown";
    res.send(`You are from ${city},${place}`)
});

app.post("/login",(req,res)=>{
    const {username,password}=req.body;
    res.send(`YOU login as ${username}`);
});


 app.listen(port,()=>{
    console.log(`the server is running on the port http://localhost${port}`);
 })
