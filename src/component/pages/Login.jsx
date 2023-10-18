import React from "react";
import { AiFillLock } from "react-icons/ai";
import { PiAtDuotone } from "react-icons/pi";
import Button from "../Button";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const Login = () => {
  return (
    <div className="container2 mt-7">
      <h1 className="text-xl font-bold ">Login to your account</h1>
      <div className="md:flex justify-between">
        <Illustration />
        <div className="flex flex-col gap-4 md:w-1/2 mt-6 ml-auto">
          <TextInput
            type="text"
            placeholder="Enter email"
            icon={<PiAtDuotone />}
          />
          <TextInput
            type="password"
            placeholder="Enter password"
            icon={<AiFillLock />}
          />

          <Button className="bg-green-500 py-2 text-center rounded-md text-base font-bold uppercase cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            Submit now
          </Button>

          <div className="flex gap-1 justify-center group">
            Don't have an account?
            <a
              className="group-hover:underline text-blue-700 font-semibold"
              href=""
            >
              Signup
            </a>
            instead.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
