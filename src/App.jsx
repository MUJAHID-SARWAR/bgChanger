import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flew-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full  text-gray-800 shadow-xl"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full  text-gray-800 shadow-xl"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("aqua")}
            className="outline-none px-4 py-1 rounded-full  text-gray-800 shadow-xl"
            style={{ backgroundColor: "aqua" }}
          >
            Aqua
          </button>
          <h1
            className=" px-4 py-1  shadow-2xl justify-center text-center cursor-pointer"
            onClick={() => setColor("olive")}
          >
            Mujahid Sarwar
          </h1>
        </div>
      </div>
    </div>
  );
}
export default App;
