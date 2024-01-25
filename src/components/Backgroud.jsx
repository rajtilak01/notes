import React from "react";

function Backgroud() {
  return (
    <div className="w-full h-screen fixed">
      <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-500 font-semibold text-xl">
          NOTES.{" "}
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900 text-[13vw] leading-none tracking-tighter">
        Notes
      </h1>
    </div>
  );
}

export default Backgroud;
