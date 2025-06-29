import React from "react";

const NewTask = ({ tasks }) => {
  const newTasks = tasks?.filter((task) => task.newTask === true) || [];

  return (
    <div className="p-10">
      <h2 className="text-white text-2xl font-bold mb-4">New Tasks</h2>
      <div className="flex gap-4 overflow-x-auto">
        {newTasks.length > 0 ? (
          newTasks.map((task, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-3 h-full w-[300px] rounded-xl bg-[#1E2736]"
            >
              <div className="flex justify-between items-center">
                <h2 className="px-2 py-1 border-2 border-blue-500 bg-blue-500 text-white font-semibold text-sm rounded-[5px]">
                  {task.category}
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
          <p className="text-white">No New Tasks Found.</p>
        )}
      </div>
    </div>
  );
};

export default NewTask;
