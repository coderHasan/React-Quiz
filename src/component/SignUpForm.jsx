import { useState } from "react";
import { AiFillLock, AiOutlineUser } from "react-icons/ai";
import { MdPunchClock } from "react-icons/md";
import { PiAtDuotone } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [errorcharacter, setErrorcharacter] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }
    if (password.length < 6) {
      return setErrorcharacter("Password should be at least 6 character");
    }

    try {
      setError("");
      setErrorcharacter("");
      setLoading(true);
      await signup(email, password, username);
      history("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
      setErrorcharacter("Failed to create an account!");
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className="w-[500px]">
        <div className="flex flex-col gap-4 mt-6 ml-auto">
          <TextInput
            type="text"
            required
            placeholder="Enter name"
            icon={<AiOutlineUser />}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextInput
            type="text"
            required
            placeholder="Enter email"
            icon={<PiAtDuotone />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextInput
            type="password"
            required
            placeholder="Enter password"
            icon={<AiFillLock />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextInput
            type="password"
            required
            placeholder="Confirm password"
            icon={<MdPunchClock />}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <CheckBox
            text="I agree to Terms &amp; Conditions"
            required
            value={agree}
            onChange={(e) => setAgree(e.target.value)}
          />

          <Button
            disabled={loading}
            type="submit"
            className="bg-green-500 py-2 text-center rounded-md text-base font-bold uppercase cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
          >
            <span>Submit now</span>
          </Button>

          {error && <p>{error}</p>}
          {errorcharacter && <p>{errorcharacter}</p>}

          <div className="flex gap-1 justify-center group">
            Already have an account?
            <Link
              className="group-hover:underline text-blue-700 font-semibold"
              to="/login"
            >
              Login
            </Link>
            instead.
          </div>
        </div>
      </Form>
    </>
  );
};

export default SignUpForm;
