import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import Progressber from "../Progressber";

const Quiz = () => {
  return (
    <div className="container2 mt-6">
      <h1 className="text-2xl font-bold mb-2">
        Pick three of your favorite star wars flimfa-stack
      </h1>
      <h2 className="border-b border-gray-300 pb-1 text-[#4c3f9e] font-semibold">
        Question can have multiple answers
      </h2>
      <div>
        <Answers />
        <Progressber />
        <MiniPlayer />
      </div>
    </div>
  );
};

export default Quiz;
