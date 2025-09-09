 const express=require("express");
 const app=express();
 const port=3000;
 
 app.use(express.json());

 app.get("/student/:roll",(req,res)=>{
    const roll=req.params.roll;
    const {name ,age}=req.query;
    if(!name||!age){
        return req.send("Please provide both name and age");

    }
    res.send(`Roll number:{roll},Name:${name},Age:${age}`);
 });

 app.get("/movies",(req,res)=>{
    const  { name, year, rating}=req.query;
    if(!name||!year||!rating){
        return res.send("Please provide all name year and author of the movie ");
    }
    res.send(`Movie:${name},Year:${year},Rating:${rating}`);
 });

 app.listen(port,()=>{
  console.log(`The server is running on http://localhost:${port}`);
 });