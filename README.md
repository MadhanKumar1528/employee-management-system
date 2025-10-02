# Employee Management System

A simple web-based **Employee Management System** that allows users to **add, view, update, and delete employee details**.  
The project is built with **HTML, CSS, JavaScript (frontend)** and **Node.js, Express, MySQL (backend & database)**.

---

## 🚀 Features
- Add new employees with details  
- View all employees in a user-friendly dashboard  
- Update existing employee records  
- Delete employees from the system  
- Data stored securely in **MySQL database**  

---

## 🛠️ Tech Stack
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Database**: MySQL  

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system
2. Install dependencies
npm install

3. Configure Database

Install and run MySQL

Create a database (e.g., employee_db)

Import the provided SQL file (if you have one) or run:

CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  position VARCHAR(100),
  salary DECIMAL(10,2)
);


Update server.js (or config.js) with your MySQL credentials.

4. Run the server
node server.js

5. Open the app

Visit:

http://localhost:3000

📂 Project Structure
employee-management-system/
│── index.html        # Frontend UI
│── style.css         # Styling
│── script.js         # Frontend logic
│── server.js         # Node.js backend
│── package.json      # Dependencies

📸 Screenshots

![image alt](https://github.com/MadhanKumar1528/employee-management-system/blob/55a51252db229fc494f7dd717ed28ba79ebb391f/Screenshot%20(1).png)

🤝 Contributing

Feel free to fork this repo and submit pull requests to improve the project.

📜 License

This project is licensed under the MIT License.


---

