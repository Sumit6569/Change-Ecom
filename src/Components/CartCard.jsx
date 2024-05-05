import React from "react";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import {
  increaseByOne,
  decreseByOne,
  removeFromCart,
} from "../store/CartSlice.js";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ExampleWrapper from "./ExampleWrapper.jsx";
import { Button } from "bootstrap";
export default function CartCard({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item));
  };
  const handleIncreseItem = () => {
    dispatch(increaseByOne(item));
  };

  const handleDecreseItem = () => {
    if (item.itemCount === 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decreseByOne(item));
    }
  };
  <div
    onClick={handleRemove}
    className="absolute top-1 text-red-500 cursor-pointer right-1 text-xl"
  >
    <MdDelete />
  </div>;
  return (
    <>
      {/* <div className="flex  md:h-fit bg-white rounded-md px-3 py-2 relative items-center shadow-md md:w-[900px] gap-1  md:gap-5 w-[250px] flex-col md:flex-row">
        <Link to={`/details/${item.id}`}>
          <div className="h-[150px] w-[200px] prevent-select flex justify-center items-center overflow-hidden">
           
            <img src={item.image} className=" object-cover" alt="" />
          </div>
        </Link>
        <div className="flex flex-col w-full items-start gap-1">
          <h1 className=" font-bold text-[14px]">{item.title}</h1>
          <div className="md:block hidden"> {item.description} </div>${" "}
          <span>{item.price}</span>
          <div className="flex prevent-select items-center gap-2 text-xs bg-gray-200 px-2 py-1 rounded-sm">
            <IoIosAddCircle onClick={handleIncreseItem} />
            <span className="font-bold">{item.itemCount}</span>
            {item.itemCount === 1 ? (
              <ExampleWrapper
                className="opacity-0"
                onClick={handleIncreseItem}
              />
            ) : (
              <FaMinus
                className="cursor-pointer "
                onClick={handleDecreseItem}
              />
            )}
          </div>
          <div></div>
          <div
            onClick={handleRemove}
            className="absolute top-1 text-red-500 cursor-pointer right-1 text-xl"
          >
            <MdDelete />
          </div>
          <div className="flex items-center gap-2 text-white w-fit ">
            <span className="bg-green text-xs px-1 py-1 rounded-sm bg-green-600 flex items-center gap-1">
              {item.rating.rate}
              {item.rating.count}
            </span>
           
          </div>
          <div className="flex items-center font-bold">
          
          </div>
          <div className="flex prevent-select items-center gap-2 text-xs bg-gray-200 px-2 py-1 rounded-sm">
           
          </div>
        </div>
      </div> */}

      <section
        aria-labelledby="cart-heading"
        class="rounded-lg bg-white lg:col-span-8"
      >
        <h2 id="cart-heading" class="sr-only">
          Items in your shopping cart
        </h2>
        <ul role="list" class="divide-y divide-gray-200">
          <div class="">
            <li class="flex py-6 sm:py-6 ">
              <div class="flex-shrink-0">
                <img
                  src={item.image}
                  alt="Nike Air Force 1 07 LV8"
                  class="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                />
              </div>
              <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">
                        <a href="#" class="font-semibold text-black">
                          {item.title}
                        </a>
                      </h3>
                    </div>
                    <div class="mt-1 flex text-sm">
                      <p class="text-sm text-gray-500">Orange</p>
                      <p class="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                        8 UK
                      </p>
                    </div>
                    <div class="mt-1 flex items-end">
                      <p class="text-xs font-medium text-gray-500 line-through">
                        ₹48,900
                      </p>
                      <p class="text-sm font-medium text-gray-900">
                          {item.price}
                      </p>
                        
                      <p class="text-sm font-medium text-green-500">5% Off</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <div class="mb-2 flex">
              <div class="min-w-24 flex">
                <button
                  onClick={handleDecreseItem}
                  type="button"
                  class="h-7 w-7"
                >
                  -
                </button>
                <span className="mx-1 h-7 w-9 rounded-md border text-center">
                  {item.itemCount}
                </span>

                <button
                  onClick={handleIncreseItem}
                  type="button"
                  class="flex h-7 w-7 items-center justify-center "
                >
                  +
                </button>
              </div>
              <div class="ml-6 flex text-sm">
                <button
                  onClick={handleRemove}
                  type="button"
                  class="flex items-center space-x-1 px-2 py-1 pl-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-red-500"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                  <span class="text-xs font-medium text-red-500">Remove</span>
                </button>
              </div>
            </div>
          </div>
        </ul>
      </section>
    </>
  );
}
