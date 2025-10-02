const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "Localhost",
  user: "root",   // your MySQL username
  password: "madhan9840",   // your MySQL password
  database: "employee_db"
});
db.connect(err => {
  if (err) throw err;
  console.log("✅ MySQL Connected!");
});

// Routes
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/employees", (req, res) => {
  const { name, role, salary } = req.body;
  db.query("INSERT INTO employees (name, role, salary) VALUES (?, ?, ?)",
    [name, role, salary], (err) => {
      if (err) throw err;
      res.json({ message: "Employee added!" });
    });
});

app.delete("/employees/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM employees WHERE id=?", [id], (err) => {
    if (err) throw err;
    res.json({ message: "Employee deleted!" });
  });
});

// Start Server
app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});

// Update employee
app.put("/employees/:id", (req, res) => {
  const { id } = req.params;
  const { name, role, salary } = req.body;

  const sql = "UPDATE employees SET name = ?, role = ?, salary = ? WHERE id = ?";
  db.query(sql, [name, role, salary, id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "Employee updated successfully" });
  });
});
