import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = () => {
  const { employees } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (employees && loggedInUser) {
      const employee = employees.find((e) => e.email === loggedInUser.email);
      if (employee) {
        const acceptedTasks = employee.tasks.filter(
          (task) =>
            task.active === true &&
            task.completed === false &&
            task.failed === false
        );
        setTasks(acceptedTasks);
      }
    }
  }, [employees]);

  return (
    <div className="p-10">
      <h2 className="text-white text-2xl font-bold mb-5">Accepted Tasks</h2>
      <div className="flex flex-wrap gap-5 justify-start">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="p-4 w-[300px] bg-[#1E2736] text-white rounded-xl"
          >
            <div className="flex justify-between items-center">
              <h2 className="px-2 py-1 border-2 border-yellow-500 bg-yellow-500 text-white font-semibold text-sm rounded-[5px]">
                Accepted
              </h2>
              <p className="text-sm font-semibold">{task.taskDate}</p>
            </div>
            <h2 className="text-center text-white font-bold text-[20px] mt-10">
              {task.taskTitle}
            </h2>
            <p className="text-center text-white font-semibold text-[16px] mt-3">
              {task.taskDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcceptTask;
