import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "./Button";
import classes from "./style/progreesber.module.css";

const Progressber = () => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        <span>
          <AiOutlineArrowLeft />
        </span>
      </div>

      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>24% Complete!</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: "20%" }}></div>
        </div>
      </div>

      <Link to="/result">
        <Button>
          <div className="flex items-center gap-2 bg-black text-white p-2 rounded-md">
            <span>Next Question</span>
            <span>
              <IoIosArrowForward />
            </span>
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default Progressber;
