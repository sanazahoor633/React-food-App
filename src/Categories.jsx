import React from "react";
import { FaBorderAll } from "react-icons/fa";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { FaPizzaSlice } from "react-icons/fa";
import { CiBowlNoodles } from "react-icons/ci";
import { ImSpoonKnife } from "react-icons/im";
import { GiHamburger } from "react-icons/gi";

const Categories = [
  {
    id: 1,
    name: "All",
    image: <FaBorderAll className="w-[60px] h-[60px] text-green-500" />,
  },

  {
    id: 2,
    name: "breakfast",
    image: <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-500" />,
  },

  {
    id: 3,
    name: "soups",
    image: <LuSoup className="w-[60px] h-[60px] text-green-500" />,
  },

  {
    id: 4,
    name: "pasta",
    image: <CiBowlNoodles className="w-[60px] h-[60px] text-green-500" />,
  },

  {
    id: 5,
    name: "main_course",
    image: <ImSpoonKnife className="w-[60px] h-[60px] text-green-500" />,
  },

  {
    id: 6,
    name: "pizza",
    image: <FaPizzaSlice className="w-[60px] h-[60px] text-green-500" />,
  },

  {
    id: 7,
    name: "burger",
    image: <GiHamburger className="w-[60px] h-[60px] text-green-500" />,
  },
];


export default Categories