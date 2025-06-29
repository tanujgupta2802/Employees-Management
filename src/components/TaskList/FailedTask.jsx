import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const FailedTask = () => {
  const data = useContext(AuthContext);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!data || !data.employees || !loggedInUser) return null;

  const currentEmployee = data.employees.find(
    (emp) => emp.email === loggedInUser.email
  );

  if (!currentEmployee) return null;

  const failedTasks = currentEmployee.tasks.filter((task) => task.failed);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-white mb-5">Failed Tasks</h2>
      <div
        id="taskList"
        className="h-[300px] w-full overflow-x-auto mt-5 flex items-center justify-start gap-5 flex-nowrap"
      >
        {failedTasks.length > 0 ? (
          failedTasks.map((task, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-3 h-full w-[300px] rounded-xl bg-[#1E2736]"
            >
              <div className="flex justify-between items-center">
                <h2 className="px-2 py-1 border-2 border-red-500 bg-red-500 text-white font-semibold text-sm rounded-[5px]">
                  Failed
                </h2>
                <p className="text-sm text-white font-semibold">
                  {task.taskDate}
                </p>
              </div>
              <h2 className="text-center text-white font-bold text-[20px] mt-10">
                {task.taskTitle}
              </h2>
              <p className="text-center text-white font-semibold text-[16px] mt-3">
                {task.taskDescription}
              </p>
            </div>
          ))
        ) : (
          <p className="text-white">No failed tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default FailedTask;
