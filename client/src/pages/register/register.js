import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  let histroy = useHistory();

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      confirmPassword.current.setCustomValidity("Passwords don't match");
    } else {
      try {
        const url = "http://localhost:5000/api/auth/register";
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
          }),
        };
        const response = await fetch(url, options);
        if (response.status === 200) {
          histroy.push("/login");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const loginHandler = () => {
    histroy.push("/login");
  };
  return (
    <div className="w-full min-h-screen bg-grey-100 flex items-center justify-center px-60 gap-8">
      <div className="flex flex-col flex-1 justify-center items-end">
        <img
          src="/images/loginImage.jpg"
          alt="/"
          className="h-125 w-125 rounded-md"
        />
      </div>
      <div className="flex-1">
        <form
          className="flex flex-col h-96 bg-white rounded-lg justify-between p-7 w-125"
          onSubmit={signUpHandler}
        >
          <input
            placeholder="Username"
            ref={username}
            required
            className=" h-12 rounded-lg border-grey-50 border text-lg px-2 focus:outline-none"
          />
          <input
            placeholder="Email"
            type="email"
            ref={email}
            required
            className=" h-12 rounded-lg border-grey-50 border text-lg px-2 focus:outline-none"
          />
          <input
            placeholder="Password"
            type="password"
            ref={password}
            required
            className=" h-12 rounded-lg border-grey-50 border text-lg px-2 focus:outline-none"
          />
          <input
            placeholder="Confirm Password"
            type="password"
            ref={confirmPassword}
            required
            className=" h-12 rounded-lg border-grey-50 border text-lg px-2 focus:outline-none"
          />
          <button
            className=" h-12 rounded-lg bg-blue-50 text-white bordr-none cursor-pointer text-lg font-RobotoBold"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="bg-white w-125 rounded-lg mt-5 p-5">
          <button
            className=" h-12 rounded-lg bg-green-100 text-white bordr-none cursor-pointer w-full font-RobotoBold text-lg"
            onClick={loginHandler}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
