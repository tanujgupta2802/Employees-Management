import React from "react";

const Header = ({ onLogout }) => {
  return (
    <>
      <div className="flex justify-between items-center p-15">
        <div>
          <h1 className="text-white text-2xl font-bold">
            Hi 👋
            <br /> UserName
          </h1>
        </div>

        <div>
          <button
            onClick={() => window.location.reload()}
            className="text-white font-semibold bg-red-500 border-2 border-red-500 rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-red-700 hover:border-red-700"
          >
            Back to Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
