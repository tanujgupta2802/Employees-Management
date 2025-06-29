import React, { useState } from "react";
import AdminHeader from "../../Smaller Components/AdminHeader";
import AllTasks from "../../Smaller Components/AllTasks";
import { updateEmployeeTasks, getLocalStorage } from "../../utils/LocalStorage";

const AdminDashboard = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignedEmail, setAssignedEmail] = useState("");
  const [category, setCategory] = useState("");
  const [updateFlag, setUpdateFlag] = useState(false); // for rerendering AllTasks

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    };

    // Check if email exists
    const { employees } = getLocalStorage();
    const found = employees.find((emp) => emp.email === assignedEmail);
    if (!found) {
      alert("❌ Employee not found!");
      return;
    }

    // Save task
    updateEmployeeTasks(assignedEmail, newTask);
    setUpdateFlag((prev) => !prev); // to trigger re-render in AllTasks

    // Clear form
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignedEmail("");
    setCategory("");

    alert("✅ Task assigned successfully!");
  };

  return (
    <>
      <AdminHeader />
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-[#1e1e1e] text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Create Task</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm">Task Title</label>
              <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Name of task"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Description</label>
              <textarea
                rows="3"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Detailed description of task"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Date</label>
              <input
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">
                Assign To (Employee Email)
              </label>
              <input
                type="email"
                value={assignedEmail}
                onChange={(e) => setAssignedEmail(e.target.value)}
                placeholder="employee@example.com"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Design, Development, etc."
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200 transition"
            >
              Create Task
            </button>
          </form>
        </div>
      </div>
      <AllTasks key={updateFlag} />
    </>
  );
};

export default AdminDashboard;
