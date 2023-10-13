import Video from "./Video";

const Videos = () => {
  return (
    <div className="w-full gap-5 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-center">
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
};

export default Videos;
