const Video = () => {
  return (
    <a href="">
      <div className="max-w-[400px] h-fit bg-[#fff] border border-[#e5e5e5] p-[10px] pb-[1rem] rounded-md cursor-pointer">
        <img
          className="w-full object-cover "
          src="/assets/image/3.jpg"
          alt=""
        />
        <p className="pt-3 text-base font-semibold lading-[0px]">
          #23 React Hooks Bangla - React useReducer hook Bangla
        </p>

        <div className="flex justify-between pr-[6px] pt-3">
          <p className="text-sm font-[500]">10 Questions</p>
          <p className="text-sm font-[500]">Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
};

export default Video;
