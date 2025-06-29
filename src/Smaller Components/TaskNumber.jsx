import React from "react";

const TaskNumber = ({ tasks }) => {
  const newTasks = tasks.filter((t) => t.newTask).length;
  const completed = tasks.filter((t) => t.completed).length;
  const accepted = tasks.filter((t) => t.active && !t.newTask).length;
  const failed = tasks.filter((t) => t.failed).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-[90%] sm:w-[80%] ml-4 sm:ml-[120px]">
      <div className="h-auto w-full p-5 text-2xl font-semibold border-2 border-blue-500 bg-blue-500 text-white rounded-xl">
        {newTasks}
        <h3 className="pt-2">New Task</h3>
      </div>
      <div className="h-auto w-full p-5 text-2xl font-semibold border-2 border-green-400 bg-green-400 text-white rounded-xl">
        {completed}
        <h3 className="pt-2">Completed</h3>
      </div>
      <div className="h-auto w-full p-5 text-2xl font-semibold border-2 border-yellow-400 bg-yellow-400 text-white rounded-xl">
        {accepted}
        <h3 className="pt-2">Accepted</h3>
      </div>
      <div className="h-auto w-full p-5 text-2xl font-semibold border-2 border-orange-500 bg-orange-500 text-white rounded-xl">
        {failed}
        <h3 className="pt-2">Failed</h3>
      </div>
    </div>
  );
};

export default TaskNumber;
