import React from "react";
import { useContext } from "react";
import { productContext } from "../Utills/Contex";
import { Link } from "react-router-dom";


function Nav() {
  const [products] = useContext(productContext);

  // let distrin_category =
  //   products && products.reduce((acc, cv) => [...acc, cv.category], []);
  // distrin_category = [...new Set(distrin_category)];
let distrin_category =
  products && products.reduce((acc, cv) => [...acc, cv.category.trim()], []);
distrin_category = [...new Set(distrin_category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
    //                                                                                                                ^ Add ')' here
  };

  return (
    <>
      <nav className="w-[15%] h-[5%]bg-zinc-50 flex flex-col items-center pt-5">
        <hr className="w-[80%] my-3" />
        <h1 className="text-2xl  mb-3 w-[80%]">category Filter</h1>
        <div className=" w-[80%]">
          {distrin_category.map((c, i) => (
            <Link
              key={i}
              to={`/?category=${c}`}
              className=" flex items-center mb-3"
            >
              <span
                style={{ backgroundColor: color() }}
                className="rounded-full mr-2  w-[15px] h-[15px] "
              ></span>{" "}
              {c}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Nav;
