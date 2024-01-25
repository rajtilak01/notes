import React from "react";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

function Footer({ data }) {
  return (
    <div className="absolute  bottom-0 w-full left-0">
      <div className="flex justify-between items-center px-8 py-3 mb-1">
        <h5>{data.filesize}</h5>
        <span className="w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center">
          {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />}
        </span>
      </div>
      {data.tag.isOpen && (
        <div
          className={`tag w-full py-3 ${
            data.tag.tagColor === "blue" ? "bg-sky-600" : "bg-green-600"
          } flex justify-center items-center`}
        >
          <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
        </div>
      )}
    </div>
  );
}

export default Footer;
