import { AiOutlineLogout } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Account = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      <div className="flex items-center gap-2 cursor-pointer">
        {currentUser ? (
          <>
            <span className="">
              <BiUserCircle size={30} />
            </span>
            <span>{currentUser.displayName}</span>
            <span onClick={logout}>
              <AiOutlineLogout size={25} />
            </span>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Account;
