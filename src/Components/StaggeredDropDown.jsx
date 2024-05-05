import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import React from "react";
import { useContext } from "react";
import { productContext } from "../Utills/Contex";
import { Link } from "react-router-dom";
import { IoIosMan } from "react-icons/io";
import { IoWoman } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import { GrRestroomWomen } from "react-icons/gr";
import "./Com.css";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  const [products] = useContext(productContext);

 let distrin_category =
   products && products.reduce((acc, cv) => [...acc, cv.category.trim()], []);
 distrin_category = [...new Set(distrin_category)];

 const color = () => {
   return `rgba(${(Math.random() * 255).toFixed()},${(
     Math.random() * 255
   ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
   //                                                                                                                ^ Add ')' here
 };
  //  {
  //    distrin_category.map((c, i) => (
  //      <Link key={i} to={`/?category=${c}`} className=" flex items-center mb-3">
  //        <span

  //          className="rounded-full mr-2  w-[15px] h-[15px] "
  //        ></span>{" "}
  //        {c}
  //      </Link>
  //    ));
  //  }

  return (
    <div className="p-8 pb-1 flex items-center justify-center bg-white ">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
        >
          <span className="font-medium text-sm">Catogery</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="  flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden   "
        >
          {" "}
          {distrin_category.map((c, i) => (
            <motion.li key={i} variants={itemVariants}>
              <Link to={`/?category=${c}`} className="flex items-center mb-3">
                {/* Wrap each icon in its own span */}

                <IoIosMan />

                {c.toUpperCase()}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
