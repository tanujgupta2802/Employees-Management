import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

const AllTasks = () => {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const { employees } = getLocalStorage();

    // collect all tasks with employee email
    const tasks = employees.flatMap((emp) =>
      emp.tasks.map((task) => ({
        ...task,
        assignedTo: emp.email,
      }))
    );

    setAllTasks(tasks);
  }, []);

  return (
    <div className="pt-10 bg-black min-h-screen">
      <div
        id="fullTask"
        className="h-[200px] overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none py-6 sm:py-8 md:py-10"
      >
        {allTasks.length === 0 ? (
          <p className="text-white text-center">No tasks assigned yet.</p>
        ) : (
          allTasks.map((task, index) => (
            <div
              key={index}
              className="bg-[#1E2736] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[46%] mx-auto rounded-xl py-5 px-4 mb-10"
            >
              <h2 className="text-white text-xl font-semibold">
                {task.assignedTo}
              </h2>
              <h3 className="text-white text-lg">{task.taskTitle}</h3>
              <h5 className="text-white text-sm opacity-70">
                Status:{" "}
                {task.completed
                  ? "Completed"
                  : task.failed
                  ? "Failed"
                  : task.newTask
                  ? "New"
                  : "Active"}
              </h5>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllTasks;
