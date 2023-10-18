import { AiFillLock, AiOutlineUser } from "react-icons/ai";
import { MdPunchClock } from "react-icons/md";
import { PiAtDuotone } from "react-icons/pi";
import Button from "../Button";
import CheckBox from "../CheckBox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const Signup = () => {
  return (
    <div className="container2 mt-7">
      <h1 className="text-xl font-bold ">Create an account</h1>

      <div className="md:flex justify-between">
        <Illustration />

        <div className="flex flex-col gap-4 md:w-1/2 mt-6 ml-auto">
          <TextInput
            type="text"
            placeholder="Enter name"
            icon={<AiOutlineUser />}
          />
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
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon={<MdPunchClock />}
          />

          <CheckBox text="I agree to Terms &amp; Conditions" />

          <Button className="bg-green-500 py-2 text-center rounded-md text-base font-bold uppercase cursor-pointer">
            Submit now
          </Button>

          <div className="flex gap-1 justify-center group">
            Already have an account?
            <a
              className="group-hover:underline text-blue-700 font-semibold"
              href=""
            >
              Login
            </a>
            instead.
          </div>
        </div>

        <Form />
      </div>
    </div>
  );
};

export default Signup;
