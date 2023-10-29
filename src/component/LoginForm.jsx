import { useState } from "react";
import { AiFillLock } from "react-icons/ai";
import { PiAtDuotone } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to logIn");
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className="w-[500px]">
        <div className="flex flex-col gap-4 mt-6 ml-auto">
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

          <Button
            disabled={loading}
            type="submit"
            className="bg-green-500 py-2 text-center rounded-md text-base font-bold uppercase cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
          >
            Submit now
          </Button>

          {error && <p>{error}</p>}

          <div className="flex gap-1 justify-center group">
            Don't have an account?
            <Link
              className="group-hover:underline text-blue-700 font-semibold"
              to="/signup"
            >
              Signup
            </Link>
            instead.
          </div>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
