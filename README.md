# 🛠 React Employee Task Management System

A feature-rich React-based task management system with role-based login for Admin and Employees. Employees can view task statuses like **New**, **Accepted**, **Completed**, and **Failed**, while Admin can assign tasks and monitor all employees.

---

Live Demo: https://employees-management-seven.vercel.app/

---

## 🔑 Demo Credentials

Use these credentials to login as Admin or Employee:

Admin:
Email: admin@example.com
Password: 123

Employees:
Email: employee1@example.com
Password: 123

Email: employee2@example.com
Password: 123

Email: employee3@example.com
Password: 123


---

## 🚀 Features

- 🔐 **Role-based Login System**
  - Admin and Employee have different dashboards.
  
- 📋 **Employee Dashboard**
  - View categorized tasks: New, Accepted, Completed, and Failed.
  - Tasks displayed as cards with relevant details.

- 🧑‍💼 **Admin Dashboard**
  - View all employees and their assigned tasks.
  - Assign new tasks to employees via UI.

- 💾 **Local Storage-Based Backend**
  - All data stored in browser's `localStorage`.
  - Works without backend server or API.

- ⚡ **Real-time Updates**
  - UI automatically reflects changes to assigned tasks.

---

## 🧱 Built With

- ⚛️ React JS (Functional Components + Hooks)
- 🎨 Tailwind CSS for responsive modern UI
- 📦 Context API for data sharing
- 💾 localStorage for data persistence

---

## 📦 How to Run Locally

```bash
# Step 1: Clone the repository
git clone https://github.com/yourusername/employee-task-manager.git

# Step 2: Install dependencies
cd employee-task-manager
npm install

# Step 3: Start the project
npm start
