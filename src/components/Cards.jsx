import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import Footer from "./Footer";
import {motion} from "framer-motion"

function Cards({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className="relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="font-semibold mt-5 text-sm leading-tight">{data.desc}</p>
      <Footer data = {data}/>
    </motion.div>
  );
}

export default Cards;
