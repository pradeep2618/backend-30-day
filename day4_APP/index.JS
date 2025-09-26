 const express=require("express");
 const app=express();
 const port=3000;
//mildware to parse json body
 app.use(express.json());
// temporary database
 let students=[
    {id:1,name:"Ramesh",age:20},
    {id:2,name:"Amit",age:22}
 ];

 //read all the students
 app.get("/students",(req,res)=>{
    res.json(students);

 });

 //read single stundent by id
app.get("student/:id",(req,res)=>{
    const student=students.find(s=>s.id===parseInt(req.params.id));
    if(!student)return res.status(404).send("student not find");
    res.json(student);
});

//create a new student 
app.post("/students",(req,res)=>{
    const {name ,age }= req.body;
    const NewStudent={
        id:students.length+1,
        name,
        age
    };
    students.push(NewStudent);
    res.status(201).json(NewStudent);
});
//update a student 

app.put("/students/:id",(req,res)=>{
    const student=students.find(s=>s.id===parseInt(req.params.id));
    if(!student) return res.status(404).send("studnet not found");
    const {name ,age }=req.body;
    student.name=name||student.name;
    student.age=age||student.age;
    res.json(student);

});

app.delete("/students/:id",(req,res)=>{
    students=student.filter(s=>s.id!==parseInt(req.params.id));
    res.send("student deleted successfully");

});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});


