import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const email = useRef();
  const password = useRef();
  let histroy = useHistory();

  const { user, isFetching, dispatch } = useContext(AuthContext);
  const signUpHandler = () => {
    histroy.push("/signup");
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // const url = "http://localhost:5000/api/auth/login";
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: email.current.value,
    //     password: password.current.value,
    //   }),
    // };
    // const response = await fetch(url, options);
    // const data = await response.json();

    // if (response.status === 200) {
    //   histroy.replace({ pathname: "/homepage", state: { item: data } });
    // }

    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
          onSubmit={handleClick}
        >
          <input
            placeholder="Email"
            type="email"
            className=" h-12 rounded-lg border-grey-50 border text-lg px-2 focus:outline-none"
            ref={email}
            required
          />
          <input
            placeholder="Password"
            type="password"
            className=" h-12 rounded-lg border-grey-50 border text-lg px-2 focus:outline-none"
            ref={password}
            required
            minLength="8"
          />
          <button className=" h-12 rounded-lg bg-blue-50 text-white bordr-none cursor-pointer text-lg font-RobotoBold">
            Log In
          </button>
          <span className="text-center text-blue-100 font-RobotoRegular">
            Forgot Password?
          </span>
        </form>
        <div className="bg-white w-125 rounded-lg mt-5 p-5">
          <button
            className=" h-12 rounded-lg bg-green-100 text-white bordr-none cursor-pointer w-full font-RobotoBold text-lg"
            onClick={signUpHandler}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
