import Illustration from "../Illustration";
import SignUpForm from "../SignUpForm";
const Signup = () => {
  return (
    <div className="container2 mt-7">
      <h1 className="text-xl font-bold ">Create an account</h1>

      <div className="md:flex justify-between">
        <Illustration />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Signup;
