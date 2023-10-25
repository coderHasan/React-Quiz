import Question from "./Question";
import classes from "./style/Analysis.module.css";

const Analysis = () => {
  return (
    <div className={classes.analysis}>
      <h1 className="text-3xl font-bold">Question Analysis</h1>
      <h4 className="border-b border-[#ddd] py-2">
        You answerd 5 out of 10 questions correctly
      </h4>
      <Question />
    </div>
  );
};

export default Analysis;
