const express=require("express");
const  app=express();
const port=3000;

app.get("/student/:id",(req,res)=>{
    const rollno=req.params.id;
    res.send(`student roll no is:${rollno}`);
});

app.get("/book/:id",(req,res)=>{
    const bookid=req.params.id;
    res.send(`book id is:${bookid}`);
});

app.get("/book/search",(req,res)=>{
    const {author,name}=req.query;
    res.send(`book name  is ${name},Author is:${author}`);
});

app.get("/movie",(req,res)=>{
    const {name, year}=req.query;
    res.send(`movie name is ${name}, & year is ${year}`);
});

app.listen(port,()=>{

      console.log(`the server is running on the port http://localhost:${port}`);

});