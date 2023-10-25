import { Link } from "react-router-dom";
import Video from "./Video";
const Videos = () => {
  return (
    <div className="w-full gap-5 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-items-center">
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
    </div>
  );
};

export default Videos;
