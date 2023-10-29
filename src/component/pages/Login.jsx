import React from "react";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

const Login = () => {
  return (
    <div className="container2 mt-7">
      <h1 className="text-xl font-bold ">Login to your account</h1>
      <div className="md:flex justify-between">
        <Illustration />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
