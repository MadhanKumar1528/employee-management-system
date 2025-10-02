const API = "http://localhost:5000/employees";

// Load all employees from MySQL
async function loadEmployees() {
  const res = await fetch(API);
  const data = await res.json();
  let rows = "";
  data.forEach(emp => {
    rows += `<tr>
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.role}</td>
      <td>${emp.salary}</td>
      <td>
        <button onclick="editEmployee(${emp.id}, '${emp.name}', '${emp.role}', '${emp.salary}')">✏️ Update</button>
        <button onclick="deleteEmployee(${emp.id})">🗑 Delete</button>
      </td>
    </tr>`;
  });
  document.querySelector("#employeeTable tbody").innerHTML = rows;
}

// Add new employee
async function addEmployee() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const salary = document.getElementById("salary").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, role, salary })
  });

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
  document.getElementById("salary").value = "";

  loadEmployees();
}

// Delete employee
async function deleteEmployee(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  loadEmployees();
}

// Show update form
function editEmployee(id, name, role, salary) {
  document.getElementById("updateForm").style.display = "block";
  document.getElementById("updateId").value = id;
  document.getElementById("updateName").value = name;
  document.getElementById("updateRole").value = role;
  document.getElementById("updateSalary").value = salary;
}

// Save update
async function saveUpdate() {
  const id = document.getElementById("updateId").value;
  const name = document.getElementById("updateName").value;
  const role = document.getElementById("updateRole").value;
  const salary = document.getElementById("updateSalary").value;

  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, role, salary })
  });

  document.getElementById("updateForm").style.display = "none";
  loadEmployees();
}

// Cancel update
function cancelUpdate() {
  document.getElementById("updateForm").style.display = "none";
}

// Load employees on page load
loadEmployees();

data.forEach(emp => {
  rows += `<tr>
    <td>${emp.id}</td>
    <td>${emp.name}</td>
    <td>${emp.role}</td>
    <td>${emp.salary}</td>
    <td>
      <button class="update-btn" onclick="editEmployee(${emp.id}, '${emp.name}', '${emp.role}', '${emp.salary}')">✏️ Update</button>
      <button class="delete-btn" onclick="deleteEmployee(${emp.id})">🗑 Delete</button>
    </td>
  </tr>`;
});

// Render employee table
data.forEach(emp => {
  rows += `<tr>
    <td>${emp.id}</td>
    <td>${emp.name}</td>
    <td>${emp.role}</td>
    <td>${emp.salary}</td>
    <td>
      <button class="update-btn" onclick="editEmployee(${emp.id}, '${emp.name}', '${emp.role}', '${emp.salary}')">✏️ Update</button>
      <button class="delete-btn" onclick="deleteEmployee(${emp.id})">🗑 Delete</button>
    </td>
  </tr>`;
});

