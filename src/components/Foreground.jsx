import React, {useRef} from "react";
import Cards from "./Cards";


function Foreground() {
  
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now.",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now.",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now.",
        tagColor: "green",
      },
    },
  ];
  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 p-5   flex-wrap">
      {data.map((item, index)=>(
        <Cards data = {item} reference = {ref}  />
      ))}
    </div>
  );
}

export default Foreground;
