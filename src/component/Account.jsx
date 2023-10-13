import { BiUserCircle } from "react-icons/bi";

const Account = () => {
  return (
    <div>
      <div className="flex items-center gap-2 cursor-pointer">
        <span className="">
          <BiUserCircle size={30} />
        </span>
        <a href="">Signup</a>
        {/* <span>LogOut</span> */}
      </div>
    </div>
  );
};

export default Account;
