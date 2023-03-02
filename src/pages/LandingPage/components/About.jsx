import vector2 from "../images/vector2.png";
export default function About() {
  return (
    <section className=" ml-8 mr-8 flex h-auto w-screen flex-row">
      <div
        style={{ width: "50%", display: "flex" }}
        className="relative items-center"
      >
        <img src={vector2} alt="" className="h-auto w-auto" />
      </div>
      <div style={{ width: "50%" }} className="flex flex-col items-center ">
        <div className="text-6xl text-black">
          A Brief History of Our App's Origin: From Idea to Launch.
        </div>
        <div className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et
        </div>
      </div>
    </section>
  );
}
