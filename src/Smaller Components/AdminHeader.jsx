import React from "react";
import Header from "./Header";
const AdminHeader = ({ onLogout }) => {
  return (
    <>
      <div className="bg-black">
        <Header onLogout={onLogout} />
        <h1 className="text-center text-4xl pt-5 pb-10 text-white font-bold">
          Admin Panel
        </h1>
      </div>
    </>
  );
};

export default AdminHeader;
