import React, { useEffect, useState } from "react";
import Header from "../../Smaller Components/Header";
import TaskNumber from "../../Smaller Components/TaskNumber";
import TaskList from "../TaskList/TaskList";
import { getLocalStorage } from "../../utils/LocalStorage";

const EmployeeDashboard = ({ userEmail, onLogout }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const { employees } = getLocalStorage();
      const current = employees.find((e) => e.email === userEmail);
      if (current) {
        setTasks(current.tasks);
      }
    }, 1000); // check every 1 second

    return () => clearInterval(interval);
  }, [userEmail]);

  return (
    <>
      <div className="min-h-screen bg-black">
        <Header onLogout={onLogout} />
        <TaskNumber tasks={tasks} />
        <TaskList tasks={tasks} />
      </div>
    </>
  );
};

export default EmployeeDashboard;
