const express = require("express");
const app = express();
const port = 3000;

// ===== Application-level Middleware: Logging =====
app.use((req, res, next) => {
  console.log(`method:${req.method}, URL:${req.url}, Time:${new Date()}`);
  next();
});

// ===== Middleware to parse JSON body =====
app.use(express.json());

// ===== Route-level Middleware: Auth Check =====
function checkAuth(req, res, next) {
  const token = req.query.token;
  if (token === "12345") {
    next();
  } else {
    res.status(401).send("Unauthorized: Invalid token");
  }
}

// ===== In-memory data =====
let students = [
  { id: 1, name: "Ramesh", age: 20 },
  { id: 2, name: "Suresh", age: 22 }
];

// ===== CRUD Routes =====

// Read all students
app.get("/students", (req, res) => {
  res.json(students);
});

// Read single student by ID
app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send("Student not found");
  res.json(student);
});

// Create new student (Auth required)
app.post("/students", checkAuth, (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) return res.status(400).send("Name and age required");

  const newStudent = {
    id: students.length + 1,
    name,
    age
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// Update student (Auth required)
app.put("/students/:id", checkAuth, (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send("Student not found");

  const { name, age } = req.body;
  student.name = name || student.name;
  student.age = age || student.age;

  res.json(student);
});

// Delete student (Auth required)
app.delete("/students/:id", checkAuth, (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send("Student not found");

  students = students.filter(s => s.id !== student.id);
  res.send("Student deleted successfully");
});

// ===== Error-handling Middleware =====
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).send("Internal Server Error!");
});

// ===== Start server =====
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
