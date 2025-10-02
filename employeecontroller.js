const Employee = require("../models/employeeModel");

exports.getEmployees = (req, res) => {
  Employee.getAll((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.addEmployee = (req, res) => {
  Employee.create(req.body, (err, result) => {
    if (err) throw err;
    res.json({ message: "Employee added!" });
  });
};

exports.updateEmployee = (req, res) => {
  Employee.update(req.params.id, req.body, (err, result) => {
    if (err) throw err;
    res.json({ message: "Employee updated!" });
  });
};

exports.deleteEmployee = (req, res) => {
  Employee.delete(req.params.id, (err, result) => {
    if (err) throw err;
    res.json({ message: "Employee deleted!" });
  });
};
