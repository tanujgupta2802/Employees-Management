import React, { useEffect, useState } from "react";

const CompleteTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const allEmployees = JSON.parse(localStorage.getItem("employees"));

    if (loggedInUser && allEmployees) {
      const currentEmployee = allEmployees.find(
        (emp) => emp.email === loggedInUser.email
      );

      if (currentEmployee) {
        const completedTasks = currentEmployee.tasks.filter(
          (task) => task.completed
        );
        setTasks(completedTasks);
      }
    }
  }, []);

  return (
    <div className="pt-10 bg-black min-h-screen">
      <div
        id="completeTask"
        className="h-[200px] overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none py-6 sm:py-8 md:py-10"
      >
        {tasks.length === 0 ? (
          <p className="text-white text-center">No completed tasks.</p>
        ) : (
          tasks.map((task, index) => (
            <div
              key={index}
              className="bg-[#1E2736] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[46%] mx-auto rounded-xl py-5 px-4 mb-10"
            >
              <h2 className="text-white text-xl font-semibold">
                {task.taskTitle}
              </h2>
              <h3 className="text-white text-lg">{task.taskDescription}</h3>
              <h5 className="text-white text-sm opacity-70">Completed</h5>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CompleteTask;
