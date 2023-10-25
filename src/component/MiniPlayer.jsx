import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import classes from "./style/MiniPlayer.module.css";

const MiniPlayer = () => {
  return (
    <div className={` ${classes.miniPlayer} ${classes.floatingBtn} bg-black`}>
      <span className={`${classes.open} bg-green-400 rounded-full p-1`}>
        <BsFillPlayFill />
      </span>
      <span className={`${classes.close} flex items-center justify-center`}>
        <AiOutlineCloseCircle />
      </span>
      <img src="/assets/image/3.jpg" alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;
