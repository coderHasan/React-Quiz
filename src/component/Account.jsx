import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
const Account = () => {
  return (
    <div>
      <div className="flex items-center gap-2 cursor-pointer">
        <span className="">
          <BiUserCircle size={30} />
        </span>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        {/* <span>LogOut</span> */}
      </div>
    </div>
  );
};

export default Account;
