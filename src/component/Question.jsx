import { AiOutlineQuestion } from "react-icons/ai";
import Answers from "./Answers";
import classes from "./style/Question.module.css";
const Question = () => {
  return (
    <div className={classes.question}>
      <div className={`${classes.qtitle} mb-3`}>
        <span className="border-2 border-green-400 rounded-full">
          {" "}
          <AiOutlineQuestion color="green" fontWeight={900} />{" "}
        </span>
        <span className="">Here goes the question from Learn with Sumit?</span>
      </div>
      <Answers />
    </div>
  );
};

export default Question;
