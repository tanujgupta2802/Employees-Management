import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  useEffect(() => {
    setLocalStorage();
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser);
    } else {
      setUser(null);
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (
      authData?.admin?.email === email &&
      authData?.admin?.password === password
    ) {
      const loginData = { role: "admin", email };
      localStorage.setItem("loggedInUser", JSON.stringify(loginData));
      setUser(loginData);
    } else {
      const found = authData?.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (found) {
        const loginData = { role: "employee", email };
        localStorage.setItem("loggedInUser", JSON.stringify(loginData));
        setUser(loginData);
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div>
      {console.log("Current user is:", user)}
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === "admin" ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : (
        <EmployeeDashboard onLogout={handleLogout} userEmail={user.email} />
      )}
    </div>
  );
};

export default App;
