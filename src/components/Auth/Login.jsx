import React, { useState, useEffect } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const alreadyAlerted = sessionStorage.getItem("loginAlertShown");

    if (!alreadyAlerted) {
      alert(
        "Click on 'Show Demo Credentials' to get Email & Password for login."
      );
      sessionStorage.setItem("loginAlertShown", "true");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log("Your email is", email, "Your password is", password);
    setEmail(""), setPassword("");
  };
  return (
    <>
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h2 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Login Form
          </h2>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email?"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-red-500 border-red-500 py-2 rounded-[5px] hover:cursor-pointer hover:bg-red-800"
                >
                  Sign in
                </button>
                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p> */}
                {/* <button
                  type="button"
                  onClick={() =>
                    alert(
                      "🛠 Demo Credentials:\n\nAdmin:\n  Email: admin@example.com\n  Password: 123\n\nEmployee:\n  Email: employee1@example.com\n  Password: 123"
                    )
                  }
                  className="text-sm text-blue-400 underline mt-2 hover:text-blue-600"
                >
                  Show Demo Credentials
                </button> */}
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "🛠 Demo Credentials:\n\nAdmin:\n  Email: admin@example.com\n  Password: 123\n\nEmployees:\n  Email: employee1@example.com\n  Password: 123\n  Email: employee2@example.com\n  Password: 123\n  Email: employee3@example.com\n  Password: 123"
                    )
                  }
                  className="w-full text-white bg-blue-600 mt-3 py-2 rounded-md hover:bg-blue-800 hover:cursor-pointer"
                >
                  Show Demo Credentials
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
