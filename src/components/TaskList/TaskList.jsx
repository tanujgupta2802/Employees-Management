import React, { useState } from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ tasks }) => {
  const [activeTab, setActiveTab] = useState("new");

  const renderComponent = () => {
    switch (activeTab) {
      case "new":
        return <NewTask tasks={tasks} />;
      case "accepted":
        return <AcceptTask tasks={tasks} />;
      case "completed":
        return <CompleteTask tasks={tasks} />;
      case "failed":
        return <FailedTask tasks={tasks} />;
      default:
        return <NewTask tasks={tasks} />;
    }
  };

  return (
    // <div className="px-4 py-6 bg-black min-h-screen">
    //   <div className="flex justify-center gap-4 mb-6">
    //     <button
    //       onClick={() => setActiveTab("new")}
    //       className={`px-4 py-2 rounded text-white font-semibold ${
    //         activeTab === "new" ? "bg-blue-500" : "bg-gray-700"
    //       }`}
    //     >
    //       New
    //     </button>
    //     <button
    //       onClick={() => setActiveTab("accepted")}
    //       className={`px-4 py-2 rounded text-white font-semibold ${
    //         activeTab === "accepted" ? "bg-yellow-500" : "bg-gray-700"
    //       }`}
    //     >
    //       Accepted
    //     </button>
    //     <button
    //       onClick={() => setActiveTab("completed")}
    //       className={`px-4 py-2 rounded text-white font-semibold ${
    //         activeTab === "completed" ? "bg-green-500" : "bg-gray-700"
    //       }`}
    //     >
    //       Completed
    //     </button>
    //     <button
    //       onClick={() => setActiveTab("failed")}
    //       className={`px-4 py-2 rounded text-white font-semibold ${
    //         activeTab === "failed" ? "bg-red-500" : "bg-gray-700"
    //       }`}
    //     >
    //       Failed
    //     </button>
    //   </div>
    //   {renderComponent()}
    // </div>
    <div className="px-4 py-6 bg-black min-h-screen">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("new")}
          className={`px-4 py-2 rounded text-white font-semibold ${
            activeTab === "new" ? "bg-blue-500" : "bg-gray-700"
          }`}
        >
          New
        </button>
        <button
          onClick={() => setActiveTab("accepted")}
          className={`px-4 py-2 rounded text-white font-semibold ${
            activeTab === "accepted" ? "bg-yellow-500" : "bg-gray-700"
          }`}
        >
          Accepted
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`px-4 py-2 rounded text-white font-semibold ${
            activeTab === "completed" ? "bg-green-500" : "bg-gray-700"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setActiveTab("failed")}
          className={`px-4 py-2 rounded text-white font-semibold ${
            activeTab === "failed" ? "bg-red-500" : "bg-gray-700"
          }`}
        >
          Failed
        </button>
      </div>
      {renderComponent()}
    </div>
  );
};

export default TaskList;
